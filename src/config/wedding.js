// src/config/wedding.js
//
// Single source of truth for all wedding-specific content.
// Update this file to change names, dates, venues, links, and text
// across the entire site without touching individual page components.

// ---------------------------------------------------------------------------
// Couple
// ---------------------------------------------------------------------------
export const couple = {
  name1: 'Samuel',
  name2: 'Mayfred',
  // ISO 8601 datetime used by the countdown timer
  weddingDate: '2026-06-06T11:30:00',
  // Human-readable date shown in the names section
  weddingDateFormatted: 'JUNE 6, 2026',
}

// ---------------------------------------------------------------------------
// Shared values (used on multiple pages)
// ---------------------------------------------------------------------------
export const contact = {
  phone: '+358 XX XXX XXXX',
}

export const notices = {
  adultsOnly:
    'While we love our little ones, we have decided to make our wedding an adults-only celebration. Thank you for understanding.',
}

// ---------------------------------------------------------------------------
// Home page content
// ---------------------------------------------------------------------------
export const welcome = {
  message:
    'Welcome to our website. Here you will find the details of the event. We are very excited to celebrate this special day with you. Please check back for more updates as the date gets closer.',
}

export const story = {
  text: "We met on our way to a Ghanaian artist's show in Helsinki, not knowing that a simple encounter would change our lives. Our conversation flowed effortlessly. We stayed in touch, and what began as a spark of connection soon grew into a beautiful friendship which blossomed into a love story.",
}

export const schedule = {
  ceremony: '11:30 AM - 1:00 PM',
  reception: '2:30 PM - 8:00 PM',
}

// ---------------------------------------------------------------------------
// RSVP
// ---------------------------------------------------------------------------
export const rsvp = {
  deadline: '10.05.2026',
  // Tally embed URL — update the form ID (e.g. "81dJ0A") when the form changes
  tallyFormUrl:
    'https://tally.so/embed/81dJ0A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
}

// ---------------------------------------------------------------------------
// Ceremony venue
// ---------------------------------------------------------------------------
export const ceremony = {
  venueName: 'German Evangelical Lutheran Church',
  address: 'Bernhardinkatu 4, 00130 Helsinki, Finland',
  mapUrl:
    'https://maps.google.com/maps?q=Bernhardinkatu+4,+00130+Helsinki,+Finland&output=embed',
  directions: {
    driving:
      'The church is centrally located in the Kaartinkaupunki district. Drive to Bernhardinkatu 4, 00130 Helsinki. Street parking (Pay & Display) is available directly on Bernhardinkatu.',
    transit:
      'Take Tram 4 or Tram 10 to the Johanneksenkirkko stop — 4 min walk (224 m). Alternatively, take Metro M1/M2 to Rautatientori (Helsinki Central) and walk 5 min south. Buses 16, 20, 30, 67, 75 & 77 also serve the area. Tickets via the HSL app or ticket machine (AB zone, adult €3.20).',
    parking:
      'Street parking is available on Bernhardinkatu 3-4, directly outside the church and surrounding areas. Nearest parking garage: Aimo Park Kasarmitori at Fabianinkatu 4, 00130 Helsinki (~400 m walk, ~5 min).',
  },
}

// ---------------------------------------------------------------------------
// Reception venue
// ---------------------------------------------------------------------------
export const reception = {
  venueName: 'Elegant Reception Hall',
  address: '456 Reception Hall Avenue, City, State 12345',
  mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576!2d-73.98811768459418!3d40.758895979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTcuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`,
  directions: {
    driving: 'Take Main Street to Reception Avenue. The hall is on the left side.',
    transit: 'Take Bus Route 15 to Reception Stop. The venue is across the street.',
    parking: 'Large parking lot available on-site. Additional parking at adjacent lot.',
  },
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------
export const registry = {
  link: 'https://www.example-registry.com/our-wedding',
}

// ---------------------------------------------------------------------------
// Photos
// ---------------------------------------------------------------------------
export const photos = {
  link: 'https://drive.google.com/drive/folders/your-photo-folder-id',
  // Each string becomes one paragraph in the upload instructions section
  uploadInstructions: [
    'To share your photos with us:',
    '1. Click the button below to access our shared photo album',
    '2. Upload your favorite moments from the wedding',
    '3. Feel free to add captions or comments',
    '4. Thank you for helping us capture these precious memories!',
  ],
}

// ---------------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------------
export const menu = {
  items: [
    {
      name: 'Herb-Crusted Salmon',
      ingredients: 'Fresh Atlantic salmon, lemon herb butter, roasted vegetables, quinoa pilaf',
      tags: ['Gluten-Free', 'Dairy-Free'],
    },
    {
      name: 'Beef Tenderloin',
      ingredients:
        'Prime beef tenderloin, red wine reduction, garlic mashed potatoes, seasonal vegetables',
      tags: ['Gluten-Free'],
    },
    {
      name: 'Vegetarian Risotto',
      ingredients: 'Creamy arborio rice, wild mushrooms, parmesan cheese, fresh herbs, truffle oil',
      tags: ['Vegetarian', 'Gluten-Free'],
    },
    {
      name: 'Caprese Salad',
      ingredients:
        'Fresh mozzarella, heirloom tomatoes, basil, balsamic reduction, extra virgin olive oil',
      tags: ['Vegetarian', 'Gluten-Free', 'Nut-Free'],
    },
    {
      name: 'Vegan Buddha Bowl',
      ingredients:
        'Quinoa, roasted sweet potatoes, chickpeas, avocado, tahini dressing, microgreens',
      tags: ['Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'],
    },
    {
      name: 'Chocolate Lava Cake',
      ingredients: 'Warm chocolate cake, vanilla bean ice cream, fresh berries, chocolate sauce',
      tags: ['Vegetarian'],
    },
  ],
}

// ---------------------------------------------------------------------------
// Cash Gift (shown at top of Wishlist page)
// ---------------------------------------------------------------------------
export const cashGift = {
  message:
    "Your presence is the greatest gift of all! If you'd like to celebrate with a monetary gift, we'd be truly grateful. You can send it via:",
  mobilePay: '+358 XX XXX XXXX', // replace with real MobilePay number
  iban: 'FI XX XXXX XXXX XXXX XX', // replace with real IBAN
  bankName: 'Nordea', // replace with real bank name
}

// ---------------------------------------------------------------------------
// Gift Wishlist items
// Note: provide 'image' as a direct URL (e.g. product CDN image).
// Open Graph scraping is not possible on a static site — no backend is available.
// ---------------------------------------------------------------------------
export const wishlist = {
  items: [
    {
      id: 'item-1',
      name: 'Example Gift Item',
      price: '€99',
      url: 'https://www.example.com/product',
      image: 'https://placehold.co/400x300?text=Gift+Item',
    },
    {
      id: 'item-2',
      name: 'Another Gift Item',
      price: '€149',
      url: 'https://www.example.com/product-2',
      image: 'https://placehold.co/400x300?text=Gift+Item+2',
    },
    {
      id: 'item-3',
      name: 'Third Gift Item',
      price: '€249',
      url: 'https://www.example.com/product-3',
      image: 'https://placehold.co/400x300?text=Gift+Item+3',
    },
  ],
}
