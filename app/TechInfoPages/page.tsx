'use client';

import SnapLayout from "../SnapLayout";
import TemplateSection from "./templates";
import Image from 'next/image';
import StdLayout from '../Common/StdLayout';
import { contentData } from './content';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState} from 'react';
import Footer from "../Common/Footer";

/**
 * FALLBACK
 * @returns {JSX.Element}
 * FALLBACK in case of error. (e.g. routed to non-existant page.)
 */
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

/**
 * PAGE
 * @returns {JSX.Element}
 * With the given section from route, the page will output the 
 * page based on the given configuration.  
 */
export default function Page() {

    const searchParams = useSearchParams();
    const val = searchParams?.get('section') ?? '';
    const sectionFromParams = val;
    const content = contentData[sectionFromParams];

    const [data, setData] = useState<any>(null);

    if (!val) {
        return (
          <>
            <Fallback />
          </>
        ) 
    }

    return (
        <SnapLayout>
            {content.sections.map((sub, index) => (
              <TemplateSection key={sub.id} section={sub}/>
            ))}
            {/*<section className="snap-start relative bg-[#04012A] overflow-hidden flex h-full w-full items-center justify-center">
              <p className="text-xl text-white ">{content.title}</p>
            </section>
            <section className="snap-start relative bg-[#0474BC] overflow-hidden flex h-full w-full">
            </section>
            <section className="snap-start relative bg-[#04012A] overflow-hidden flex h-full w-full">
            </section>
            <section className="snap-start relative bg-[#0474BC] overflow-hidden flex h-full w-full">
            </section>*/}
            <Footer />
        </SnapLayout>
    );
}