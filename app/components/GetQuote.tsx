export default function GetQuote() {
    return (
      <section className="bg-[#0474BC] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            HAVE A <span className="text-[#04012A]">PROJECT</span> IN <br className="md:hidden" />
            MIND?
          </h2>
          <p className="text-lg mb-4">
            Daylun has made it quite simple to bring your project to life. Weather it be your dream home or sub division
            to build. Our process is very efficient. Our Daylun software allows us to calculate.
          </p>
          <p className="text-lg mb-8">
            All materials right down to how many screws to give you or your customer instant quotes.
          </p>
          <a href="mailto:info@daylun.ca">
            <button className="bg-[#04012A] text-white font-semibold px-8 py-3 rounded-md hover:opacity-90 transition">
              GET A QUOTE TODAY
            </button>

          </a>
        </div>
      </section>
    );
  }
  