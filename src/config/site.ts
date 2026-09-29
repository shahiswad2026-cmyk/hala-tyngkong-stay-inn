/**
 * ============================================================
 *  HA LA TYNGKONG STAY INN — CENTRAL CONTENT CONFIG
 *  (single source of truth)
 * ============================================================
 *  Everything the owner may want to change lives here.
 *
 *  VERIFICATION NOTES (as of 29 September 2026 — research/hala-property.json):
 *   • Name, address, phone, 4.6★ (107 reviews), category "Inn":
 *       live Google Maps listing (ftid 0x37505d2c6d6083af:0x269df59c531943aa,
 *       cid 2782650196542702506). Phone corroborated on the stay's own
 *       Instagram bio and Facebook page.
 *   • Room types & prices (2× Double Bed Room ₹3,000 / 2× Four-Bedded Room
 *       ₹4,900, breakfast and all taxes included): OWNER-CONFIRMED.
 *       Counts are total inventory — NOT live availability.
 *   • Parking + terrace: the stay's own OTA listings (syndicated content).
 *
 *  MEDIA POLICY: all photographs in /images/stock/ are DEMO STOCK
 *  PLACEHOLDERS (user instruction, 29 Sep 2026). They are NOT photos of
 *  this property. Replace with the owner's own photos before go-live —
 *  see CREDITS.md. Do not describe them as the actual property.
 *
 *  CONTENT SAFETY: no unverified facilities, policies, distances or
 *  scarcity ("only X rooms left!") are published anywhere on the site.
 * ============================================================
 */

export const business = {
  name: "Ha La Tyngkong Stay Inn",
  /** Name shown on the Google Maps listing */
  alternateName: "Hala Tyngkong Stay Inn",
  location: "Mawlynnong, Meghalaya",
  address: "Surok Mawlynnong, Mawlynnong, Meghalaya 793110, India",
  /** Owner-confirmed number — verified on the Google listing, Instagram
   *  bio and Facebook page. The ONLY contact number on this site. */
  phoneDisplay: "+91 89745 35288",
  phoneHref: "tel:+918974535288",
  whatsappNumber: "918974535288",
  whatsappBase: "https://wa.me/918974535288",
  /** Verified Google Maps place listing (canonical cid URL) — opens the
   *  exact property on Google Maps. */
  directionsUrl: "https://maps.google.com/?cid=2782650196542702506",
  tagline:
    "A peaceful stay in Mawlynnong — comfortable rooms and a warm base for exploring the village.",
  // Verified Google Business Profile rating, shown separately from review text:
  googleRating: "4.6",
  googleRatingCount: "107 reviews",
  googleRatingLabel: "on Google",
} as const;

export const nav = {
  links: [
    { label: "Stay", href: "#stay" },
    { label: "Amenities", href: "#amenities" },
    { label: "Explore", href: "#explore" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
  ],
} as const;

/* ---------------------------------------------------------- */
/* HERO                                                        */
/* ---------------------------------------------------------- */
export type HeroSlide = {
  id: string;
  src: string;
  /** Optional video (mp4/webm) — unused until the owner provides one */
  video?: string;
  alt: string;
  /** Optional object-position override for this slide's crop */
  position?: string;
  /** Extra forest-green scrim layered over THIS slide only
   *  (rendered by hero.tsx before the global readability overlays) */
  scrim?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "bedroom-view",
    src: "/images/stock/hero-bedroom-view.jpg",
    alt: "Preview placeholder — bright homestay bedroom with wooden beds and windows onto green hills",
  },
  {
    id: "balcony-vista",
    src: "/images/stock/hero-balcony-vista.jpg",
    alt: "Preview placeholder — warm wooden room opening onto a misty mountain vista",
    position: "object-[62%_50%] sm:object-center",
  },
];

export const hero = {
  eyebrow: "Stay in Mawlynnong",
  heading: "A Peaceful Stay in Mawlynnong",
  text: "Comfortable rooms and a welcoming base for exploring the village.",
  primaryCta: "Check Availability",
  secondaryCta: "Explore Rooms",
  trustLine: [
    "Breakfast & all taxes included",
    "2 room types · 4 rooms in total",
    "Rated 4.6 on Google",
  ],
  /** Auto-advance interval in ms (kept slow & calm) */
  interval: 7000,
} as const;

/* ---------------------------------------------------------- */
/* TRUST STRIP                                                 */
/* ---------------------------------------------------------- */
export const trustStrip = [
  { id: "location", label: "In Mawlynnong Village" },
  { id: "rooms", label: "Comfortable Rooms" },
  { id: "hospitality", label: "Warm Hospitality" },
  { id: "explore", label: "Explore the Area" },
] as const;

/* ---------------------------------------------------------- */
/* ABOUT                                                       */
/* ---------------------------------------------------------- */
export const about = {
  eyebrow: "Welcome to Ha La Tyngkong",
  heading: "A Warm Village Stay in Asia's Cleanest Village",
  description:
    "Ha La Tyngkong Stay Inn is a small inn at Surok Mawlynnong, in the village often called Asia's cleanest. Guests enjoy neat, comfortable rooms and home-style breakfast, with the village's gardens, viewpoints and walks right on the doorstep — and helpful hosts who look after you personally.",
  mainImage: {
    src: "/images/stock/about-cabin-clouds.jpg",
    alt: "Preview placeholder — a cabin on a grassy hillside above a sea of clouds",
  },
  accentImage: {
    src: "/images/stock/about-room-detail.jpg",
    alt: "Preview placeholder — a neatly made double room with warm accents",
  },
  highlights: [
    {
      id: "comfort",
      title: "Comfortable Rooms",
      text: "Neat, comfortable rooms — guests on Google highlight how clean they are.",
    },
    {
      id: "breakfast",
      title: "Breakfast Included",
      text: "Home-style breakfast is included with every room, along with all taxes.",
    },
    {
      id: "hospitality",
      title: "Helpful Hosts",
      text: "Guests highlight the helpful service and warm village welcome.",
    },
  ],
} as const;

/* ---------------------------------------------------------- */
/* ROOMS / STAY                                                */
/* ---------------------------------------------------------- */
export type Room = {
  id: string;
  name: string;
  /** Short, verified description — no unverified claims */
  description: string;
  image: { src: string; alt: string };
  /** Only facilities the owner has confirmed for this room type */
  amenities: string[];
  /** Owner-confirmed rate, per room per night, breakfast + taxes included */
  rate: string;
  /** Total inventory of this room type (NOT live availability) */
  inventory: string;
};

export const rooms: Room[] = [
  {
    id: "double-bed-room",
    name: "Double Bed Room",
    description:
      "A comfortable room with a double bed — a restful base after a day of exploring the village.",
    image: {
      src: "/images/stock/room-double-bed.jpg",
      alt: "Preview placeholder — a simple, bright bedroom with a wooden double bed",
    },
    amenities: ["Breakfast included", "All taxes included"],
    rate: "₹3,000 / room / night",
    inventory: "2 rooms in total",
  },
  {
    id: "four-bedded-room",
    name: "Four-Bedded Room",
    description:
      "A practical room with four beds — ideal for a family or a small group travelling together.",
    image: {
      src: "/images/stock/room-four-bedded.jpg",
      alt: "Preview placeholder — a warm wooden room with bunk beds and green blankets",
    },
    amenities: ["Breakfast included", "All taxes included"],
    rate: "₹4,900 / room / night",
    inventory: "2 rooms in total",
  },
];

export const stay = {
  eyebrow: "Stay With Us",
  heading: "Simple Comfort, Village Calm",
  subtitle:
    "Two room types at our inn in Mawlynnong — comfortable, clean and looked after with care.",
  /** Honest pricing legend shown under the room cards */
  rateLegend:
    "Rates are per room per night with breakfast and all taxes included. Room counts show the inn's total inventory — not live availability. Please confirm availability and the current total price with us before booking.",
} as const;

/* ---------------------------------------------------------- */
/* AMENITIES                                                   */
/* ---------------------------------------------------------- */
export const amenities = {
  eyebrow: "Amenities",
  heading: "What's Included",
  /** Transparency note — sources for every published amenity */
  note:
    "Only what we can stand behind: breakfast and taxes are included in every rate; parking and a terrace are listed on the inn's own travel listings.",
  items: [
    {
      id: "breakfast",
      title: "Breakfast Included",
      text: "Home-style breakfast served with your stay — included in every rate.",
    },
    {
      id: "parking",
      title: "Free Private Parking",
      text: "Park on site at the inn — listed on the stay's own travel listings.",
    },
    {
      id: "terrace",
      title: "Terrace",
      text: "A terrace space to sit out and enjoy the village air.",
    },
  ],
} as const;

/* ---------------------------------------------------------- */
/* EXPLORE NEARBY                                              */
/* ---------------------------------------------------------- */
export const experience = {
  eyebrow: "Explore Nearby",
  heading: "Mawlynnong & Around",
  cta: "Plan Your Stay",
  cards: [
    {
      id: "mawlynnong-village",
      motif: "home" as const,
      title: "Mawlynnong Village",
      text: "The village the inn calls home — known across Asia for its community-led cleanliness, gardens and quiet lanes.",
    },
    {
      id: "riwai-living-root-bridge",
      motif: "waves" as const,
      title: "Riwai Living Root Bridge",
      text: "The single-decker living root bridge at nearby Riwai — one of Meghalaya's most loved sights, grown from living roots.",
    },
    {
      id: "balancing-rock",
      motif: "mountain" as const,
      title: "Balancing Rock",
      text: "A curiosity of nature around Mawlynnong, where one boulder rests improbably upon another.",
    },
    {
      id: "sky-view-point",
      motif: "binoculars" as const,
      title: "Sky View & Bamboo Viewpoint",
      text: "A bamboo skywalk that lifts you above the village rooftops for a wide view over the greenery.",
    },
    {
      id: "church-of-epiphany",
      motif: "church" as const,
      title: "Church of the Epiphany",
      text: "The village's stone church, set among greenery — one of Mawlynnong's familiar landmarks.",
    },
  ],
  // Nearby places are listed as destinations only — no distances, timings
  // or tours are claimed until the owner confirms them.
} as const;

/* ---------------------------------------------------------- */
/* GALLERY                                                     */
/* ---------------------------------------------------------- */
export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  /** aspect class for the masonry layout */
  size: "large" | "medium" | "small";
  /** optional: makes a small tile span 2 columns to balance the masonry */
  wide?: boolean;
  /** optional video entry, e.g. "/videos/view.mp4" */
  video?: string;
};

export const gallery = {
  eyebrow: "Gallery",
  heading: "A Preview of the Stay",
  /** Honest demo note — stock placeholders, owner photos to follow */
  demoNote:
    "Preview imagery: these stock photos show the style of the stay as place­holders. The inn's own photos will replace them before go-live.",
  viewAllLabel: "View All Photos",
  images: [
    {
      id: "g1",
      src: "/images/stock/gallery-cabin-walkway.jpg",
      alt: "Preview placeholder — a warm-lit cottage with a wooden walkway in green forest",
      size: "large",
    },
    {
      id: "g2",
      src: "/images/stock/gallery-room-olive.jpg",
      alt: "Preview placeholder — a bright bedroom with a wooden headboard and olive accents",
      size: "medium",
    },
    {
      id: "g3",
      src: "/images/stock/gallery-garden-path.jpg",
      alt: "Preview placeholder — a sunlit garden path between tropical greenery",
      size: "medium",
    },
    {
      id: "g4",
      src: "/images/stock/gallery-balcony-mist.jpg",
      alt: "Preview placeholder — a misty balcony overlooking green plantations",
      size: "small",
    },
    {
      id: "g5",
      src: "/images/stock/gallery-room-doors.jpg",
      alt: "Preview placeholder — a bedroom with doors opening to green hills",
      size: "small",
    },
    {
      id: "g6",
      src: "/images/stock/gallery-brick-room.jpg",
      alt: "Preview placeholder — a cozy room with a white wooden bed and brick wall",
      size: "small",
      wide: true,
    },
  ] as GalleryImage[],
} as const;

/* ---------------------------------------------------------- */
/* REVIEWS — real Google review excerpts (verbatim)            */
/* ---------------------------------------------------------- */
export type Review = {
  id: string;
  name: string;
  source: "Google Review";
  /** Verified star rating for this individual review */
  rating: number;
  /** Review age as shown on the Google Business Profile */
  meta?: string;
  text: string;
};

/**
 * VERIFIED Google review (name, rating, text) from the property's
 * Google Business Profile (verified live, 29 September 2026).
 * Google's limited web view exposes only this one fully verbatim
 * review — nothing is invented. Reviewer badge: Local Guide · 33 reviews.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    name: "Mayukh Sarkar",
    source: "Google Review",
    rating: 5,
    meta: "3 months ago",
    text: "This homestay offers excellent value for money. The rooms are neat and clean, reflecting the cleanliness of Asia's cleanest village.",
  },
];

export const reviewsSection = {
  eyebrow: "Guest Stories",
  heading: "Kind Words from Our Guests",
  support: "Real words from guests who stayed at Ha La Tyngkong Stay Inn.",
  /** Drawn from Google's own review summary for this profile */
  praiseLine:
    "Google's review summary highlights the excellent rooms, location, service and meals, with delicious home-cooked breakfast options.",
  /** Verified Google Maps place listing — opens the 4.6★ profile */
  reviewsUrl: "https://maps.google.com/?cid=2782650196542702506" as string | null,
  readMoreLabel: "Read Reviews on Google",
} as const;

/* ---------------------------------------------------------- */
/* LOCATION                                                    */
/* ---------------------------------------------------------- */
export const location = {
  eyebrow: "Location",
  heading: "Find Your Way to Mawlynnong",
  /** Google Maps embed pinned to the VERIFIED listing (cid) — not a
   *  previous client's map. Lazy-loaded; falls back to the address card
   *  if removed. */
  mapEmbedUrl:
    "https://maps.google.com/maps?cid=2782650196542702506&output=embed&z=15" as string | null,
  mapTitle: "Google Maps — Ha La Tyngkong Stay Inn, Mawlynnong, Meghalaya",
  note: "The inn sits at Surok Mawlynnong in Mawlynnong village (plus code 6W38+25). Call or message us and we will guide you all the way to the door.",
} as const;

/* ---------------------------------------------------------- */
/* BOOKING / ENQUIRY                                           */
/* ---------------------------------------------------------- */
export const booking = {
  title: "Check Availability",
  subtitle:
    "Tell us your travel dates and we will reply on WhatsApp to confirm availability and the current total price.",
  fields: {
    checkIn: "Check-in date",
    checkOut: "Check-out date",
    guests: "Guests",
    room: "Room type",
    name: "Guest name",
    message: "Optional message",
  },
  guestOptions: ["1 guest", "2 guests", "3 guests", "4 guests", "5 guests", "6+ guests"],
  roomOptions: ["Any room type", ...rooms.map((r) => r.name)],
  submitLabel: "Send Enquiry on WhatsApp",
  callLabel: "Call Now",
  successTitle: "Enquiry ready!",
  successText:
    "WhatsApp is opening with your enquiry. We will get back to you soon.",
  errors: {
    checkInRequired: "Please select your check-in date.",
    checkOutRequired: "Please select your check-out date.",
    dateOrder: "Check-out must be after check-in.",
    guestsRequired: "Please select the number of guests.",
    nameRequired: "Please enter your full name.",
  },
} as const;

/* ---------------------------------------------------------- */
/* FOOTER                                                      */
/* ---------------------------------------------------------- */
export const footer = {
  // Add only real links, e.g. instagram: "https://instagram.com/..."
  social: [] as { id: string; label: string; href: string }[],
  copyright: `© ${new Date().getFullYear()} Ha La Tyngkong Stay Inn, Mawlynnong, Meghalaya. All rights reserved.`,
} as const;
