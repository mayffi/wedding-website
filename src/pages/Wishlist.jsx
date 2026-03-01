import { useState, useEffect } from 'react'
import '../styles/Wishlist.css'
import { cashGift, wishlist } from '../config/wedding'

const STORAGE_KEY = 'wedding_wishlist_purchased'

function loadPurchased() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function Wishlist() {
  const [purchased, setPurchased] = useState(loadPurchased)

  useEffect(() => {
    document.title = 'Gift Wishlist - Wedding Celebration'
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(purchased))
  }, [purchased])

  function togglePurchased(id) {
    setPurchased((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
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
          <h1 className="wishlist-page-title">Gift Wishlist</h1>
          <p className="wishlist-intro">
            Here are some things we would love to have in our new home together.
            If you'd like to give one of these gifts, please click "Mark as
            Purchased" so other guests know it's been taken.
          </p>
          <p className="wishlist-note">
            Note: your selection is saved in your browser — other guests see
            their own view of this list.
          </p>

          <div className="wishlist-grid">
            {wishlist.items.map((item) => {
              const isPurchased = purchased.includes(item.id)
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
                      <div className="gift-card__purchased-overlay">
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
                      >
                        View Item
                      </a>
                      <button
                        className={`gift-card__toggle ${isPurchased ? 'gift-card__toggle--undo' : ''}`}
                        onClick={() => togglePurchased(item.id)}
                        aria-pressed={isPurchased}
                      >
                        {isPurchased ? 'Mark as Available' : 'Mark as Purchased'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wishlist
