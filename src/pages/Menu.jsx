import { useEffect } from 'react'
import '../styles/Menu.css'
import { menu } from '../config/wedding'

function Menu() {
  useEffect(() => {
    document.title = 'Menu - Wedding Celebration'
  }, [])

  const getTagClass = (tag) => {
    const tagMap = {
      'Vegetarian': 'tag-vegetarian',
      'Gluten-Free': 'tag-gluten-free',
      'Dairy-Free': 'tag-dairy-free',
    }
    return tagMap[tag] || 'tag-default'
  }

  return (
    <div className="menu-page">
      <section className="menu-content section">
        <div className="container">
          <h1 className="page-title">Our menu</h1>
          <p className="page-subtitle">We are very excited to serve you these selected Ghanaian dishes and exclusives!</p>
          <div className="menu-grid">
            {menu.items.map((item, index) => (
              <div key={index} className="menu-item fade-in">
                <h3 className="dish-name">{item.name}</h3>
                <p className="dish-ingredients">{item.ingredients}</p>
                <div className="dietary-tags">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`dietary-tag ${getTagClass(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu

