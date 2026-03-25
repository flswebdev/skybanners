import { Heart, Baby, Cake, Mail, Target, Trophy, PartyPopper, Share2, ArrowRight } from "lucide-react";
import { FlippingCard } from "@/components/ui/flipping-card";


function Card1Front() {
  return (
    <div className="flex flex-col justify-center h-full w-full p-8">
      <div className="inline-flex items-center self-start gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-5">
        Personal
      </div>
      <h2 className="text-2xl font-extrabold text-neutral-950 leading-tight mb-4">
        Make Your Special<br />
        Moment <span className="text-blue-600">Stand Out</span>
      </h2>
      <p className="text-sm text-neutral-500 leading-relaxed">
        We&apos;ve helped create incredible moments for proposals, weddings, gender
        reveals, and personal celebrations. Your message in the sky creates
        memories that last a lifetime.
      </p>
    </div>
  );
}

function Card1Back() {
  const items = [
    { icon: Heart, title: "Proposals & Weddings", description: "Pop the question or celebrate your big day with a message in the sky" },
    { icon: Baby, title: "Gender Reveals", description: 'Announce "It\'s a Boy!" or "It\'s a Girl!" in the most memorable way possible' },
    { icon: Cake, title: "Special Celebrations", description: "Birthdays, anniversaries, graduations - celebrate any milestone from the sky" },
    { icon: Mail, title: "Personalized Messages", description: 'Say "I Love You," "Happy Birthday," or any custom message to someone special' },
  ];

  return (
    <div className="flex flex-col h-full w-full p-6">
      <div className="flex-1 divide-y divide-neutral-100">
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3 py-2.5 first:pt-0">
            <Icon className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-[13px] font-semibold text-neutral-900">{title}</p>
              <p className="text-[12px] text-neutral-500 leading-snug mt-0.5">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="/personal"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Plan Your Moment <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Card2Front() {
  return (
    <div className="flex flex-col justify-center h-full w-full p-8">
      <div className="inline-flex items-center self-start gap-2 rounded-full border border-red-600/20 bg-red-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-600 mb-5">
        Business
      </div>
      <h2 className="text-2xl font-extrabold text-neutral-950 leading-tight mb-4">
        Amplify Your<br />
        <span className="text-red-600">Brand Message</span>
      </h2>
      <p className="text-sm text-neutral-500 leading-relaxed">
        Partner with us to create memorable marketing moments. Our aerial
        advertising services help agencies and brands stand out with campaigns
        that get people talking and deliver real results.
      </p>
    </div>
  );
}

function Card2Back() {
  const items = [
    { icon: Target, title: "Brand Awareness Campaigns", description: "Launch new products or services with massive sky-high visibility" },
    { icon: Trophy, title: "Event Marketing", description: "Own the skies at sporting events, concerts, and festivals with targeted aerial presence" },
    { icon: PartyPopper, title: "Grand Openings", description: "Turn heads at your store opening with aerial announcements everyone will see" },
    { icon: Share2, title: "Social Media Amplification", description: "Create shareable moments that boost your digital campaigns" },
  ];

  return (
    <div className="flex flex-col h-full w-full p-6">
      <div className="flex-1 divide-y divide-neutral-100">
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3 py-2.5 first:pt-0">
            <Icon className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-[13px] font-semibold text-neutral-900">{title}</p>
              <p className="text-[12px] text-neutral-500 leading-snug mt-0.5">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href="/business"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
      >
        Explore Business Solutions <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function FlippingCardDemo() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 flex-wrap justify-center">
        <FlippingCard
          width={360}
          height={400}
          frontContent={<Card1Front />}
          backContent={<Card1Back />}
        />
        <FlippingCard
          width={360}
          height={400}
          frontContent={<Card2Front />}
          backContent={<Card2Back />}
        />
        </div>
      </div>
    </section>
  );
}
