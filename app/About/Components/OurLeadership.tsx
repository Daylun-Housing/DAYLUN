import Image from "next/image";

export default function OurLeadership() {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#04012A] text-white flex flex-col justify-center px-10 md:px-20 md:w-1/2 relative z-10">
        <div className="max-w-xl mt-16 text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            Our CEO
          </h2>
          <h3 className="text-xl leading-relaxed ">Arthur Zankowicz</h3>
          <br />
          <p className="text-lg md:text-xl leading-relaxed">
          Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might 
          look:
          <br />
          <br />

          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect 
          nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely 
          queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power 
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki 
          excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative md:w-1/2 h-96 md:h-auto items-center">
        <div>
            <Image
              src="/241-waterloo.jpg"
              alt="Modern house"
              fill
              className="object-cover"
            />
          </div>
      </div>
    </section>
  );
}