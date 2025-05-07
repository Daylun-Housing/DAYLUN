import { FaVectorSquare, FaHardHat, FaBookOpen, FaHome, FaTruck } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="bg-[#0078C7] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Grid with heading + steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading Block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              HOW IT<br />
              <span className="text-[#e6f1ff]">WORKS</span>
              <span className="block text-4xl md:text-5xl text-[#0d1030] mt-4">
                FOR YOU
              </span>
            </h2>
            <p className="mt-4 text-lg">
              <span className="font-semibold">5 simple steps</span> to produce the house of your dreams
            </p>
          </div>

          {/* Step Cards */}
          <div className="bg-[#0d1030] p-8 rounded-2xl flex flex-col items-center text-center">
            <FaVectorSquare className="text-cyan-400 text-4xl mb-4" />
            <p>Send us your concept or architectural drawings</p>
          </div>
          <div className="bg-[#0d1030] p-8 rounded-2xl flex flex-col items-center text-center">
            <FaHardHat className="text-cyan-400 text-4xl mb-4" />
            <p>We will engineer according to our Patent Daylun process</p>
          </div>
          <div className="bg-[#0d1030] p-8 rounded-2xl flex flex-col items-center text-center">
            <FaBookOpen className="text-cyan-400 text-4xl mb-4" />
            <p>Daylun will provide a step by step play-book on how to</p>
          </div>
          <div className="bg-[#0d1030] p-8 rounded-2xl flex flex-col items-center text-center">
            <FaHome className="text-cyan-400 text-4xl mb-4" />
            <p>We produce and ship your house in 3 months</p>
          </div>
          <div className="bg-[#0d1030] p-8 rounded-2xl flex flex-col items-center text-center">
            <FaTruck className="text-cyan-400 text-4xl mb-4" />
            <p>Delivered by truck and put together in 8 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
