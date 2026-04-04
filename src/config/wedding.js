// src/config/wedding.js
//
// Single source of truth for all wedding-specific content.
// Update this file to change names, dates, venues, links, and text
// across the entire site without touching individual page components.

// ---------------------------------------------------------------------------
// Couple
// ---------------------------------------------------------------------------
export const couple = {
  name1: "Samuel",
  name2: "Mayfred",
  // ISO 8601 datetime used by the countdown timer
  weddingDate: "2026-06-06T11:45:00",
  // Human-readable date shown in the names section
  weddingDateFormatted: "JUNE 6, 2026",
};

// ---------------------------------------------------------------------------
// Shared values (used on multiple pages)
// ---------------------------------------------------------------------------
export const contact = {
  phone: "+358 45 118 6833",
};

export const notices = {
  adultsOnly:
    "While we love our little ones, we have decided to make our wedding an adults-only celebration. Thank you for understanding.",
};

// ---------------------------------------------------------------------------
// Home page content
// ---------------------------------------------------------------------------
export const welcome = {
  message:
    "Welcome to our wedsite. Here you will find the details of the event. We are very excited to celebrate this special day with you. Please check back for more updates as the date gets closer.",
};

export const story = {
  text: "Want to hear how we met? Come back on 30th of April to read our love story!",
};

export const schedule = {
  ceremony: "11:45 AM - 1:15 PM",
  reception: "3:00 PM - 9:00 PM",
};

// ---------------------------------------------------------------------------
// RSVP
// ---------------------------------------------------------------------------
export const rsvp = {
  deadline: "10.05.2026",
  // Tally embed URL — update the form ID (e.g. "81dJ0A") when the form changes
  tallyFormUrl:
    "https://tally.so/embed/81dJ0A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
};

// ---------------------------------------------------------------------------
// Ceremony venue
// ---------------------------------------------------------------------------
export const ceremony = {
  venueName: "German Evangelical Lutheran Church",
  address: "Bernhardinkatu 4, 00130 Helsinki, Finland",
  mapUrl:
    "https://maps.google.com/maps?q=Bernhardinkatu+4,+00130+Helsinki,+Finland&output=embed",
  directions: {
    driving:
      "The church is centrally located in the Kaartinkaupunki district. Drive to Bernhardinkatu 4, 00130 Helsinki. Street parking is available directly on Bernhardinkatu.",
    transit:
      "Take Tram 2 to Eteläranta tra stop and 5 min walk (257 m). Alternatively, take Tram 7 and stop at senaatintori and walk 11 mins (630 m).",
    parking:
      "Street parking is available on Bernhardinkatu 3-4, directly outside the church and surrounding areas(Eteläranta and laivasillankatu). Nearest parking garage: Aimo Park Kasarmitori at Fabianinkatu 4, 00130 Helsinki (~400 m walk, ~5 min).  Another option is Makasiiniranta P2 and P3 .",
  },
};

// ---------------------------------------------------------------------------
// Reception venue
// ---------------------------------------------------------------------------
export const reception = {
  venueName: "Reception Hall",
  address: "Keskikatu 5, 04200 Kerava",
  mapUrl:
    "https://maps.google.com/maps?q=Keskikatu+5,+04200+Kerava,+Finland&output=embed",
  directions: {
    "Public transportation":
      "From Helsinki Cental Station, take the R (towards Riihimäki), K(towards Kerava) or Z(towards Lahti) train and get off at Kerava station. From Kerava station, it’s a 10-minute walk to the reception venue at Keskikatu 5.",
    parking:
      "There are several parking options near the reception venue. Street parking is also available on Keskikatu and surrounding streets. ",
  },
};

// ---------------------------------------------------------------------------
// Photos
// ---------------------------------------------------------------------------
export const photos = {
  link: "https://www.dropbox.com/request/2GCljGWqNYOIVCSfYgOI",
  // Each string becomes one paragraph in the upload instructions section
  uploadInstructions: [
    "Scan the QR code or click the button below to share your shots with us.",
    "No sign-in required, just select your files and share.",
    "Thank you for helping us preserve these beautiful memories!",
  ],
};

// ---------------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------------
export const menu = {
  items: [
    {
      name: "Waakye",
      ingredients:
        "Rice and black-eyed beans cooked together with sorghum leaves, served with stew, fried plantain, spaghetti, shito and fried fish",
      tags: ["Gluten-Free", "Dairy-Free", "Vegan (without fish)"],
    },
    {
      name: "Jollof Rice",
      ingredients: "Rice slow-cooked in a rich tomato sauce",
      tags: ["Gluten-Free", "Dairy-Free"],
    },
    {
      name: "Fried Rice",
      ingredients:
        "Stir-fried rice with mixed vegetables, eggs, and seasoned with soy sauce and aromatic spices",
      tags: ["Dairy-Free"],
    },
    {
      name: "Fried Plantain and Beans",
      ingredients:
        "Fried ripe plantains and beans stew cooked with palm oil,tomatoes, onions, and spices",
      tags: ["Gluten-Free", "Dairy-Free"],
    },
    {
      name: "Banku with Pepper and Fish",
      ingredients:
        "Fermented corn and cassava dough served with a  red pepper sauce and grilled tilapia",
      tags: ["Gluten-Free", "Dairy-Free"],
    },
    {
      name: "Kosua ne Meko",
      ingredients:
        "Soft-boiled eggs with red pepper sauce, garnished with onion",
      tags: ["Gluten-Free", "Dairy-Free", "Vegetarian"],
    },
    {
      name: "Spring Rolls",
      ingredients:
        "Crispy golden rolls filled with seasoned vegetables and served with a sweet chilli dipping sauce",
      tags: ["Dairy-Free", "Vegetarian"],
    },
  ],
};

// ---------------------------------------------------------------------------
// Cash Gift (shown at top of Registry page)
// ---------------------------------------------------------------------------
export const cashGift = {
  message:
    "Your presence is the greatest gift of all! If you'd like to celebrate with a monetary gift, we'd be truly grateful. You can send it via:",
  name: "Mayfred Appiah",
  mobilePay: "+358 45 102 4020", // replace with real MobilePay number
  iban: "FI64 1410 2960 6009 20", // replace with real IBAN
  bankName: "Nordea", // replace with real bank name
};

// ---------------------------------------------------------------------------
// Gift Registry items
// Note: provide 'image' as a direct URL (e.g. product CDN image).
// Open Graph scraping is not possible on a static site — no backend is available.
// ---------------------------------------------------------------------------
export const registry = {
  items: [
    {
      id: "item-1",
      name: "Hedelmäkori Lehti",
      price: "€21.75",
      url: "https://lahjapiste.fi/product/hedelmakori-lehti-3/",
      image: "https://lahjapiste.fi/wp-content/uploads/2025/10/PT3970BK-3.jpg",
    },
    {
      id: "item-2",
      name: "Ninja Foodi K32006 Veitsisetti Veitsilohkossa Sisäänrakennetulla Veitsenteroittimella",
      price: "€171",
      url: "https://www.nordicnest.fi/tuotemerkit/ninja/ninja-veitsisetti-veitsilohkossa-sisaanrakennetulla-veitsenteroittimella/?variantId=606970-01",
      image:
        "https://www.nordicnest.fi/assets/blobs/ninja-ninja-foodi-k32006-veitsisetti-veitsilohkossa-sisaanrakennetulla-veitsenteroittimella-ruostuma/606970-01_1_ProductImageMain-808811089f.png",
    },
    {
      id: "item-3",
      name: "Käsinvalmistettu Bea-aamiaissetti heinäkuviolla, 4 henkilölle (12-osainen)",
      price: "€189",
      url: "https://www.westwing.fi/kasinvalmistettu-bea-aamiaissetti-heinakuviolla-4-henkilolle-12-osainen-fi-24blo34190.html",
      image:
        "https://cdn.shopify.com/s/files/1/0613/3107/9307/files/DEQ24BLO34190-217447_7b00eb934ebd8f6310f629acff63c586_dtl_1.jpg",
    },
    {
      id: "item-4",
      name: "Fissman Etikka- ja Öljypullosetti 2x150 ml",
      price: "€20.49",
      url: "https://hobbyhall.fi/fi/koti-ja-keittio/ruokailuvalineet-ja-keittiotarvikkeet/keittiovalineet/fissman-etikka-ja-oljypullosetti-2x150-ml?id=8238762",
      image:
        "https://hh2.pigugroup.eu/colours/832/736/2/8327362/oljy-etikkapullosarja-2x150-ml-lasi-08ab3-netistai_reference.jpg",
    },
    {
      id: "item-5",
      name: "Nicolas Vahé Pizzaleikkuri",
      price: "€8",
      url: "https://www.nordicnest.fi/tuotemerkit/nicolas-vahe/nicolas-vahe-pizzaleikkuri/?variantId=508921-01",
      image:
        "https://www.nordicnest.fi/assets/blobs/nicolas-vahe-nicolas-vahe-pizzaleikkuri-ruostumaton-teras-akaasia/508921-01_1_ProductImageMain-a9312bf18e.jpg",
    },
    {
      id: "item-6",
      name: "Ninja Detect Power Pro Tehosekoitin TB401EU",
      price: "€169.99",
      url: "https://www.gigantti.fi/product/kodin-pienkoneet/keittion-pienkoneet/tehosekoittimet-mikserit/tehosekoittimet/ninja-detect-power-pro-tehosekoitin-tb401eu-musta/919695",
      image:
        "https://next-media.elkjop.com/image/dv_web_D1800013182562/919695/ninja-detect-power-pro-tehosekoitin-tb401eu-musta.jpg?w=1200&q=75",
    },
      {
      id: "item-7",
      name: "Tefal Ultimate Pure FV9845 Silitysrauta",
      price: "€86,90",
      url: "https://hobbyhall.fi/fi/kodinkoneet-ja-kodinelektroniikka/vaatteidenhoitovalineet/silitysraudat/tefal-ultimate-pure-fv9845?id=1096963",
      image:
        "https://hh2.pigugroup.eu/colours/110/809/8/1108098/tefal-ultimate-pure-fv9845-17158edb8036516d1ba210f2744c2108_reference.jpg",
    },
    {
      id: "item-8",
      name: "Sini Silityslauta Ballade 6400",
      price: "€33,39",
      url: "https://www.tokmanni.fi/silityslauta-ballade-6400-7315546400003",
      image:
        "https://res.cloudinary.com/tokmanni/image/upload/c_pad,b_white,f_auto,h_328,w_328/d_default.png/7315546400003.jpg",
    },
  ],
};
