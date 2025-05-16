import Image from "next/image";

export default function MainArticle() {
    return (
        <div className='bg-[url(/daylun_building_balconies.jpg)] px-[275px]'>
        <div className='bg-[#04012A] w-full'>
          <div className="text-xl text-white px-[25px] py-[100px] whitespace-pre-wrap">
            <p className="first-letter:text-5xl">
              DAYLUN is proud to announce its latest product - Daylun's Exterior OSB Sheathing. Made from sustainable materials, 
              this OSB is both insulated and waterproof. 
              
              <br />
              <br />
            </p>

            <div className="flex justify-center text-center py-[5px] w-full h-full object-cover">
              <Image src="/blue-bamboo-osb.webp" alt="bamboo OSB" width={500} height={75}/>

            </div>

              <br />
            <p>
              Key <span className="text-[#0474BC]">features</span> include:
            </p>

            

            <ul>
              <li> - Insulation</li>
              <li> - Improved Energy Performance</li>
              <li> - Quick Installation</li>
              <li> - Preventing Thermal Bridging</li>
            </ul>
            <p>

              <br />

              Additionally, the Bamboo OSB is exceptionally sustainable. It is:
            </p>
            <br />

            <ul>
              <li className="flex gap-x-4">
                <Image src="/Recyclable.webp" alt="Recyclable" width={50} height={50}/> 
                <b>Recyclable</b> - bamboo from old OSB can be reused in new OSB.
              </li>
              <br />
              <li className="flex gap-x-4">
                <Image src="/Upcyclable.webp" alt="Upcyclable" width={50} height={50} />
                <b>Upcyclable</b> - bamboo from old OSB can be reused in new products.
              </li>
              <br />
              <li className="flex gap-x-4">
                <Image src="/Biodegradable.webp" alt="Recyclable" width={50} height={50} />
                <b>Biodegrable</b> - bamboo will degrade, reducing waste.
              </li>

            </ul>

              <br />

              <p className="font-bold">Currently retailing for $95 per 4' x 8' sheet.</p>

              <br />
              
              <p>
                <span className="mt-[10px]">
                Learn more about it from our 
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7328084133274873857/">
                      <span className="ml-2 text-[#0474BC] hover:text-[#055d96]"> 
                        LinkedIN
                      </span>
                  </a>

                </span>

                <br />
                <br />

                <a href="https://daylun.myshopify.com/products/spec-sheet" className="hover:brightness-75">
                    Or purchase our 
                    <span className="mx-2 text-[#0474BC]"> 
                    product
                    </span>
                    today!
                </a>
              </p>
          </div>
         </div>
         </div>
    );
}