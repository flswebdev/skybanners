import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const bentoItems: BentoItem[] = [
  {
    title: "88% Recall Rate",
    meta: "vs 14% digital display",
    description:
      "88% of people recall seeing an aerial advertisement — the highest recall rate of any advertising medium. No banner blindness. No scrolling past.",
    status: "#1 Recall",
    tags: ["Awareness", "Retention"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Under $6 CPM",
    meta: "Cost Per Thousand",
    description:
      "Reach thousands for less than the cost of TV ($28 CPM) or digital display ($11 CPM). Sky-high impact, ground-level price.",
    status: "Best Value",
    tags: ["ROI", "Efficiency"],
  },
  {
    title: "Zero Ad Blockers",
    meta: "100% share of voice",
    description:
      "No algorithms. No competing ads beside yours. No way to skip or block it. For the duration of the flight, you own the sky.",
    status: "Guaranteed",
    tags: ["Exclusivity", "Attention"],
  },
  {
    title: "Social Media Multiplier",
    meta: "4 in 10 viewers photograph it",
    description:
      "People pull out their phones when a banner flies over. 3 in 10 share it online — generating 1,200+ impressions per post at zero extra cost.",
    status: "Organic Reach",
    tags: ["Social", "Viral", "UGC"],
    colSpan: 2,
  },
  {
    title: "Targeted to Your Crowd",
    meta: "Events, beaches, stadiums",
    description:
      "Fly over exactly where your audience already is — festivals, shorelines, sporting events, and urban flyovers reaching 30,000–100,000+ people.",
    status: "Precise",
    tags: ["Geo-Targeting", "Events"],
    colSpan: 3,
  },
];

export function WhyAerial() {
  return (
    <section id="why-aerial" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Why Aerial Advertising Works
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Cut through the noise with sky-high visibility
          </p>
        </div>

        <BentoGrid items={bentoItems} />
      </div>
    </section>
  );
}
