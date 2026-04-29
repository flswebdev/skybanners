import Image from "next/image";

const CLIENTS = [
  { name: "Wealthsimple", src: "/logos/clients/wealthsimple.svg", width: 168, height: 24 },
  { name: "Sony",         src: "/logos/clients/sony.svg",         width: 137, height: 24 },
  { name: "Subway",       src: "/logos/clients/subway.svg",       width: 150, height: 30 },
  { name: "Shell",        src: "/logos/clients/shell.svg",        width: 75,  height: 30, displayHeight: 60 },
  { name: "McDonald's",   src: "/logos/clients/mcdonalds.svg",    width: 46,  height: 40 },
  { name: "MGM",          src: "/logos/clients/mgm.png",          width: 70,  height: 40 },
  { name: "Halifax Mooseheads", src: "/logos/clients/mooseheads.png", width: 48, height: 48 },
  { name: "Jet Auto Wash",src: "/logos/clients/jetautowash.png",  width: 90,  height: 40 },
  { name: "East Park",    src: "/logos/clients/eastpark.svg",     width: 53,  height: 30 },
  { name: "McCain Foods", src: "/logos/clients/mccain.svg",       width: 60,  height: 30 },
] as const;

export function SocialProof() {
  return (
    <section className="pt-12 pb-12 bg-background border-b border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-8">
          Trusted by leading brands &amp; organizations
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 items-center justify-items-center lg:grid-cols-5 lg:gap-x-12 lg:gap-y-8">
          {CLIENTS.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="opacity-100"
                style={{ height: `${(client as any).displayHeight ?? 28}px`, width: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
