import { useEffect } from 'react'
import '../styles/Menu.css'

function Menu() {
  useEffect(() => {
    document.title = 'Menu - Wedding Celebration'
  }, [])

  // Menu items - Update with actual dishes
  const menuItems = [
    {
      name: 'Herb-Crusted Salmon',
      ingredients: 'Fresh Atlantic salmon, lemon herb butter, roasted vegetables, quinoa pilaf',
      tags: ['Gluten-Free', 'Dairy-Free']
    },
    {
      name: 'Beef Tenderloin',
      ingredients: 'Prime beef tenderloin, red wine reduction, garlic mashed potatoes, seasonal vegetables',
      tags: ['Gluten-Free']
    },
    {
      name: 'Vegetarian Risotto',
      ingredients: 'Creamy arborio rice, wild mushrooms, parmesan cheese, fresh herbs, truffle oil',
      tags: ['Vegetarian', 'Gluten-Free']
    },
    {
      name: 'Caprese Salad',
      ingredients: 'Fresh mozzarella, heirloom tomatoes, basil, balsamic reduction, extra virgin olive oil',
      tags: ['Vegetarian', 'Gluten-Free', 'Nut-Free']
    },
    {
      name: 'Vegan Buddha Bowl',
      ingredients: 'Quinoa, roasted sweet potatoes, chickpeas, avocado, tahini dressing, microgreens',
      tags: ['Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free']
    },
    {
      name: 'Chocolate Lava Cake',
      ingredients: 'Warm chocolate cake, vanilla bean ice cream, fresh berries, chocolate sauce',
      tags: ['Vegetarian']
    }
  ]

  const getTagClass = (tag) => {
    const tagMap = {
      'Vegetarian': 'tag-vegetarian',
      'Vegan': 'tag-vegan',
      'Gluten-Free': 'tag-gluten-free',
      'Dairy-Free': 'tag-dairy-free',
      'Nut-Free': 'tag-nut-free'
    }
    return tagMap[tag] || 'tag-default'
  }

  return (
    <div className="menu-page">
      <section className="menu-content section">
        <div className="container">
          <h1 className="page-title">Wedding Menu</h1>
          <p className="page-subtitle">A culinary celebration of our love</p>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
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

