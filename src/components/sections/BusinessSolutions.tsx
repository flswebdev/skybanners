import { Target, Trophy, PartyPopper, Share2, ArrowRight } from "lucide-react";
import { Card, Button } from "@/components/ui";
import { BUSINESS_SOLUTIONS } from "@/lib/constants";

const iconMap = {
  Target,
  Trophy,
  PartyPopper,
  Share2,
} as const;

export function BusinessSolutions() {
  return (
    <section id="business" className="py-20 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Amplify Your Brand Message
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Partner with us to create memorable marketing moments. Our aerial
            advertising services help agencies and brands stand out with
            campaigns that get people talking and deliver real results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SOLUTIONS.map((solution) => {
            const Icon = iconMap[solution.icon];
            return (
              <Card key={solution.title} glow>
                <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {solution.description}
                </p>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button href="/business" variant="secondary" size="large">
            Explore Business Solutions <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
