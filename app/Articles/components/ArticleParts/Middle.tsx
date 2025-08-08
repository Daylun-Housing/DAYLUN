import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Middle() {
  const router = useRouter();

  const gotoarticle = (section: string) => {
    router.push(`/ArticlePages?section=${section}`);
  };

  return (
    <div className="md:w-1/3 justify-center py-1 items-center flex">
      <button
        onClick={() => gotoarticle('Waterloo_241')}
        className="bg-[#04012A] w-2/3 text-center"
      >
        <div className="w-full h-full overflow-hidden scale-[80%] hover:scale-[90%] duration-100">
          <div className="transition-all font-bold text-white text-2xl absolute h-full w-full bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 z-20">
            View Article
          </div>
          <p className="font-bold text-[white] text-[clamp(1.5rem,4vw,2rem)]">
            241 WATERLOO
          </p>
          <div className="relative w-4/5 h-[200px] ">
            <Image
              src="/flagship-house.jpg"
              alt="how we do it"
              fill
              className="object-cover translate-x-[12%]"
            />
          </div>
          <div className="m-2 text-left text-white  text-[clamp(1px,4vw,1rem)] justify-center flex flex-col">
            <p>
              241 Waterloo is a net-zero and modular home build incorporating 
              revolutionary materials and technologies.
            </p>
            <br />
            <p className="bg-[#0474BC] text-white text-center font-bold px-4 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 hover:text-[#d4d5d6] hover:bg-[#015185] transition">
              Read More
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
