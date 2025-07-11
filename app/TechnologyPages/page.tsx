'use client';

import Image from 'next/image';
import StdLayout from '../components/StdLayout';
import { contentData } from './content';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

function Fallback() {
  return (
      <StdLayout>
        <div className="p-6 text-blue-600">
            <h1 className="text-xl font-bold">Section not found </h1>                  
        </div>
        <Footer />
      </StdLayout>
  )
}

export default function Page() {

    const searchParams = useSearchParams();
    const val = searchParams?.get('section') ?? '';
    const sectionFromParams = val;
    const content = contentData[sectionFromParams];

    const [data, setData] = useState<any>(null);
    const [impact, setImpact] = useState('');
    const [why, setWhy] = useState('');
    const [features, setFeatures] = useState('');

    useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/tech?section=${val}`);
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, [val]);

    const handleButtonPressImpact = () => {

      if(!impact) {
        setImpact(`${content.impact}`);
      } else {
        setImpact("");
      }
    }

    const handleButtonPressWhy = () => {
      if(!why) {
        setWhy(`${content.why}`);
      } else {
        setWhy("");
      }
    }

    const handleButtonPressFeatures = () => {

      if(!features) {
        setFeatures(`${content.features}`);
      } else {
        setFeatures("");
      }
    }

    if (!val) {
        return (
          <>
            <Fallback />
          </>
        ) 
    }

  return (
    <StdLayout>
        {/*Header*/}
          <div className="bg-[#04012A] text-white flex flex-col relative z-10 ">
            <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center">
              {/*Image*/}
              <div className="relative w-1/2 flex justify-center h-[600px]">
                {content.TechImage && (<Image src={content.TechImage} alt="" fill className="object-contain p-5"/>)}
              </div>
              {/*Text*/}
              <div className="relative w-full md:w-1/2 px-20">
                <h2 className="text-[clamp(2rem,4vw,6rem)] md:text-[clamp(1.5rem,4vw,3rem)] font-extrabold md:mb-8 leading-tight text-[#0474BC]">{content.title}</h2>
                <p className="text-[clamp(0.75rem,1.5vw,1.25rem)]"><span className="font-bold">Price:</span> ${content.price} CAD</p>
                <br />
                
                <a href={content.link}>
                  <button className="bg-[#0474BC] text-white font-bold px-8 py-3 hover:text-[#d4d5d6] hover:bg-[#015185] transition w-full md:w-[60%]">
                    PURCHASE NOW
                  </button>
                </a>

                <br />
                <br />
                <h2 className="font-bold text-[clamp(1rem,3vw,2rem)] text-[#0474BC]">Information</h2>
                <p>{content.description}</p>
                <br />
                <h2 className="font-bold text-[clamp(1rem,3vw,2rem)] text-[#0474BC]">Specifications</h2>
                <p className="whitespace-pre-line">{content.specifications}</p>
                <br />
              </div>
            </div>
            <div className="bg-[#0474BC] h-[10px]"></div>

            {/*Extra Information*/}
            <div className="relative flex flex-col items-center p-10 transition">
              <h2 className="font-bold text-[clamp(1.2rem,3vw,2.5rem)] text-[#0474BC] py-8">Why We Built This</h2>
              <button onClick={handleButtonPressImpact} className="text-[clamp(0.75rem,1.5vw,1.25rem)] bg-[#0474BC] text-white font-bold px-8 py-3 hover:text-[#d4d5d6] hover:bg-[#015185] transition w-[60%] hover:underline">Impact</button>
              {impact && <p className="bg-[#0474BC] text-white px-8 py-3 hover:text-[#d4d5d6] hover:bg-[#015185] transition w-[60%] whitespace-pre-line text-[clamp(0.75rem,1.2vw,2rem)]">{impact}</p>}

              <br />

              <button onClick={handleButtonPressWhy} className="text-[clamp(0.75rem,1.5vw,1.25rem)] bg-[#0474BC] text-white font-bold px-8 py-3 hover:text-[#d4d5d6] hover:bg-[#015185] transition w-[60%] hover:underline">Why</button>
              {why && <p className="bg-[#0474BC] text-white px-8 py-3 hover:text-[#d4d5d6] hover:bg-[#015185] transition w-[60%] text-[clamp(0.75rem,1.2vw,2rem)]">{why}</p>}

              <br />

              <button onClick={handleButtonPressFeatures} className="text-[clamp(0.75rem,1.5vw,1.25rem)] bg-[#0474BC] text-white font-bold px-8 py-3 hover:text-[#d4d5d6] hover:bg-[#015185] transition w-[60%] hover:underline">Features</button>
              {features && <p className="bg-[#0474BC] text-white px-8 py-3 hover:text-[#d4d5d6] hover:bg-[#015185] transition w-[60%] whitespace-pre-line text-[clamp(0.75rem,1.2vw,2rem)]">{features}</p>}
            </div>

            
            <div className="bg-[#0474BC] h-[10px]"></div>

            {/*Sustainability Information */}
            <div className="relative flex flex-col items-center p-10 transition">
              <h2 className="font-bold text-[clamp(1.2rem,3vw,2.5rem)] text-[#0474BC] py-8">Sustainability</h2>
              <div className="gap-y-[5%] md:gap-x-[2%] flex flex-col md:flex-row h-[100vh] md:h-[75vh] w-full justify-center">

                {content.recyclable && <div className="relative w-full md:w-1/3 bg-[#070245] h-full flex flex-col">
                  <div className="relative w-full h-full md:h-4/5 flex justify-center">
                    <Image src="/Recyclable.webp" alt="Recyclable" fill className="object-contain p-5"/>
                  </div>
                  
                  <h2 className="ml-4 mb-2 font-bold text-[clamp(1rem,2vw,1.5rem)]">Recyclable</h2>
                  <p className="ml-4">All materials can be recycled. </p>
                </div>}
                {content.upcyclable && <div className="relative w-full md:w-1/3 bg-[#070245] h-full flex flex-col">
                  <div className="relative w-full h-full md:h-4/5 flex justify-center">
                    <Image src="/Upcyclable.webp" alt="Upcyclable" fill className="object-contain p-5"/>
                  </div>
                  
                  <h2 className="ml-4 mb-2 font-bold text-[clamp(1rem,2vw,1.5rem)]">Upcyclable</h2>
                  <p className="ml-4">All materials can be reused in a new product.</p>
                  
                </div>}
                {content.biodegrable && <div className="relative w-full md:w-1/3 bg-[#070245] h-full flex flex-col">
                  <div className="relative w-full h-full md:h-4/5 flex justify-center">
                    <Image src="/Biodegradable.webp" alt="Biodegradable" fill className="object-contain p-5"/>
                  </div>
                  
                  <h2 className="ml-4 mb-2 font-bold text-[clamp(1rem,2vw,1.5rem)]">Biodegradable</h2>
                  <p className="ml-4">All materials are biodegradable</p>

                </div>}
              </div>
            </div>
          </div>
        <Footer />
      </StdLayout>
  );
}