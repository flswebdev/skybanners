import Image from "next/image";

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-3">
          {/* Row 1: three equal */}
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image fill src="/images/gallery/gallery-1.jpg" alt="Pink smoke display aerial view" className="object-cover" sizes="(max-width: 768px) 33vw, 25vw" />
          </div>
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image fill src="/images/gallery/gallery-2.jpg" alt="McDonald's Now Open banner in flight" className="object-cover" sizes="(max-width: 768px) 33vw, 25vw" />
          </div>
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image fill src="/images/gallery/gallery-4.jpg" alt="Cessna with red smoke display" className="object-cover" sizes="(max-width: 768px) 33vw, 25vw" />
          </div>

          {/* Row 2: full-width combo banner */}
          <div className="col-span-3 relative overflow-hidden aspect-[21/6]">
            <Image fill src="/images/gallery/gallery-5.png" alt="Veritas Charities combo banner" className="object-cover" sizes="100vw" />
          </div>

          {/* Row 3: full-width billboard banner */}
          <div className="col-span-3 relative overflow-hidden aspect-[21/9]">
            <Image fill src="/images/gallery/gallery-3.jpg" alt="The Gaslight District billboard banner" className="object-cover object-center" sizes="100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
