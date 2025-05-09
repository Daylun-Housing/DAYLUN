import Image from 'next/image';

export default function Right() {
    return (
        <section className="w-1/3 flex items-center justify-center">
            <div className = "bg-white w-2/3 h-2/3 text-center">
                <p className="font-bold text-[#04012A] mt-5 mb-5 text-3xl md:text-4xl">
                    YUKON FACTORY
                </p>
                <div className = "relative w-2/3 h-1/3 items-center flex justify-center">
                    <Image src="/how-we-do-it.jpg" alt="how we do it" fill className = "object-cover translate-x-1/4" />
                </div>
                <p className="m-5 text-left">
                    Our Yukon valley will be operation soon. This will be our first, automated factory that will produce 
                    our flagship products. 
                </p>
                
                <div className = "ml-5 mt-5 text-left" >
                    <a href="../ArticleTemplate" className="hover:text-[#0474BC]">Read More</a>

                </div>
                
            </div>
        </ section>
    )
}