import Image from "next/image";
import { contentData, art_button } from "./content";
import { useRouter } from 'next/navigation';

/**
 * BUTTON_TEMPLATE
 * @param art_button 
 * @returns {JSX.Element} 
 * 
 *    takes an art_button configuration and converts it into a button. 
 *    has a title, image, and quick blurb about the article. 
 */

export default function Button_Template ({art_button} : {art_button : art_button}) {
    const router = useRouter();

   /**
    * gotoarticle
    * @param section 
    * 
    * route to the ArticlePage with key = section
    */
    const gotoarticle = (section: string) => {
        router.push(`/ArticlePages?section=${section}`);
    };

    return (
        <div className="justify-center py-1 items-center flex">
              {/* BUTTON with route */}
              <button
                onClick={() => gotoarticle(art_button.goto)}
                className="bg-[var(--dark-blue)] w-2/3 text-center"
              >
                {/* darkens the button when the user hovers and shows View Article*/}
                <div className="w-full h-full overflow-hidden scale-[80%] hover:scale-[90%] duration-100">
                  <div className="transition-all font-bold text-[var(--txt-bright)] text-2xl absolute h-full w-full bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 z-20">
                    View Article
                  </div>
                  <p className="font-bold text-[var(--txt-bright)] text-[clamp(1.5rem,4vw,2rem)]">
                    {art_button.title}
                  </p>
                  <div className="relative w-4/5 h-[200px] ">
                    <Image
                      src={art_button.src}
                      alt={art_button.alt}
                      fill
                      className="object-cover translate-x-[12%]"
                    />
                  </div>
                  <div className="m-2 text-left text-[var(--txt-bright)] text-[clamp(1px,4vw,1rem)] justify-center flex flex-col">
                    <p>{art_button.text}</p>
                    <br />
                    <p className="bg-[var(--light-blue)] text-[var(--txt-bright)] text-center font-bold px-4 py-3 rounded-md scale-[60%] sm:scale-[70%] md:scale-[80%] lg:scale-100 transition">
                      Read More
                    </p>
                  </div>
                </div>
              </button>
            </div>
    );
}