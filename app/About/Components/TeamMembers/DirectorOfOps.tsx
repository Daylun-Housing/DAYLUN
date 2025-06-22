import Image from "next/image";

import { FaLinkedinIn } from "react-icons/fa6";

export default function Ops() {
  return (
    <section className="absolute w-full h-full flex animate-fade-5">
      {/* Left Panel */}
      <div className={`relative w-1/3 h-full items-center`}>
        <div>
          <Image
            src="/about-the-designer-Arthur-Zankowicz.jpg"
            alt="CEO - Arthur Zankowicz"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className={`w-2/3`}>
        <div className="bg-[#0474BC] text-white flex flex-col justify-center px-10 md:px-20 relative z-10 h-full ">
          <div className="mt-8 text-left">
            <h2 className="text-[clamp(1rem,2vw,3rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold mb-4 leading-tight">
              Director of AI and Management, <br /> Director of Marketing
            </h2>
            <h3 className="text-[clamp(0.5rem,2vw,1.5rem)] md:text-[clamp(0.5rem,2vw,1.5rem)]] leading-relaxed ">
              Michelle Yao
            </h3>

            <a href="https://www.linkedin.com/in/michellejyao/">
              <FaLinkedinIn className="mt-2 text-sm sm:text-md xl:text-xl text-[#04012A] hover:text-[#0d0396]" />
            </a>

            <br />
            <p className="text-[clamp(0.5rem,2vw,1.5rem)] md:text-[clamp(0.5rem,2vw,1.5rem)]] leading-relaxed w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis dictum consequat. Integer dapibus eleifend mi,
              quis vehicula nisl condimentum quis. Aliquam mauris enim, iaculis
              non pellentesque fermentum, bibendum quis erat. Suspendisse id
              tincidunt nisl, nec condimentum magna. Nam orci massa, vehicula ut
              hendrerit fringilla, semper vitae nulla. Integer malesuada
              volutpat tellus id rutrum. Fusce quis consectetur ex. Integer
              imperdiet, enim et gravida viverra, elit tellus vestibulum libero,
              tempor volutpat ligula ex eget ipsum. Nulla varius quam orci, eget
              pharetra mauris sollicitudin ac. Mauris sodales molestie posuere.
              Vestibulum eu tristique tellus. Curabitur ultricies egestas mauris
              eget blandit. Nulla euismod id neque eget lobortis. Nulla vel
              felis quis diam semper ullamcorper.
              <br />
              <br />
              Donec vestibulum pharetra molestie. Suspendisse ornare felis sit
              amet justo tempor, non aliquet lectus dictum. Nam eget urna
              maximus, tempor erat at, lacinia quam. Morbi ornare erat a justo
              fermentum, finibus tempor mi semper. Maecenas et ligula eu lacus
              faucibus fringilla vitae nec lacus. Duis quam libero, auctor vitae
              elementum ac, malesuada faucibus ante. Mauris vestibulum ac dolor
              quis aliquam. Nullam sed posuere urna. Cras ut nulla non libero
              cursus volutpat sit amet eget turpis. Donec egestas nunc ut orci
              placerat ultrices. Mauris malesuada dui ac elementum sagittis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
    </section>
  );
}
