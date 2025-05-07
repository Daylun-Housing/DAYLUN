import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="relative w-screen h-[600px]">
          <Image
                className="brightness-[0.70] object-cover"
                src="/Apartment.png"
                alt="Apartment"
                fill
                />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="px-4 py-6 bg-[#0474BC] text-white text-[50px] space-y-2">
                <p className="text-[100px] font-bold">ARTICLE TITLE</p>
                <p className="text-[40px]">Blurb Blurb Blurb</p>
                <p className="text-[30px]">Daylun | Author | Date</p>
              </div>
            </div>
        </div>
    )
}