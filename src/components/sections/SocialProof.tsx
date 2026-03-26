import Image from "next/image";

const CLIENTS = [
  { name: "McDonald's", src: "/logos/clients/mcdonalds.svg", width: 40, height: 40 },
  { name: "Sony", src: "/logos/clients/sony.svg", width: 80, height: 24 },
  { name: "Subway", src: "/logos/clients/subway.svg", width: 100, height: 30 },
  { name: "Shell", src: "/logos/clients/shell.svg", width: 48, height: 48 },
  { name: "Wealthsimple", src: "/logos/clients/wealthsimple.svg", width: 130, height: 24 },
  { name: "MGM", src: "/logos/clients/mgm.png", width: 70, height: 40 },
  { name: "Halifax Mooseheads", src: "/logos/clients/mooseheads.png", width: 48, height: 48 },
  { name: "Jet Auto Wash", src: "/logos/clients/jetautowash.png", width: 90, height: 40 },
  { name: "East Park", src: "/logos/clients/eastpark.svg", width: 110, height: 30 },
  { name: "McCain Foods", src: "/logos/clients/mccain.svg", width: 90, height: 30 },
] as const;

export function SocialProof() {
  return (
    <section className="py-12 bg-background border-y border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-8">
          Trusted by leading brands &amp; organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {CLIENTS.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ maxHeight: "40px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
