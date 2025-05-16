import Image from 'next/image';

export default function Left() {
    return (
        <a href="../All_Articles/Yukon_Factory" className="w-1/3 h-full flex items-center justify-center">
                <div className = "bg-[#04012A] w-2/3 h-2/3 text-center">
                    
                    <div className="w-full h-full scale-[80%] hover:scale-100 duration-100">
                        <p className="font-bold text-[white] mt-5 mb-5 text-3xl md:text-4xl">
                            YUKON FACTORY
                        </p>
                        <div className = "relative w-2/3 h-1/3 items-center flex justify-center">
                            <Image src="/how-we-do-it.jpg" alt="how we do it" fill className = "object-cover translate-x-1/4" />
                        </div>
                        <p className="m-5 text-left text-white">
                            Our Yukon valley will be operation soon. This will be our first, automated factory that will produce 
                            our flagship products. 
                        </p>
                        
                        <div className = "ml-5 mt-5 text-left" >
                            <p className="text-white hover:text-[#0474BC]">Read More</p>

                        </div>
                    </div>
                    
                </div>
        </a>
    )
}