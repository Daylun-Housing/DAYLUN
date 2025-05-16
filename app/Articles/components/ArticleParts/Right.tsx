import Image from 'next/image';

export default function Right() {
    return (
            
        <a href="../All_Articles/Product_Launch" className="w-1/3 h-full flex items-center justify-center">
            <div className = "bg-[#04012A] w-2/3 h-2/3 text-center">
                
                <div className="w-full h-full scale-[80%] hover:scale-100 duration-100">
                    <p className="font-bold text-[white] mt-5 mb-5 text-3xl md:text-4xl">
                        PRODUCT LAUNCH
                    </p>
                    <div className = "relative w-2/3 h-1/3 items-center flex justify-center">
                        <Image src="/Bamboo.jpg" alt="Bamboo OSB" fill className = "object-cover translate-x-1/4" />
                    </div>
                    <p className="m-5 text-left text-white">
                        DAYLUN has just launched its Exterior OSB Sheathing - a exterior protection layer made from sustainable materials that
                        is easy to work with and has waterproofing. 
                    </p>
                    
                    <div className = "ml-5 mt-5 text-left" >
                        <p className="text-white hover:text-[#0474BC]">Read More</p>
                    </div>
                </div>
                
            </div>
        </ a>
    )
}