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
  adultsOnly: "Our wedding is an adults-only celebration.",
  adultsOnlySubtext:
    "Thank you for leaving the kids home!",
};

// ---------------------------------------------------------------------------
// Home page content
// ---------------------------------------------------------------------------
export const story = {
  // Always-visible short hook on the home page
  teaser: [
    "Oh, you’re wondering how we got here?",
    "Come closer.",
    "This is not an ordinary story.",
    "It is one worth telling right ☺️",
    "Ready? ... ",
  ],
  // Full narrative, revealed when the visitor clicks "Tell me more".
  // Each inner array is one section; sections render with an ornamental divider between them.
  sections: [
    [
      "Once upon a time, far from home, in a quiet land deep in the north, where winter lingers and the skies stretch endlessly, two strangers found themselves chasing different dreams in a world so different from everything they knew.",
      "He had left behind France, a country known for love and romance, not in search of love but in pursuit of purpose. A scientist starting over, following the shifting story of climate change into the far north, carrying ambition, discipline, and a quiet curiosity about what this new life might become.",
      "She had grown into that northern world. Graceful. Composed. Quietly extraordinary. A rare balance of elegance and intellect, building her path with intention and calm confidence.",
      "They lived under the same sky.",
      "Walked the same streets.",
      "Breathed the same cold air.",
      "Yet they did not know each other. Not yet.",
    ],
    [
      "One evening, the sound of home drifted through that foreign land.",
      "A Ghanaian artist was coming to town.",
      "For him, it was more than music.",
      "It was a piece of home.",
      "A reason to step out.",
      "A reason to feel close to something familiar again.",
      "So he bought a ticket.",
      "That was all destiny needed.",
      "The journey to the concert was ordinary.",
      "A bus. A metro. A walk. Cold air settling on coats and quiet faces.",
      "And then… her.",
      "Walking ahead of him.",
      "Unaware. Unhurried. Completely herself.",
      "There are moments in life that ask for courage without warning.",
      "This was one of them.",
      "He closed the distance.",
      "“Hello,” he said.",
      "She turned, calm and gentle, and replied softly,",
      "“Moi.”",
      "For a brief second, the world stood still.",
      "Not the word he expected. Not the language he was ready for.",
      "He tried again.",
      "“Hi…”",
      "This time, she smiled, spoke a language he understood.",
      "“Hello.”",
      "And just like that, the moment opened.",
      "“Are you going to the concert?” he asked.",
      "“Yes,” she said.",
      "Simple. But it carried something more.",
      "“Oh nice,” he exclaimed in excitement, discovering their shared interest.",
      "“I’m Samuel. Nice to meet you.”",
      "“I’m Mayfred. Nice to meet you too.”",
      "Two names spoken into the cold northern air, unaware they would one day mean everything to each other.",
    ],
    [
      "There was a pause.",
      "The kind where thoughts race faster than words.",
      "Where you wonder if you have said too much, or not nearly enough.",
      "But something in him refused to let the moment pass.",
      "So he stayed, spoke some more.",
      "Questions followed. Where are you from? What brought you here? What do you do?",
      "And with each answer, she revealed herself, not all at once, but with quiet depth.",
      "She was thoughtful.",
      "She was driven.",
      "She carried grace and brilliance with the same easy hand.",
      "Not just beautiful, but remarkable.",
      "He knew, even then, that this was not a conversation he wanted to end.",
      "They arrived.",
      "Lights. Music. Voices. The hum of a crowd already gathering.",
      "And the moment, as all moments do, began to slip away.",
      "She went her way.",
      "He stayed behind.",
      "He tried to settle into the night, to lose himself in what he had come for.",
      "But something had already shifted.",
      "His mind kept returning to her.",
      "To the ease of it.",
      "To the quiet pull he could not explain.",
      "So he made a choice.",
      "He went back.",
      "“Before you go… would you mind if we stayed in touch? Maybe we could talk again sometime.”",
      "A simple question.",
      "But it carried everything.",
      "Her answer changed the course of this story.",
    ],
    [
      "And so, what began as a moment did not end there.",
      "It continued.",
      "Quietly at first.",
      "Words turned into conversations.",
      "Conversations stretched longer than either of them planned.",
      "Ordinary days began to carry something more.",
      "There was no rush to define it.",
      "No pressure to name it.",
      "Only a growing sense that something real was unfolding.",
      "They found themselves returning to each other.",
      "Again and again.",
      "Not out of habit, but out of desire.",
      "Time together felt different. Easier. Lighter.",
      "As though the world, with all its noise and demands, softened in their presence.",
      "There was laughter that needed no effort.",
      "Silences that did not feel empty.",
      "Moments that lingered long after they had passed.",
      "Slowly, gently, they began to open up.",
      "Not just the polished parts, but the real ones.",
      "The stories that shaped them.",
      "The experiences that marked them.",
      "The dreams they carried quietly within.",
      "And in all of it, they saw each other.",
      "Not just as they appeared, but as they truly were.",
      "There is a kind of connection that does not announce itself.",
      "It does not arrive loudly or ask for attention.",
      "It grows.",
      "Steady. Certain. Unshaken.",
    ],
    [
      "And somewhere along the way, without either of them noticing the exact moment it happened, they found it.",
      "A place of comfort.",
      "A place of belonging.",
      "A place that felt like home.",
      "But some stories are not meant to simply be found.",
      "They are meant to be chosen.",
      "And when the time came, when everything felt certain, when the quiet knowing could no longer be left unspoken…",
      "he asked.",
      "Not with grand noise or spectacle,",
      "but with meaning.",
      "With intention.",
      "With a touch of home.",
      "A ring, carrying warmth from where it all began.",
      "A small piece of Ghana, held gently in his hands.",
      "“May I be your husband?”",
      "And she said yes.",
      "Not just to the question,",
      "but to the journey.",
      "To the laughter.",
      "To the growth.",
      "To everything that had brought them here,",
      "and everything still waiting ahead.",
      "From that moment on, it was no longer just a story unfolding.",
      "It was a promise. A beginning of something much beautiful and exciting…",
      "And this beginning…",
      "is what they invite you to come celebrate with them",
      "on June 6, 2026 💖",
    ],
  ],
};

export const schedule = {
  ceremony: "11:45 AM - 1:15 PM",
  reception: "3:00 PM - 9:00 PM",
};

// ---------------------------------------------------------------------------
// RSVP
// ---------------------------------------------------------------------------
export const rsvp = {
  notice:
    "Our wedding is an adults-only celebration due to limited space.",
  noticeSubtext:
    "Please note that we are only able to accommodate adult guests. Thank you for understanding.",
  deadline: "06.05.2026",
  // Tally embed URL — update the form ID (e.g. "81dJ0A") when the form changes
  tallyFormUrl:
    "https://tally.so/embed/81dJ0A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
};

// ---------------------------------------------------------------------------
// Ceremony venue
// ---------------------------------------------------------------------------
export const ceremony = {
  venueName: "The German Evangelical Lutheran Church",
  address: "Address: Bernhardinkatu 4, 00130 Helsinki, Finland",
  mapUrl:
    "https://maps.google.com/maps?q=Bernhardinkatu+4,+00130+Helsinki,+Finland&output=embed",
  directions: {
    "Public transport":
      "We recommend arriving by Tram 2 or Tram 7.\nTram 2 - stop at Eteläranta (5mins walk).\nTram 7 - stop at Senaatintori (11 mins walk).",
    driving:
      " If you must drive to Bernhardinkatu 4, please note: \n\nthere is limited parking at the at the church and surrounding streets (Eteläranta and laivasillankatu).\n\nOther parking areas: Aimo Park Kasarmitori at Fabianinkatu 4 (5 mins walk) and Makasiiniranta P2 and P3 .",
  },
};

// ---------------------------------------------------------------------------
// Reception venue
// ---------------------------------------------------------------------------
export const reception = {
  venueName: "Keskikatu 5, 04200 Kerava",
  mapUrl:
    "https://maps.google.com/maps?q=Keskikatu+5,+04200+Kerava,+Finland&output=embed",
  directions: {
    "Public transportation":
      "You can get to the venue with Train R (towards Riihimäki), Train K (towards Kerava) or Train Z (towards Lahti) to Kerava station (7-minute walk to the venue).\n\nYou can also take Bus 738 to Keravan asema(5-minute walk to the venue).",
    "Driving & parking":
      "You can drive here, and there is onsite parking as well as street parking at Keskikatu."
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
    "No sign-in required, just select your files and share."],
};

// ---------------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------------
export const menu = {
  items: [
    {
      name: "Waakye - Exclusively Ghanaian",
      ingredients:
        "Rice and cowpeas cooked with sorghum leaves, served with/or stew, fried plantain, spaghetti, shito and fried fish",
      tags: ["Gluten-Free", "Dairy-Free", "Vegan (without fish)"],
    },
    {
      name: "Ghana Jollof",
      ingredients: "Rice slow-cooked in a rich tomato sauce - the Ghanaian way",
      tags: ["Gluten-Free", "Dairy-Free"],
    },
    {
      name: "Ghanaian Fried Rice",
      ingredients:
        "Stir-fried rice with mixed vegetables, eggs, and seasoned with soy sauce and aromatic spices",
      tags: ["Dairy-Free"],
    },
    {
      name: "Fried Plantain + Beans Stew - the Ghanaian way",
      ingredients:
        "Fried ripe plantains and cowpea stew cooked with palm oil, tomatoes, onions, and spices",
      tags: ["Gluten-Free", "Dairy-Free"],
    },
    {
      name: "Banku + Pepper + Fish - Exclusively Ghanaian",
      ingredients:
        "Fermented corn and cassava dough served with a  red grinded pepper and fish",
      tags: ["Gluten-Free", "Dairy-Free"],
    },
    {
      name: "Kosua ne Meko - Exclusively Ghanaian",
      ingredients:
        "Soft-boiled eggs with red pepper sauce, garnished with onion",
      tags: ["Gluten-Free", "Dairy-Free", "Vegetarian"],
    },
    {
      name: "Spring Rolls",
      ingredients:
        "Crispy golden rolls filled with seasoned vegetables",
      tags: ["Dairy-Free", "Vegetarian"],
    },
  ],
};

// ---------------------------------------------------------------------------
// Cash Gift (shown at top of Registry page)
// ---------------------------------------------------------------------------
export const cashGift = {
  message:
    "Having you with us is all we could ask for! If you'd like to celebrate with a monetary gift, we'd be truly grateful. You can send it via:",
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
      name: "Stanley The Café-To-Go Travel Mug, 0.47 L, Rose Quartz",
      price: "€40",
      url: "https://www.verkkokauppa.com/fi/product/1027289/Stanley-The-Cafe-To-Go-Travel-Mug-termosmuki-0-47-l-Rose-Qua",
      image:
        "https://cdn.verk.net/kuvastin/w:1632/h:1020/rt:fit/q:80/ex:1/sh:0.5/plain/images/8/2_1027289-496x1455.jpg",
    },
    {
      id: "item-9",
      name: "Sini Silityslauta Ballade 6400",
      price: "€33,39",
      url: "https://www.tokmanni.fi/silityslauta-ballade-6400-7315546400003",
      image:
        "https://res.cloudinary.com/tokmanni/image/upload/c_pad,b_white,f_auto,h_328,w_328/d_default.png/7315546400003.jpg",
    },
    {
      id: "item-10",
      name: "Maustepurkit joissa on kansi 12-pack",
      price: "€17.90",
      url: "https://www.24hshop.fi/koti-puutarha/keittiokoneet/keittiotuotteita/ovriga-kokstillbehor/maustepurkit-joissa-on-kansi-12-pack-12-pack",
      image:
        "https://www.24hshop.fi/pub_images/original/120159.jpg",
    },
    {
      id: "item-11",
      name: "House ruoansäilytysastia terästä 600 ml",
      price: "€6,95",
      url: "https://www.prisma.fi/tuotteet/110388577/house-ruoansailytysastia-terasta-600-ml-110388577",
      image:
        "https://cdn.s-cloud.fi/v1/w1200_q60/assets/dam-id/3nLlXDSZat98JdWWRNvZ0d.png",
    },
    {
      id: "item-12",
      name: "House ruoansäilytysastia terästä 2250 ml",
      price: "€10,95",
      url: "https://www.prisma.fi/tuotteet/110388578/house-ruoansailytysastia-terasta-2250-ml-110388578",
      image:
        "https://cdn.s-cloud.fi/v1/w1440_q60/assets/dam-id/DndDqMFma_RAP3W9yRWAV8.webp",
    },
    {
      id: "item-13",
      name: "220x210cmZACK pussilakanasetti parivuode orgaaninen",
      price: "€39,99",
      url: "https://www.jotex.fi/zack/zack-pussilakanasetti-parivuode-orgaaninen/1504301-48",
      image:
        "https://assets.ellosgroup.com/i/ellos/jot_1504301-48_Fm_M0085517",
    },
    {
      id: "item-14",
      name: "230x220cm Fresh Garden pussilakanasetti moniväri/vihreä",
      price: "€39,98",
      url: "https://www.hemtex.fi/makuuhuone/pussilakanasetit/pussilakanasetit-peruspuuvillasta/fresh-garden-pussilakanasetti-monivarivihrea",
      image:
        "https://www.hemtex.fi/globalassets/productimages/212832200324.jpg?ref=3FCE26BD04&w=590&bgcolor=F5F2EB&borderwidth=59&mode=pad&h=754",
    },
    {
      id: "item-15",
      name: "Bedspread Double Matilda päiväpeite",
      price: "€42,34",
      url: "https://www.jotex.fi/matilda/bedspread-double-matilda-paivapeite/1041161-03",
      image:
        "https://assets.ellosgroup.com/i/ellos/b?$jg$&$jm$&$jp$&$jd$&n=jot_1041161-03_De_01&mw=776&fmt=webp",
    },
    {
      id: "item-16",
      name: "ZACK muotoonommeltu lakana orgaaninen",
      price: "€25,99",
      url: "https://www.jotex.fi/zack/zack-muotoonommeltu-lakana-orgaaninen/1065265-32",
      image:
        "https://assets.ellosgroup.com/i/ellos/b?$jg$&$jm$&$jp$&$jd$&n=jot_1065265-32_Fs&mw=776&fmt=webp",
    },
  ],
};
