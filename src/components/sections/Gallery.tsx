export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-3">
          {/* Row 1: three equal */}
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="/images/gallery/gallery-1.jpg"
              alt="Pink smoke display aerial view"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="/images/gallery/gallery-2.jpg"
              alt="McDonald's Now Open banner in flight"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="/images/gallery/gallery-4.jpg"
              alt="Cessna with red smoke display"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2: full-width combo banner */}
          <div className="col-span-3 overflow-hidden aspect-[21/6]">
            <img
              src="/images/gallery/gallery-5.png"
              alt="Veritas Charities combo banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 3: full-width billboard banner */}
          <div className="col-span-3 overflow-hidden aspect-[21/9]">
            <img
              src="/images/gallery/gallery-3.jpg"
              alt="The Gaslight District billboard banner"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
