import { Target, Smartphone, TrendingUp, Eye, Share2, ArrowRight } from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const bentoItems: BentoItem[] = [
  {
    title: "88% Recall Rate",
    meta: "vs 14% digital display",
    description:
      "88% of people recall seeing an aerial advertisement — the highest recall rate of any advertising medium. No banner blindness. No scrolling past.",
    icon: <Eye className="w-5 h-5 text-red-400" />,
    status: "#1 Recall",
    tags: ["Awareness", "Retention"],
    cta: "See the data →",
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Under $6 CPM",
    meta: "Cost Per Thousand",
    description:
      "Reach thousands for less than the cost of TV ($28 CPM) or digital display ($11 CPM). Sky-high impact, ground-level price.",
    icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
    status: "Best Value",
    tags: ["ROI", "Efficiency"],
    cta: "Get a quote →",
  },
  {
    title: "Zero Ad Blockers",
    meta: "100% share of voice",
    description:
      "No algorithms. No competing ads beside yours. No way to skip or block it. For the duration of the flight, you own the sky.",
    icon: <Target className="w-5 h-5 text-red-400" />,
    status: "Guaranteed",
    tags: ["Exclusivity", "Attention"],
    cta: "Learn more →",
  },
  {
    title: "Social Media Multiplier",
    meta: "4 in 10 viewers photograph it",
    description:
      "People pull out their phones when a banner flies over. 3 in 10 share it online — generating 1,200+ impressions per post at zero extra cost.",
    icon: <Share2 className="w-5 h-5 text-blue-400" />,
    status: "Organic Reach",
    tags: ["Social", "Viral", "UGC"],
    cta: "See examples →",
    colSpan: 2,
  },
  {
    title: "Targeted to Your Crowd",
    meta: "Events, beaches, stadiums",
    description:
      "Fly over exactly where your audience already is — festivals, shorelines, sporting events, and urban flyovers reaching 30,000–100,000+ people.",
    icon: <Smartphone className="w-5 h-5 text-red-400" />,
    status: "Precise",
    tags: ["Geo-Targeting", "Events"],
    cta: "View coverage →",
  },
];

export function WhyAerial() {
  return (
    <section id="why-aerial" className="py-20 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-light mb-5">
            The Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Aerial Advertising Works
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Cut through the noise with sky-high visibility
          </p>
        </div>

        <BentoGrid items={bentoItems} />

        <div className="text-center mt-8">
          <a
            href="/why-aerial"
            className="inline-flex items-center gap-1 text-sm font-medium text-red hover:text-red/80 transition-colors"
          >
            See the Full Data <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
