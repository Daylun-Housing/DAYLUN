import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative flex flex-col md:flex-row h-[75vh] w-full">
      {/* Left Panel */}
      <div className="bg-[#0474BC] items-center text-white flex flex-col justify-center px-10 md:px-20 md:w-full relative z-10">
        <div className="max-w-3xl mt-16 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            Our Story
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
          Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic 
          the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome
           K-pop excepteur classic esse Asia-Pacific laboris.
          </p>
        </div>
      </div>


    </section>
  );
}