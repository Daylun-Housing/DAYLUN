import Image from "next/image";

export default function FutureTech() {
    return (
        <div className="relative w-screen h-screen">
          <Image
                className="brightness-[0.70] object-cover"
                src="/Apartment.png"
                alt="Apartment"
                fill
                />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="px-4 py-6 bg-[#0474BC] text-white text-[50px] space-y-2">
                <p className="text-[80px] font-bold">Upcoming Technologies</p>
                <p className="text-[30px]">See our future projects</p>
              </div>
            </div>
        </div>
    )
}