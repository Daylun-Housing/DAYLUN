import Image from "next/image";
import { contentData, store_button } from "./content";
import { useRouter } from 'next/navigation';

/**
 * BUTTON_TEMPLATE
 * @param art_button 
 * @returns {JSX.Element} 
 * 
 *    takes an art_button configuration and converts it into a button. 
 *    has a title, image, and quick blurb about the article. 
 */

export default function Button_Template ({store_button} : {store_button : store_button}) {
    const router = useRouter();

   /**
    * gotoarticle
    * @param section 
    * 
    * route to the ArticlePage with key = section
    */
    const gotoproduct = (section: string) => {
        router.push(`/TechnologyPages?section=${section}`);
    };

    return (
        <div className="justify-center py-1 items-center flex">
              {/* BUTTON with route */}
              <button
                onClick={() => gotoproduct(store_button.goto)}
                className="border border-8 border-[var(--lighter-blue)] w-[90%] h-[400px] text-center rounded-md flex justify-center items-center"
              >
                {/* darkens the button when the user hovers and shows View Article*/}
                <div className="bg-[var(--light-blue)] w-full h-full overflow-hidden group group-hover:[&>*:not(p)]:underline decoration-[var(--txt-bright)] flex flex-col items-center justify-center">
                  
                    <div className="relative w-full h-4/5 overflow-hidden">
                      <Image
                        src={store_button.src}
                        alt={store_button.alt}
                        fill
                        className="object-cover scale-[100%] hover:scale-[110%] duration-100 "
                      />
                    </div>
                    <b className="px-2 w-full text-left font-bold text-[var(--txt-bright)] text-[clamp(0.5rem,2vw,0.8rem)] group-hover:underline">
                      {store_button.title}
                    </b>
                    <p className="w-full text-left px-2 text-[var(--txt-bright)] text-[clamp(0.5rem,2vw,0.8rem)] !no-underline hover:!no-underline">${store_button.price.toFixed(2)} CAD</p>
                  </div>
              </button>
            </div>
    );
}