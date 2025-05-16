import Image from "next/image";

export default function Video() {
    return (
        
        <section className="relative flex flex-col md:flex-row h-screen w-full">
            <div className="bg-[#04012A] text-white flex items-center justify-center px-10 md:px-20 w-full relative z-10">
                <div className="max-w-xl mt-16 text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        House Builder
                    </h2>
                    <br />
                    <p className="text-lg md:text-xl leading-relaxed">
                    Daylun's House Builder tool allows you to input your specifications and we will give you the full plan as well 
                    as cost of your proposed house. This plan will include the exact number of screws and materials required, and
                    you can also download the RIVET file as well.
                    </p>
                    </div>
                <div className="w-full h-full">
                    <div className="absolute w-[500px] translate-x-1/2 scale-75 h-full object-fill">
                        <Image
                        src="/House.gif"
                        alt="House Coming Together"
                        fill
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}