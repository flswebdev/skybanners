import { Heart, Baby, Cake, Mail, ArrowRight } from "lucide-react";
import { Card, Button } from "@/components/ui";
import { CELEBRATIONS } from "@/lib/constants";

const iconMap = {
  Heart,
  Baby,
  Cake,
  Mail,
} as const;

export function PersonalCelebrations() {
  return (
    <section id="personal" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Make Your Special Moment Stand Out
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We&apos;ve helped create incredible moments for proposals, weddings,
            gender reveals, and personal celebrations. Your message in the sky
            creates memories that last a lifetime.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CELEBRATIONS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card key={item.title} glow>
                <div className="h-12 w-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button href="/personal" variant="secondary" size="large">
            Explore Personal Banners <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
