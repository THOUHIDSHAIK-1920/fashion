const IMAGE_BASE = `${import.meta.env.BASE_URL}images/`;
// Site Content Database for "Slow Fashion on a Real Budget"

export const SITE_METADATA = {
  title: "THREAD & THRIFT",
  tagline: "Sustainable style that doesn't cost a fortune",
  tone: "Warm, practical, non-preachy peer-to-peer guide",
  differentiator: "Budget-anchored: real prices, real thrift finds, real cost-per-wear math",
  personas: [
    {
      id: "reforming-fast-fashion",
      title: "Reforming Fast-Fashion Shopper",
      description: "Shopping habits built around $15 tops & weekly drops, feels guilty, needs easy non-expensive alternatives.",
      badge: "Fast-Fashion Switcher"
    },
    {
      id: "broke-ethical-shopper",
      title: "Broke Ethical Shopper",
      description: "Already cares about sustainability, frustrated by $180 organic linen tees, wants realistic budget choices.",
      badge: "Budget Eco-Shopper"
    }
  ]
};

export const ARTICLES = [
  {
    id: "cornerstone-start-here",
    title: "Start Here: The Slow Fashion Budget Roadmap (How to Stop Overbuying)",
    subtitle: "A practical guide to ditching fast-fashion impulses without spending eco-luxury money.",
    pillar: "Start Here",
    persona: "reforming-fast-fashion",
    author: "Elena Rostova",
    date: "Sep 10, 2026",
    readTime: "8 min read",
    budgetRating: "$0 - $25 per item",
    image: IMAGE_BASE + "hero.png",
    featured: true,
    isCornerstone: true,
    summary: "Slow fashion isn't about buying a $200 linen jumpsuit from a boutique. It's about changing your relationship with clothing using what you already own, thrifting smart, and doing simple cost-per-wear math.",
    content: `
# The Slow Fashion Budget Roadmap

Welcome to Thread & Thrift. If you’ve ever felt alienated by sustainable fashion content showcasing $150 plain white t-shirts and $300 hand-dyed chore coats, you are in the right place.

The mainstream sustainability narrative often tells us: *'Buy ethical brands.'* But for anyone living on a real-world income, paying $90 for a basic tank top is not feasible. The good news? **Buying expensive 'sustainable' brands is actually at the bottom of the slow-fashion hierarchy.**

## The Real Slow-Fashion Hierarchy

1. **Use what you already have** ($0)
2. **Rewear, restyle, and mend** ($0 - $5)
3. **Swap with friends or community** ($0)
4. **Thrift offline & online** ($3 - $30)
5. **Buy budget-friendly ethical brands** ($25 - $60)
6. **Buy luxury eco-brands** (Optional / Luxury)

---

## Step 1: The 7-Day "Wear Your Closet" Audit
Before you buy anything new or thrifted, spend one week taking inventory of what you already own. Most people wear only 20% of their wardrobe 80% of the time.

> **Rule of Thumb:** If an item is sitting in your closet because it lacks a button or hangs weirdly, tag it for mending or tailoring before declaring you have 'nothing to wear.'

---

## Step 2: Calculate Cost-Per-Wear Before Hitting 'Checkout'
Fast fashion seems cheap ($15 for a dress), but if it falls apart after 3 washes, its Cost-Per-Wear is $5/wear. A sturdy $45 thrifted vintage coat worn 90 times has a Cost-Per-Wear of **$0.50/wear**.

Use our interactive **Cost-Per-Wear Calculator** below to check your next purchase before opening your wallet!
    `
  },
  {
    id: "thrift-beginners-guide",
    title: "The Beginner's Guide to Thrifting Without Wasting a Saturday",
    subtitle: "How to scan racks in 30 minutes, spot high-quality fabrics, and skip the junk.",
    pillar: "Thrift & Secondhand",
    persona: "reforming-fast-fashion",
    author: "Maya Lin",
    date: "Sep 08, 2026",
    readTime: "6 min read",
    budgetRating: "$5 - $20 per find",
    image: IMAGE_BASE + "thrifting.png",
    featured: true,
    summary: "Thrifting can be overwhelming when you're staring at rows of polyester. Learn the touch test, seam inspection, and sizing hacks to find hidden gems quickly.",
    content: `
# The Beginner's Guide to Thrifting Without Wasting a Saturday

Stepping into a crowded thrift store can feel like searching for a needle in a haystack. But with a system, you can breeze through racks in 20 minutes and leave with high-quality items for less than a fast-fashion lunch order.

## 1. The Fabric Touch Test (Skip 70% of Racks Instantly)
Instead of looking at every garment visually, slide your hand along the fabric tags and materials:
- **Feel for natural fibers:** Linen, 100% cotton, wool, silk, and heavy denim feel cool, weighty, and structured.
- **Avoid thin poly blends:** If it feels paper-thin, static-prone, or squeaky between your fingers, keep sliding past.

## 2. Check the Three High-Wear Spots
Before buying, inspect:
1. **Underarms:** Check for discoloration or thread friction wear.
2. **Inner thighs/crotch of pants:** Look for thinning or pilling.
3. **Collar & Cuffs:** Check for makeup stains or frayed edges.

## 3. Ignore Size Tags (Vintage Sizing Lies!)
A 1990s Size 12 is equivalent to a modern Size 6 or 8. Always carry a flexible measuring tape or try items on over light clothes.
    `
  },
  {
    id: "five-secondhand-apps-ranked",
    title: "5 Apps for Secondhand Shopping, Ranked by Ease of Use",
    subtitle: "From Poshmark to Depop & eBay: which platform wins for your budget and style?",
    pillar: "Thrift & Secondhand",
    persona: "broke-ethical-shopper",
    author: "Elena Rostova",
    date: "Sep 04, 2026",
    readTime: "7 min read",
    budgetRating: "Free Apps / $10 - $40 items",
    image: IMAGE_BASE + "thrifting.png",
    summary: "We tested Poshmark, Depop, ThredUp, Vinted, and eBay to see which offers the best filtering, lowest fees, and easiest returns for secondhand bargain hunters.",
    content: `
# 5 Apps for Secondhand Shopping, Ranked by Ease of Use

Online thrifting allows you to search for exact materials, brands, and measurements. Here is our honest ranking based on real user experience and budget friendliness.

| App Name | Best For | Ease Score | Bargain Potential | Pro Tip |
|---|---|---|---|---|
| **eBay** | Vintage denim & coats | 8.5 / 10 | ⭐⭐⭐⭐⭐ | Filter by 'Used' + Saved searches with notification alerts. |
| **Poshmark** | Mid-range brand basics | 9.0 / 10 | ⭐⭐⭐⭐ | Always use the 'Offer' button — sellers expect 15-20% off list price. |
| **Depop** | Y2K, trendy, streetwear | 7.5 / 10 | ⭐⭐⭐ | Great aesthetic search, but prices can be marked up by curators. |
| **ThredUp** | Passive browsing & bulk | 8.0 / 10 | ⭐⭐⭐⭐ | Use the material filters (100% Cotton, Silk) to filter out fast fashion. |
| **Vinted** | Zero buyer fees / Budget | 9.5 / 10 | ⭐⭐⭐⭐⭐ | Flat rate shipping & direct messaging make it ultra cheap. |
    `
  },
  {
    id: "hand-sewing-repairs-basics",
    title: "3 Hand-Sewing Repairs Anyone Can Learn in 20 Minutes",
    subtitle: "Save your favorite garments with simple buttons, pop-seam stitches, and hem fixes.",
    pillar: "Make It Last",
    persona: "reforming-fast-fashion",
    author: "Jordan Vance",
    date: "Aug 29, 2026",
    readTime: "5 min read",
    budgetRating: "$2 sewing kit",
    image: IMAGE_BASE + "mending.png",
    featured: true,
    summary: "You don't need a sewing machine to double the life of your clothes. Master the button lock, backstitch for open seams, and invisible blind hem stitch.",
    content: `
# 3 Hand-Sewing Repairs Anyone Can Learn in 20 Minutes

Throwing away a shirt because a button fell off or a seam popped is like buying a new car because the tire lost air. Here are three beginner repair techniques you can complete while watching your favorite show.

## 1. Re-attaching a Dropped Button
- **Need:** Thread, needle, toothpick.
- **The Trick:** Place a toothpick across the top of the button while sewing through the holes. Once stitched 5-6 times, remove the toothpick and wrap thread underneath the button to form a sturdy 'shank'.

## 2. The Pop-Seam Backstitch
When a side seam pulls open on a favorite dress or shirt, turn the item inside out and follow the original stitch line using a simple **Backstitch**. It's stronger than machine sewing!

## 3. Fixing a Dropped Pant Hem
Use a **Blind Catch Stitch** to re-secure falling trouser hems without thread showing on the outside.
    `
  },
  {
    id: "capsule-wardrobe-starter-kit",
    title: "The Capsule Wardrobe Starter Kit: 15 Pieces, 30+ Outfits",
    subtitle: "A realistic budget template to build a versatile daily wardrobe without overspending.",
    pillar: "Make It Last",
    persona: "broke-ethical-shopper",
    author: "Maya Lin",
    date: "Aug 22, 2026",
    readTime: "9 min read",
    budgetRating: "Mix of Thrift & Owned",
    image: IMAGE_BASE + "capsule.png",
    featured: true,
    summary: "Step-by-step breakdown of 15 foundation garments—5 tops, 4 bottoms, 3 outerwear pieces, and 3 shoes—that interlock into 30 unique outfits for work and weekend.",
    content: `
# The Capsule Wardrobe Starter Kit: 15 Pieces, 30+ Outfits

A capsule wardrobe isn't about wearing gray beige monochrome forever. It's about color coordination and silhouette balance so everything pairs effortlessly.

## The 15-Piece Matrix
- **Tops (5):** White linen shirt, black ribbed crewneck, olive knit sweater, neutral striped tee, graphic vintage tee.
- **Bottoms (4):** Straight-leg thrifted Levi's, tailored wide-leg trousers, pleated midi skirt, dark wash denim.
- **Outerwear (3):** Vintage trench coat, denim jacket, relaxed wool-blend blazer.
- **Footwear (3):** White leather sneakers, black ankle boots, classic loafers.

Try our **Interactive Capsule Builder** on the site to test outfits right now!
    `
  },
  {
    id: "sustainable-brands-under-50",
    title: "10 Sustainable Brands Under $50 a Piece (Real Budget Verified)",
    subtitle: "Ethical manufacturing, transparent supply chains, and prices that don't hurt.",
    pillar: "Buy Better",
    persona: "broke-ethical-shopper",
    author: "Elena Rostova",
    date: "Aug 18, 2026",
    readTime: "7 min read",
    budgetRating: "$18 - $48 average",
    image: IMAGE_BASE + "hero.png",
    summary: "Finding affordable ethical basics is hard. We vetted 10 brands for labor transparency, materials used, and price points under $50.",
    content: `
# 10 Sustainable Brands Under $50 a Piece

When you do need brand-new basics (like socks, underwear, or organic tees), here are budget-friendly brands with genuine certifications (GOTS Cotton, Fair Trade Certified):

1. **Quince:** Organic cotton tees ($15), washable silk ($45).
2. **Pact:** Fair Trade organic underwear & loungewear ($14 - $40).
3. **Organic Basics (Sales Section):** Recycled nylon & organic socks/bras ($18 - $45).
4. **Boody:** Bamboo viscose basics & activewear under $35.
5. **Honest Basics:** Minimalist GOTS cotton tees starting at $16.
    `
  },
  {
    id: "is-cotton-actually-sustainable",
    title: "Is Cotton Actually Sustainable? The Honest Fabric Breakdown",
    subtitle: "Organic vs. Conventional vs. Recycled Cotton: What labels don't tell you.",
    pillar: "Guides & Explainers",
    persona: "reforming-fast-fashion",
    author: "Jordan Vance",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    budgetRating: "Educational Guide",
    image: IMAGE_BASE + "thrifting.png",
    summary: "Cotton is natural, but conventional cotton uses massive amounts of water and pesticides. Here is how organic and thrifted cotton compare.",
    content: `
# Is Cotton Actually Sustainable? The Honest Fabric Breakdown

Cotton is often marketed as the ultimate eco-friendly choice because it is natural and biodegradable. But the full picture is more nuanced.

## Conventional Cotton vs. Organic Cotton
- **Conventional Cotton:** Takes 2,700 liters of water to produce one shirt and relies heavily on chemical pesticides.
- **Organic Cotton:** Uses 91% less water from rain-fed irrigation and zero synthetic pesticides, but yields can be lower.
- **Recycled Cotton:** The most sustainable option! Takes pre-consumer and post-consumer cotton scraps without raw agricultural impact.
    `
  },
  {
    id: "greenwashing-red-flags-glossary",
    title: "Greenwashing Red Flags: A Glossary for Budget Shoppers",
    subtitle: "Decode buzzwords like 'Conscious Collection', 'Eco-Friendly', and 'Carbon Neutral'.",
    pillar: "Guides & Explainers",
    persona: "reforming-fast-fashion",
    author: "Elena Rostova",
    date: "Aug 05, 2026",
    readTime: "5 min read",
    budgetRating: "Free Tool",
    image: IMAGE_BASE + "hero.png",
    summary: "Don't fall for marketing traps! Learn what third-party certifications (GOTS, OEKO-TEX, Fair Trade) actually guarantee.",
    content: `
# Greenwashing Red Flags: A Glossary for Budget Shoppers

Greenwashing is when brands spend more money marketing themselves as eco-friendly than actually reducing their environmental impact.

## Buzzword Decoder
- **"Conscious / Eco-Line":** Often means only 5-10% of a brand's total line uses recycled poly, while 90% remains fast fashion.
- **"100% Recyclable":** Means technically recyclable under rare industrial conditions, NOT that it was made sustainably.
- **"Natural Fibers":** Viscose and Rayon are derived from trees, but chemical processing can be heavily polluting unless closed-loop (Tencel/Modal).
    `
  }
];

export const BRAND_DATABASE = [
  {
    name: "Shein / Fast-Fashion Giants",
    type: "Ultra Fast Fashion",
    budgetRating: "$ (Ultra Low)",
    sustainabilityScore: 15,
    laborScore: 20,
    qualityScore: 25,
    verdict: "Avoid for new purchases. High polyester, single-wear durability, synthetic microplastics.",
    betterAlternative: "Thrift apps (Vinted/Depop) or local secondhand shops for trendy items at $5-$10."
  },
  {
    name: "H&M / Zara",
    type: "Traditional Fast Fashion",
    budgetRating: "$$ (Low)",
    sustainabilityScore: 40,
    laborScore: 45,
    qualityScore: 45,
    verdict: "Mixed. 'Conscious' lines are a small step, but high volume output remains unsustainable.",
    betterAlternative: "Quince or Pact for organic cotton basics under $25."
  },
  {
    name: "Quince",
    type: "Direct-to-Consumer Eco",
    budgetRating: "$$ (Accessible)",
    sustainabilityScore: 78,
    laborScore: 75,
    qualityScore: 82,
    verdict: "Great budget option for linen, washable silk, and cashmere with transparent pricing.",
    betterAlternative: "Thrift vintage silk/wool on Poshmark for even lower cost."
  },
  {
    name: "Pact",
    type: "Fair Trade Organic",
    budgetRating: "$$ (Accessible)",
    sustainabilityScore: 88,
    laborScore: 90,
    qualityScore: 85,
    verdict: "GOTS Certified Organic cotton basics, underwear, and tees at affordable prices.",
    betterAlternative: "Excellent primary choice for underwear & essential basics."
  },
  {
    name: "Patagonia (Worn Wear)",
    type: "Circular Outdoor & Casual",
    budgetRating: "$$$ (Mid-High New / $ Secondhand)",
    sustainabilityScore: 96,
    laborScore: 95,
    qualityScore: 98,
    verdict: "Gold standard for durability, repair guarantee, and circular trade-in program.",
    betterAlternative: "Buy Patagonia secondhand via 'Worn Wear' or eBay for 60% off."
  }
];

export const CAPSULE_ITEMS = [
  { id: 1, name: "White Linen Shirt", category: "Tops", avgThriftPrice: "$12", fastFashionPrice: "$28", tags: ["Versatile", "Work", "Weekend"] },
  { id: 2, name: "Black Ribbed Crewneck", category: "Tops", avgThriftPrice: "$8", fastFashionPrice: "$22", tags: ["Layering", "Basics"] },
  { id: 3, name: "Olive Knit Sweater", category: "Tops", avgThriftPrice: "$14", fastFashionPrice: "$45", tags: ["Warmth", "Cozy"] },
  { id: 4, name: "Neutral Striped Tee", category: "Tops", avgThriftPrice: "$6", fastFashionPrice: "$18", tags: ["Casual", "Parisian"] },
  { id: 5, name: "Vintage Graphic Tee", category: "Tops", avgThriftPrice: "$5", fastFashionPrice: "$25", tags: ["Streetwear", "Edgy"] },
  { id: 6, name: "Straight-Leg Vintage Jeans", category: "Bottoms", avgThriftPrice: "$16", fastFashionPrice: "$58", tags: ["Essential", "Denim"] },
  { id: 7, name: "Tailored Wide-Leg Trousers", category: "Bottoms", avgThriftPrice: "$15", fastFashionPrice: "$50", tags: ["Workwear", "Chic"] },
  { id: 8, name: "Black Pleated Midi Skirt", category: "Bottoms", avgThriftPrice: "$10", fastFashionPrice: "$35", tags: ["Dressy", "Transitional"] },
  { id: 9, name: "Vintage Trench Coat", category: "Outerwear", avgThriftPrice: "$25", fastFashionPrice: "$90", tags: ["Rain", "Classic"] },
  { id: 10, name: "Oversized Denim Jacket", category: "Outerwear", avgThriftPrice: "$18", fastFashionPrice: "$65", tags: ["Layering", "Casual"] },
  { id: 11, name: "Relaxed Wool-Blend Blazer", category: "Outerwear", avgThriftPrice: "$22", fastFashionPrice: "$110", tags: ["Smart Casual"] },
  { id: 12, name: "White Leather Sneakers", category: "Shoes", avgThriftPrice: "$25", fastFashionPrice: "$75", tags: ["Everyday", "Comfy"] },
  { id: 13, name: "Black Leather Ankle Boots", category: "Shoes", avgThriftPrice: "$28", fastFashionPrice: "$95", tags: ["Autumn", "Elevated"] }
];
