export default function HighlightsSection() {
    return (
      <section className="bg-[#07072b] text-blue-500 text-center py-24 px-6">
        <div className="text-5xl md:text-7xl font-light space-y-12">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <span>SPEED</span>
            <span>COST EFFICIENCY</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <span>SUSTAINABILITY</span>
            <span>PRECISION</span>
          </div>
        </div>
  
        <p className="mt-20 text-white text-sm tracking-widest font-light">
          <span className="font-bold">HOUSING</span> OF THE <span className="font-bold">FUTURE</span>
        </p>
      </section>
    );
  }
  