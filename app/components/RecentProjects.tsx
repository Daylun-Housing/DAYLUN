import Image from "next/image";

export default function RecentProjects() {
  return (
    <section className="bg-[#0d1030] text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
          <span className="text-white">Our </span>
          <span className="text-white">Recent </span>
          <span className="text-[#0078C7]">Projects</span>
        </h2>

        {/* Subheadings */}
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-10 font-extrabold text-4xl md:text-5xl text-[#0078C7] uppercase">
          <div>
            <p>Toronto</p>
            <p>Townhome</p>
          </div>
          <div>
            <p>High</p>
            <p>Density</p>
            <p>Building</p>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-[500px] md:h-[600px] mb-10">
          <Image
            src="/241-waterloo-building-front-e1651995234280-1024x684.jpg"
            alt="241 Waterloo House"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h3 className="text-2xl font-semibold uppercase">Flagship House</h3>
          <div className="text-[#00bcd4] text-lg">
            <p>241 Waterloo Avenue</p>
            <p>Toronto, Ontario</p>
            <p>Canada</p>
          </div>
          <p>
            241 Waterloo is an innovative sustainable, net-zero, modular home build incorporating
            the most revolutionary green building materials and technologies.
          </p>
          <p>
            241 Waterloo is the <strong>pinnacle of residential design for homeowners</strong> that prioritize
            value, luxury, and minimal environmental impact.
          </p>
          <p>
            For <strong>builders and developers, Waterloo symbolizes the height of what’s possible</strong> through the
            pioneering advancements of Daylun and its product sponsors. The house will be platinum Leeds certified.
          </p>
          <p>
            <a href="https://241waterloo.com" className="text-[#00bcd4] underline">
              241waterloo.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
