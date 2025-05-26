
import Image from "next/image";

export default function Partnership() {

  return (
    <>
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center mt-6 mb-5 md:mb-20 font-bold">Looking for <span className="text-[#0474BC]">Partners</span></h1>

        <div className="flex-col">
          <div className="w-full mb-20">
              
              <p className="flex-col text-sm md:text-md lg:text-xl space-y-4 m-5 w-full">
                Daylun is currently interested in partnering with forward-thinking construction industry experts and financial 
                investors to work together in developing the Yukon Factory as well as in future projects. We are looking to 
                collaborate to revolutionize the construction industry by ensuring that projects are both sustainable and 
                affordable. 
              </p>
              <a href="mailto:info@daylun.ca">
                <h3 className="m-5 hover:brightness-[70%]">
                  <span className="text-[#0474BC] text-sm md:text-md lg:text-xl font-bold ">CONNECT</span> with us if you are interested!
                </h3>

              </a>
          </div>
        
        </div>
    </>
  )
}