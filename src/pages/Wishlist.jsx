import { useState, useEffect } from 'react'
import '../styles/Wishlist.css'
import { cashGift, wishlist } from '../config/wedding'
import { supabase } from '../lib/supabase'

const BROWSER_ID_KEY = 'wedding_browser_id'

function getBrowserId() {
  let id = localStorage.getItem(BROWSER_ID_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(BROWSER_ID_KEY, id)
  }
  return id
}

function Wishlist() {
  const [browserId] = useState(getBrowserId)
  const [purchased, setPurchased] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Wedding Registry - Wedding Celebration'
  }, [])

  useEffect(() => {
    supabase
      .from('purchased_items')
      .select('item_id, browser_id')
      .then(({ data, error }) => {
        if (!error && data) setPurchased(data)
        setLoading(false)
      })

    const channel = supabase
      .channel('purchased_items_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'purchased_items' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setPurchased((prev) =>
              prev.some((p) => p.item_id === payload.new.item_id)
                ? prev
                : [...prev, payload.new]
            )
          } else if (payload.eventType === 'DELETE') {
            setPurchased((prev) =>
              prev.filter((p) => p.item_id !== payload.old.item_id)
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function markPurchased(itemId) {
    setPurchased((prev) => [...prev, { item_id: itemId, browser_id: browserId }])
    await supabase
      .from('purchased_items')
      .insert({ item_id: itemId, browser_id: browserId })
  }

  async function unmarkPurchased(itemId) {
    setPurchased((prev) => prev.filter((p) => p.item_id !== itemId))
    await supabase
      .from('purchased_items')
      .delete()
      .eq('item_id', itemId)
      .eq('browser_id', browserId)
  }

  return (
    <div className="wishlist-page">
      {/* ── Cash Gift Section ── */}
      <section className="cash-gift-section">
        <div className="container">
          <div className="cash-gift-card">
            <div className="cash-gift-icon">♥</div>
            <h2 className="cash-gift-title">Cash Gift</h2>
            <p className="cash-gift-message">{cashGift.message}</p>
            <div className="cash-gift-details">
              <div className="cash-gift-row">
                <span className="cash-gift-label">Name</span>
                <span className="cash-gift-value">{cashGift.Name}</span>
              </div>
              <div className="cash-gift-divider" />
              <div className="cash-gift-row">
                <span className="cash-gift-label">MobilePay</span>
                <span className="cash-gift-value">{cashGift.mobilePay}</span>
              </div>
              <div className="cash-gift-divider" />
              <div className="cash-gift-row">
                <span className="cash-gift-label">Bank Transfer (IBAN)</span>
                <span className="cash-gift-value">{cashGift.iban}</span>
              </div>
              <div className="cash-gift-row cash-gift-row--sub">
                <span className="cash-gift-label">Bank</span>
                <span className="cash-gift-value">{cashGift.bankName}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gift Items Section ── */}
      <section className="wishlist-section">
        <div className="container">
          <h1 className="wishlist-page-title">Wedding Registry</h1>
          <p className="wishlist-intro">
            Here are some things we would love to have in our new home together.
            If you'd like to give one of these gifts, please click "Mark as
            Purchased" so other guests know it's been taken.
          </p>

          {loading ? (
            <p className="wishlist-loading">Loading...</p>
          ) : (
            <div className="wishlist-grid">
              {wishlist.items.map((item) => {
                const purchaseRow = purchased.find((p) => p.item_id === item.id)
                const isPurchased = !!purchaseRow
                const isMyPurchase = purchaseRow?.browser_id === browserId

                return (
                  <div
                    key={item.id}
                    className={`gift-card ${isPurchased ? 'gift-card--purchased' : ''}`}
                  >
                    <div className="gift-card__image-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="gift-card__image"
                        loading="lazy"
                      />
                      {isPurchased && (
                        <div className="gift-card__purchased-overlay" aria-hidden="true">
                          <span>Purchased</span>
                        </div>
                      )}
                    </div>
                    <div className="gift-card__body">
                      <h3 className="gift-card__name">{item.name}</h3>
                      <p className="gift-card__price">{item.price}</p>
                      <div className="gift-card__actions">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn gift-card__link"
                          aria-label={`View ${item.name}`}
                        >
                          View Item
                        </a>
                        {!isPurchased && (
                          <button
                            className="gift-card__toggle"
                            onClick={() => markPurchased(item.id)}
                          >
                            Mark as Purchased
                          </button>
                        )}
                        {isMyPurchase && (
                          <button
                            className="gift-card__toggle gift-card__toggle--undo"
                            onClick={() => unmarkPurchased(item.id)}
                          >
                            Unmark my selection
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Wishlist
