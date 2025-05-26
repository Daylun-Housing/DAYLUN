import Image from 'next/image';

export default function Left() {
    return (
        <div className="w-1/3 h-full flex items-center justify-center">
            <a href="../All_Articles/Yukon_Factory" className = "bg-[#04012A] w-2/3 h-2/3 text-center">
                
                
                <div className="w-full h-full overflow-hidden scale-[80%] hover:scale-100 duration-100">
                    <div className="transition-all font-bold text-white text-2xl absolute h-full w-full bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 z-20">
                        View Article
                    </div>
                    <p className="font-bold text-[white] mt-5 mb-5 text-lg sm:text-xl lg:text-3xl">
                        YUKON FACTORY
                    </p>
                    <div className = "relative w-2/3 h-1/3 items-center flex justify-center">
                        <Image src="/how-we-do-it.jpg" alt="how we do it" fill className = "object-cover translate-x-1/4" />
                    </div>
                    <p className="m-5 text-[9px] sm:text-xs lg:text-sm xl:text-lg text-left text-white">
                        Our Yukon valley will be operation soon. This will be our first, automated factory that will produce 
                        our flagship products. 

                        <br />
                        <br />

                        Read More
                    </p>
                </div>
                
            </a>
        </div>
    )
}