import Image from "next/image";

export default function EvaBoard() {
  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="bg-[#0474BC] flex flex-col justify-center px-10 md:px-20 w-1/2 relative z-10">
        <div className=" absolute w-[500px] h-[200px] object-fill">
              <div>
                  <Image
                    src="/DAYLUN_LOGO_blue-2b.svg"
                    alt="Modern house"
                    fill
                    className="object-cover"
                  />
                </div>
            </div>

        
      </div> 
      {/* Right Panel */}
      <div className="bg-[#0474BC] w-1/2 items-center flex justify-center">
        <div className="max-w-xl mt-16 text-left text-white ">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Eva Board
            </h2>
            <br />
            <p className="text-lg md:text-xl leading-relaxed">
            Plant-based glue that is as strong as epoxy. Used in our driveways and concrete.
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
    </section>
  );
}