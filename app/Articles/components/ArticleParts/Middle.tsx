import Image from 'next/image';

export default function Middle() {
    return (
                
        <a href="./All_Articles/241_Waterloo" className="w-1/3 h-full flex items-center justify-center">
            <div className = "bg-[#04012A] w-2/3 h-2/3 text-center">
                
                <div className="w-full h-full scale-[80%] hover:scale-100 duration-100">
                    <p className="font-bold text-[white] mt-5 mb-5 text-3xl md:text-4xl">
                        241 WATERLOO
                    </p>
                    <div className = "relative w-2/3 h-1/3 items-center flex justify-center">
                        <Image src="/flagship-house.jpg" alt="how we do it" fill className = "object-cover translate-x-1/4" />
                    </div>
                    <p className="m-5 text-left text-white">
                        241 Waterloo is an innovative sustainable, net-zero, modular home build incorporating the most revolutionary green building
                        materials and technologies.
                    </p>
                    
                    <div className = "ml-5 mt-5 text-left" >
                        <p className="text-white hover:text-[#0474BC]">Read More</p>

                    </div>
                </div>
                
            </div>
        </ a>
    )
}