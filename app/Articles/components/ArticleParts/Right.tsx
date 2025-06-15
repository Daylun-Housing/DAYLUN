import Image from 'next/image';

export default function Right() {
    return (
            
        <div className="md:w-1/3 py-2 justify-center items-center flex">
            <a href="../All_Articles/Product_Launch" className = "bg-[#04012A] w-2/3 h-2/3 text-center">
                
                <div className="w-full h-full overflow-hidden scale-[80%] hover:scale-100 duration-100">
                    <div className="transition-all font-bold text-white text-2xl absolute h-full w-full bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 z-20">
                        View Article
                    </div>
                    <p className="font-bold text-[white] mt-5 mb-5 text-[clamp(1.5rem,4vw,2rem)]">
                        PRODUCT LAUNCH
                    </p>
                    <div className = "relative w-4/5 h-[200px] ">
                        <Image src="/Bamboo.jpg" alt="Bamboo OSB" fill className = "object-cover translate-x-[12%]" />
                    </div>
                    <p className="m-5 text-left text-white text-[clamp(1px,4vw,1rem)]">
                        DAYLUN has launched its Bamboo OSB. A waterproof exterior protection layer made from easy-to-work-with materials.

                        <br />
                        <br />

                        Read More
                    </p>
                </div>
                
            </a>
        </ div>
    )
}