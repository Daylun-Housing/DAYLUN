'use client';

import SnapLayout from "../SnapLayout";
import TemplateSection from "./templates";
import Image from 'next/image';
import StdLayout from "../Common/StdLayout";
import { contentData } from './content';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState} from 'react';
import Footer from "../Common/Footer";

/**
 * FALLBACK
 * @returns {JSX.Element}
 * 
 * Page for when there is an error. 
 */
function Fallback() {
  return (
      <StdLayout>
        <div className="p-6 bg-[var(--dark-blue)] h-screen">
            <h1 className="text-xl font-bold text-[var(--txt-bright)]">Section not found </h1>                  
        </div>
        <Footer />
      </StdLayout>
  )
}

/**
 * PAGE
 * @returns {JSX.Element}
 * 
 * User should only be routed to this page by routes that set Section to a valid article. (See Content.tsx)
 * Searches for the Article Configuration based on value of section passed. If no content is yielded, makes
 * a Fallback page, otherwise builds the webpage using the information passed. 
 */
export default function Page() {

    const searchParams = useSearchParams();
    const val = searchParams?.get('section') ?? '';
    const sectionFromParams = val;
    const content = contentData[sectionFromParams];

    const [data, setData] = useState<any>(null);

    if (!val || !content) {
        return (
          <>
            <Fallback />
          </>
        ) 
    }

    return (
        <StdLayout>
            {content.sections.map((sub, index) => (
              <TemplateSection key={sub.id} content={sub}/>
            ))}
            <Footer />
        </StdLayout>
    );
}