#!/usr/bin/env node
/**
 * Fetch product details from a URL and append to wishlist.items in wedding.js.
 *
 * Usage:
 *   node scripts/fetch-product.js <url> [<url2> ...]
 *
 * The script reads Open Graph / JSON-LD tags from the product page and writes
 * a new entry directly into src/config/wedding.js.
 * No dependencies beyond Node.js 18+ built-in fetch.
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const WEDDING_CONFIG = resolve(__dirname, '../src/config/wedding.js')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getMeta(html, property) {
  // Matches both property="..." and name="..." variants, content before or after
  const a = html.match(
    new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`, 'i')
  )
  if (a) return a[1].trim()
  const b = html.match(
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`, 'i')
  )
  return b ? b[1].trim() : null
}

function getJsonLdPrice(html) {
  // Extract price from JSON-LD structured data (Product schema)
  const scripts = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  for (const scriptMatch of scripts) {
    try {
      const data = JSON.parse(scriptMatch[1])
      const nodes = Array.isArray(data) ? data : [data]
      for (const node of nodes) {
        const product =
          node['@type'] === 'Product'
            ? node
            : node['@graph']?.find((n) => n['@type'] === 'Product')
        if (!product) continue
        const offer = Array.isArray(product.offers) ? product.offers[0] : product.offers
        if (offer?.price) {
          const currency = offer.priceCurrency || 'EUR'
          const symbol = currency === 'EUR' ? '€' : currency
          return `${symbol}${parseFloat(offer.price).toLocaleString('fi-FI')}`
        }
      }
    } catch {
      // malformed JSON-LD — skip
    }
  }
  return null
}

function formatPrice(amount, currency) {
  if (!amount) return null
  const symbol = !currency || currency === 'EUR' ? '€' : currency
  const num = parseFloat(amount)
  if (isNaN(num)) return null
  return `${symbol}${num.toLocaleString('fi-FI')}`
}

async function fetchProduct(url) {
  console.log(`\nFetching: ${url}`)

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; WeddingWishlistBot/1.0)',
      'Accept-Language': 'fi,en;q=0.9',
    },
  })

  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)

  const html = await res.text()

  const name =
    getMeta(html, 'og:title') ||
    html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() ||
    '(unknown product)'

  const image =
    getMeta(html, 'og:image') ||
    getMeta(html, 'og:image:secure_url') ||
    null

  const price =
    formatPrice(getMeta(html, 'product:price:amount'), getMeta(html, 'product:price:currency')) ||
    formatPrice(getMeta(html, 'og:price:amount'), getMeta(html, 'og:price:currency')) ||
    getJsonLdPrice(html) ||
    '(add price)'

  return { name, price, image, url }
}

function nextItemId(configText) {
  const ids = [...configText.matchAll(/id:\s*['"]item-(\d+)['"]/g)].map((m) =>
    parseInt(m[1], 10)
  )
  return ids.length ? Math.max(...ids) + 1 : 1
}

function appendToConfig(product) {
  const text = readFileSync(WEDDING_CONFIG, 'utf8')
  const id = nextItemId(text)

  const placeholderImage = `https://placehold.co/400x300?text=${encodeURIComponent(product.name.slice(0, 20))}`

  const entry = `    {
      id: 'item-${id}',
      name: '${product.name.replace(/'/g, "\\'")}',
      price: '${product.price}',
      url: '${product.url}',
      image: '${product.image || placeholderImage}',
    },`

  // Insert just before the closing ],\n} of wishlist.items (last export in file)
  const updated = text.replace(/(\n  \],\n\}\s*)$/, `\n${entry}$1`)

  if (updated === text) {
    throw new Error('Could not find wishlist.items closing bracket in wedding.js')
  }

  writeFileSync(WEDDING_CONFIG, updated, 'utf8')
  return id
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const urls = process.argv.slice(2)

if (urls.length === 0) {
  console.error('Usage: node scripts/fetch-product.js <url> [<url2> ...]')
  process.exit(1)
}

for (const url of urls) {
  try {
    const product = await fetchProduct(url)
    const id = appendToConfig(product)

    console.log(`  Added item-${id}:`)
    console.log(`    name:  ${product.name}`)
    console.log(`    price: ${product.price}`)
    console.log(`    image: ${product.image ?? '(none found — placeholder used)'}`)
  } catch (err) {
    console.error(`  Error: ${err.message}`)
  }
}

console.log('\nDone. Review src/config/wedding.js and adjust any missing values.')
