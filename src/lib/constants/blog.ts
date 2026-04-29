export type BlogSection =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; content: string }
  | { type: "stat"; value: string; label: string; note?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string; // ISO date, e.g. "2026-04-07"
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-plan-a-sky-banner-proposal-southern-ontario",
    title: "How to Plan a Sky Banner Proposal in Southern Ontario",
    excerpt:
      "A sky banner proposal is the most unforgettable way to pop the question — visible for miles, photographed by everyone nearby, and impossible to miss. Here's exactly how to pull one off.",
    category: "Personal",
    publishDate: "2026-04-07",
    readTime: "5 min read",
    metaTitle:
      "How to Plan a Sky Banner Proposal in Southern Ontario | Sky Banners",
    metaDescription:
      "Planning an aerial proposal in Toronto, Hamilton, or Southern Ontario? Learn how sky banner proposals work, how to pick the right location, and what to expect on the day.",
    sections: [
      {
        type: "p",
        content:
          "There are proposals, and then there are proposals that people talk about for years. A sky banner flies a personalized message over a beach, park, or crowded venue while the person you love watches from the ground — and so does everyone else within half a kilometre. It's the kind of moment that gets photographed by dozens of strangers and shared online before you've even gotten back to your car.",
      },
      {
        type: "p",
        content:
          "If you're planning a proposal in Southern Ontario this summer, here's everything you need to know about making it happen.",
      },
      {
        type: "h2",
        content: "Why aerial proposals work",
      },
      {
        type: "p",
        content:
          "The best proposals combine surprise, scale, and emotion. A sky banner delivers all three. Your partner sees the plane first, wonders what it's doing, reads the banner overhead — and then it hits them. The scale of the gesture (a plane, a banner, visible for miles) makes it feel cinematic in a way no restaurant or rooftop can match.",
      },
      {
        type: "p",
        content:
          "Practically speaking, sky banner proposals are also easier to orchestrate than most people expect. You don't need to co-ordinate a flash mob or get a restaurant involved. You pick a location, book a flight, and position your partner in the right spot at the right time. The plane does the rest.",
      },
      {
        type: "h2",
        content: "Choosing the right location",
      },
      {
        type: "p",
        content:
          "The best proposal locations are open spaces with a clear view of the sky and some foot traffic — not for the audience, but because bystanders reacting in real time makes the moment feel even more electric. Good options in Southern Ontario include:",
      },
      {
        type: "ul",
        items: [
          "Beaches — Wasaga, Sauble, Cherry Beach, Port Stanley. High attendance on summer weekends, open sky, perfect for a casual \"let's walk\" setup.",
          "Waterfront parks — Toronto Waterfront, Spencer Smith in Burlington, Confederation Park in Hamilton. Easy to position, beautiful backdrop.",
          "Conservation areas — Elora Gorge, Crawford Lake, Dundas Valley. More intimate, surrounded by nature.",
          "Venue patios — If you're combining the proposal with a dinner or event, a rooftop or open patio works well as long as there's sky visibility.",
          "Your own backyard — For a private moment with close family watching, a banner over your property is entirely possible.",
        ],
      },
      {
        type: "callout",
        title: "Tip: Think about where you'll be standing",
        content:
          "Our pilot will confirm the exact flight path and arrival time before the day. Position yourself somewhere with a clear, unobstructed view south toward Lake Ontario or the open sky. A photographer or trusted friend should be nearby to capture the reaction.",
      },
      {
        type: "h2",
        content: "The message: how much space do you have?",
      },
      {
        type: "p",
        content:
          "Sky Banners letter banners can display up to 35 characters per flight, in letters approximately 5 feet tall — readable from the ground from several hundred metres away. Most proposal messages use a name plus the question:",
      },
      {
        type: "ul",
        items: [
          "SARAH WILL YOU MARRY ME (22 characters — ideal)",
          "EMMA MARRY ME? I LOVE YOU (25 characters)",
          "JESSICA FOREVER? (17 characters — short and impactful)",
          "MIKE AND SARAH FOREVER (22 characters — works for anniversaries too)",
        ],
      },
      {
        type: "p",
        content:
          "There's no production cost for letter banners — the letters are pre-made and assembled before the flight. This also means the lead time is just 24–48 hours, so you don't need to book months in advance (though peak summer weekends fill up fast).",
      },
      {
        type: "h2",
        content: "How to set up the surprise",
      },
      {
        type: "p",
        content:
          "The most common setup: tell your partner you're taking them somewhere nice for the day, pick the location, and time the arrival to coincide with the flight window. You'll know the approximate arrival time in advance, so you can position yourselves 15–20 minutes early without it feeling forced.",
      },
      {
        type: "p",
        content:
          "A few things that make the moment even better:",
      },
      {
        type: "ul",
        items: [
          "Have a friend or photographer positioned nearby in advance — you want to capture the reaction, not just the aftermath.",
          "Don't announce what you're looking at. Wait until they spot the banner themselves.",
          "If you're at a busy location, people around you will react — lean into it. The shared joy of strangers is part of what makes it special.",
          "Plan what comes next. The ring, a reservation, family waiting nearby — the banner is the opening act.",
        ],
      },
      {
        type: "h2",
        content: "What's included in your flight",
      },
      {
        type: "p",
        content:
          "We handle the routing and timing logistics, so you just need to be in the right place at the right time. We'll confirm the details with you in the days leading up to the flight.",
      },
      {
        type: "h2",
        content: "Booking your flight",
      },
      {
        type: "p",
        content:
          "Letter banner proposals can be booked as close as 24–48 hours before the flight, which means even last-minute planners can make it happen. That said, peak summer weekends (Canada Day weekend, Civic Holiday weekend) book quickly — if you have a specific date in mind, earlier is better.",
      },
      {
        type: "p",
        content:
          "To get started, fill out the contact form with your name, location, message, and target date. We'll confirm availability and send you a custom quote within one business day.",
      },
      {
        type: "callout",
        title: "Weather policy",
        content:
          "Flights can't operate in low cloud, high winds, or precipitation. If weather forces a reschedule, we'll work with you to find the next available date at no extra charge.",
      },
    ],
  },
  {
    slug: "aerial-advertising-vs-digital-recall-data",
    title: "Aerial Advertising vs. Digital Ads: What the Recall Data Shows",
    excerpt:
      "Digital ads have the metrics. Aerial advertising has the memory. Here's what independent research says about recall rates — and why the comparison matters for Ontario brands.",
    category: "Business",
    publishDate: "2026-04-14",
    readTime: "6 min read",
    metaTitle:
      "Aerial Advertising vs. Digital Ads: Recall Rates Compared | Sky Banners",
    metaDescription:
      "Aerial advertising delivers 88% unaided recall — far above TV, radio, and digital. See how banner plane advertising compares against other channels for Ontario brands and event marketers.",
    sections: [
      {
        type: "p",
        content:
          "Ask a marketing manager how their last digital campaign performed and you'll hear about impressions, CTR, and ROAS. Ask them what their audience actually remembered a week later, and the conversation gets quieter.",
      },
      {
        type: "p",
        content:
          "The problem with measuring attention is that most digital metrics measure exposure, not impact. A banner impression counts whether someone glanced at it for 0.3 seconds before scrolling. A video view counts after two seconds on a 30-second ad. We've built an industry around optimizing for numbers that don't always correlate with the thing we actually want: people remembering the brand.",
      },
      {
        type: "p",
        content:
          "Aerial advertising is measured differently — and the numbers look very different.",
      },
      {
        type: "h2",
        content: "The recall benchmark: what the research shows",
      },
      {
        type: "stat",
        value: "88%",
        label: "Unaided recall rate for aerial advertising",
        note: "Measured in independent studies — respondents who recalled the brand without prompting",
      },
      {
        type: "p",
        content:
          "Independent research on aerial advertising consistently finds unaided recall rates around 88%. For context, unaided recall means respondents remembered the brand without being shown any prompt or reminder — they volunteered it. This is the hardest type of recall to achieve, and the most meaningful.",
      },
      {
        type: "p",
        content:
          "Compare this to other channels:",
      },
      {
        type: "ul",
        items: [
          "TV advertising: ~25–30% unaided recall for a single exposure",
          "Radio: ~15–20% recall for a single spot",
          "Digital display (banner ads): ~8–12% — and that's for ads people actually see, not served-but-ignored impressions",
          "Static outdoor billboard: ~30–35% in high-traffic areas",
          "Aerial banner: ~88% unaided recall",
        ],
      },
      {
        type: "p",
        content:
          "The gap is significant. And the reason for it isn't mysterious.",
      },
      {
        type: "h2",
        content: "Why aerial advertising is remembered",
      },
      {
        type: "p",
        content:
          "Memory research tells us that novelty and attention are the two primary drivers of recall. Aerial advertising scores on both.",
      },
      {
        type: "p",
        content:
          "When a banner plane appears over a beach or stadium, it breaks the ambient pattern of the environment. People stop what they're doing, look up, and read. The act of physically orienting toward an advertisement — turning your body, shielding your eyes, pointing it out to someone nearby — creates a level of engagement that passive media never achieves.",
      },
      {
        type: "p",
        content:
          "There's also the social dimension. People point banner planes out to each other. They photograph them. They share the image online. A beach crowd of 10,000 people doesn't just see the banner — a meaningful percentage of them interact with it actively, which compounds the memory effect.",
      },
      {
        type: "h2",
        content: "The CPM comparison",
      },
      {
        type: "stat",
        value: "<$6",
        label: "Cost per thousand impressions (CPM) for aerial advertising",
        note: "Based on audience reach at high-attendance venues and events",
      },
      {
        type: "p",
        content:
          "Aerial advertising is also more cost-efficient than most marketers expect. At high-attendance venues — beaches, stadiums, festivals — a single flight reaches tens of thousands of people. The CPM works out to under $6, which is competitive with mid-tier digital channels and well below premium digital placements.",
      },
      {
        type: "p",
        content:
          "The difference is that the $6 CPM in aerial advertising produces ~88% recall. The $5–8 CPM in digital display produces 8–12%. The numbers tell a clear story about where attention is actually going.",
      },
      {
        type: "h2",
        content: "The social amplification factor",
      },
      {
        type: "p",
        content:
          "One effect that doesn't show up in traditional CPM calculations: people photograph banner planes and post them. Research finds that roughly 4 in 10 people who see a banner plane photograph it, and of those, close to 3 in 10 share it on social media.",
      },
      {
        type: "p",
        content:
          "Each shared post reaches that person's social network at zero additional cost to the advertiser. A single flight over a major event with 40,000 attendees can generate hundreds of organic social posts — the equivalent of a significant earned media placement.",
      },
      {
        type: "callout",
        title: "What this looks like in practice",
        content:
          "A brand running a banner flight over a Canada Day celebration in Ontario reaches approximately 20,000–60,000 people at the event. At 4-in-10 photo rate, that's 8,000–24,000 people who actively engaged with the advertisement by photographing it. At 3-in-10 share rate, that's 2,400–7,200 organic social posts reaching their combined follower base.",
      },
      {
        type: "h2",
        content: "Where aerial advertising fits in the media mix",
      },
      {
        type: "p",
        content:
          "The strongest use cases for aerial advertising in Southern Ontario are:",
      },
      {
        type: "ul",
        items: [
          "Brand awareness campaigns at high-attendance summer events (festivals, beach days, CNE)",
          "Product launches where you want immediate mass reach in a specific geography",
          "Grand openings in areas near beaches, parks, or event venues",
          "Sports sponsorships — stadium flyovers during CFL, OHL, CPL games",
          "Seasonal campaigns that benefit from the outdoor, summertime context",
        ],
      },
      {
        type: "p",
        content:
          "It's not a replacement for digital — search and social still drive direct response better than any broadcast medium. But for the brand awareness and recall objectives that digital consistently underperforms on, aerial advertising produces results that are difficult to match at a comparable price point.",
      },
      {
        type: "h2",
        content: "Getting started",
      },
      {
        type: "p",
        content:
          "Sky Banners operates across Southern Ontario from May through October, covering Toronto, Hamilton, London, Kitchener-Waterloo, Barrie, and Niagara. Peak summer dates (Canada Day weekend, Civic Holiday, CNE) book several weeks in advance.",
      },
      {
        type: "p",
        content:
          "If you're planning a summer campaign and want to understand what aerial advertising can do for your specific objective, get in touch. We'll provide a custom quote and can help you identify the highest-reach events and locations for your target audience.",
      },
    ],
  },
  {
    slug: "top-ontario-events-aerial-advertising-2026",
    title: "Top Southern Ontario Events for Aerial Advertising in 2026",
    excerpt:
      "The best aerial advertising happens where the biggest crowds are. Here are the highest-reach events and venues across Southern Ontario this summer — and why peak dates book fast.",
    category: "Locations",
    publishDate: "2026-04-21",
    readTime: "5 min read",
    metaTitle:
      "Top Southern Ontario Events for Aerial Advertising in 2026 | Sky Banners",
    metaDescription:
      "Looking to reach large crowds in Ontario this summer? From Canada Day to the CNE, here are the top events and venues for aerial banner advertising across the GTA, Hamilton, London, and more.",
    sections: [
      {
        type: "p",
        content:
          "Aerial advertising works everywhere — but it works best where the most people are. A banner plane over a suburban neighbourhood reaches dozens. The same flight over a packed beach or festival reaches tens of thousands. If you're booking a campaign for summer 2026, the event and venue you choose matters as much as the message.",
      },
      {
        type: "p",
        content:
          "Here's a breakdown of the highest-reach opportunities across Southern Ontario this season, and what each is best suited for.",
      },
      {
        type: "h2",
        content: "Beaches: the highest-density summer audience",
      },
      {
        type: "p",
        content:
          "Southern Ontario's beaches are the most consistent source of large, captive audiences throughout the summer. On a hot weekend in July, Wasaga Beach draws 50,000+ visitors. Sauble Beach, Sandbanks Provincial Park, and Port Stanley are comparable.",
      },
      {
        type: "ul",
        items: [
          "Wasaga Beach — The longest freshwater beach in the world. Peak attendance July–August. Ideal for high-reach brand campaigns.",
          "Sauble Beach — Popular weekend destination, especially with families and young adults.",
          "Cherry Beach, Toronto — Within the city, high repeat traffic, excellent for campaigns targeting urban demographics.",
          "Port Stanley (Lake Erie) — Southwestern Ontario hub. Strong reach into London and St. Thomas markets.",
          "Sandbanks Provincial Park — Prince Edward County. High-income, 30+ demographic, strong wine and tourism adjacent.",
        ],
      },
      {
        type: "callout",
        title: "Best use for beach flights",
        content:
          "Consumer brands, food and beverage, lifestyle, membership clubs, and local events. The beach audience skews broad — excellent for awareness campaigns targeting 20–50 year olds across Southern Ontario.",
      },
      {
        type: "h2",
        content: "Canada Day and long weekends",
      },
      {
        type: "p",
        content:
          "Long weekends generate the highest single-day reach of the season. Canada Day (July 1), the Civic Holiday weekend (first weekend of August), and Labour Day all draw massive outdoor attendance across the province.",
      },
      {
        type: "ul",
        items: [
          "Canada Day (July 1) — Waterfront events in Toronto, Hamilton, and Burlington draw combined attendance in the hundreds of thousands. This is our most in-demand date of the season.",
          "Civic Holiday Weekend (Aug 1–3) — Peak beach attendance of the year across all Southern Ontario beaches.",
          "Victoria Day Weekend (May 17–18) — Season opener. Beaches and parks fill up early. Good for a season-launch campaign.",
          "Labour Day Weekend (Aug 30–Sep 1) — End-of-summer push. High attendance at beaches, parks, and outdoor events.",
        ],
      },
      {
        type: "p",
        content:
          "These dates book the earliest. If you're targeting any long weekend in 2026, booking 3–4 weeks in advance is recommended.",
      },
      {
        type: "h2",
        content: "Major festivals and events",
      },
      {
        type: "p",
        content:
          "Southern Ontario's summer festival calendar is one of the densest in Canada. A selection of high-attendance events:",
      },
      {
        type: "ul",
        items: [
          "Canadian National Exhibition (CNE), Toronto — Late August through Labour Day. 1.5–2 million total attendance over the run. Largest annual event in Ontario.",
          "Bingemans / summer festivals, Kitchener-Waterloo — Strong family and community attendance throughout summer.",
          "Ribfest events — Multiple cities (Burlington, Barrie, London) host large outdoor ribfests drawing 100,000+ over the weekend.",
          "Honda Indy Toronto — July, Exhibition Place. 100,000+ spectators over the race weekend.",
          "TD Toronto Jazz Festival — Late June, downtown Toronto. Outdoor stages, large urban crowds.",
          "Niagara Wine Festival, St. Catharines — September. Outdoor events drawing 100,000+ attendees.",
        ],
      },
      {
        type: "h2",
        content: "Sports venues and game days",
      },
      {
        type: "p",
        content:
          "Stadium and arena environments are ideal for B2B-facing brands: the audience is primarily 25–55, disposable income is higher than average, and the environment creates strong brand associations with entertainment and performance.",
      },
      {
        type: "ul",
        items: [
          "Tim Hortons Field, Hamilton (Hamilton Tiger-Cats, CFL) — CFL games draw 25,000+ per game throughout summer.",
          "Varsity Stadium / BMO Field, Toronto — CPL and USL soccer draw growing crowds, particularly younger demographics.",
          "OHL arenas (Barrie Colts, London Knights, etc.) — September/October, strong community reach in regional markets.",
          "Horse racing — Woodbine Entertainment draws thousands on race days, particularly for major stakes events.",
        ],
      },
      {
        type: "h2",
        content: "Urban and waterfront locations",
      },
      {
        type: "p",
        content:
          "Banner flights over urban waterfronts offer a unique combination: high foot traffic in a premium context, strong photography potential, and audiences that are already outdoors and looking up.",
      },
      {
        type: "ul",
        items: [
          "Toronto Waterfront — Harbourfront, Sugar Beach, Ontario Place. Year-round activity, peaks in summer. Highly photographable.",
          "Hamilton Waterfront / Pier 4 Park — Growing destination area, festivals throughout summer.",
          "Spencer Smith Park, Burlington — Popular events space, strong Burlington/Oakville demographic.",
          "Grand Bend, Lake Huron — Busy cottage-country beach with strong reach into London and Sarnia markets.",
        ],
      },
      {
        type: "h2",
        content: "When to book: what fills up first",
      },
      {
        type: "p",
        content:
          "Our season runs May through October, with peak demand from mid-June through August. Historically, the following dates book earliest:",
      },
      {
        type: "ol",
        items: [
          "Canada Day weekend (July 1) — typically booked 3–5 weeks in advance",
          "Civic Holiday weekend (August long weekend) — books 2–4 weeks out",
          "CNE period (late August–Labour Day) — books 3–6 weeks in advance",
          "Victoria Day weekend — books 1–3 weeks out",
          "Specific event days (Honda Indy, Ribfest, Wine Festival) — vary by event",
        ],
      },
      {
        type: "p",
        content:
          "Letter banner flights (proposals, personal messages) can often be arranged on 24–48 hours' notice outside of peak dates. Billboard and combo banner flights require 2–3 weeks for production. If you have a specific date or event in mind, getting in touch early ensures you get the flight window you want.",
      },
      {
        type: "callout",
        title: "Not sure which event fits your campaign?",
        content:
          "Tell us your target audience, your message, and your general timeline — we'll recommend the highest-reach dates and locations for your specific objective. Custom quotes are free and typically returned within one business day.",
      },
    ],
  },
];
