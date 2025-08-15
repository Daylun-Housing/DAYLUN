import Image from "next/image";
import { Part, Content } from "./type";
import clsx from "clsx";

import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

/**
 * PARTS TEMPLATE
 * 
 * @param Part 
 * @returns {JSX.Element}
 * 
 * Each part of the main article is separated into parts. This is layered on top of
 *  the blue background over the background image.
 * Parts have several types:
 *  - text_box:             Plain text box. If uppercase_first is active, then uppercases first letter. 
 *  - img:                  Basic image that covers about 60% of the blue section. 
 *  - titled_list:          Heading with a list of items.
 *  - img_list:             Heading with a list of items. Instead of bullet points has image icons.     
 *  - link_box:             Text with one link. 
 *  - mix_list_image_text:  General section, with a heading, text under heading, left side text with list
 *                          and image on the right. Under that can be space for images.
 */
function PartsTemplate({ part }: { part: Part }) {

    // text_box: Plain text box. If uppercase_first is active, then uppercases first letter. 
    if(part.type == "text_box") {

        return (
            <>
                {part.text && part.uppercase_first && 
                    (<p className="first-letter:text-5xl text-[var(--txt-bright)] px-[5%] py-[2%]">
                        {part.text}
                    </p>)}

                {part.text && !part.uppercase_first && 
                    (<p className="text-[var(--txt-bright)] px-[5%] py-[2%]">
                        {part.text}
                    </p>)}
            </>

        );

    // img: Basic image that covers about 60% of the blue section. 
    } else if(part.type == "img") {

        return (
            <div className="relative flex justify-center text-center py-[20px] w-full h-full object-contain">
                <div className="w-[60%]">
                    <img
                        src={part.src}
                        alt={part.alt}
                        className="w-full h-auto object-contain"
                    />

                </div>
            </div>
        );
    
    // titled_list: Heading with a list of items.
    } else if(part.type == "titled_list") {

        return (
            <div className="relative flex justify-center text-center py-[5px] w-full h-full object-contain">
                <div className="w-full p-[1%] flex flex-col items-center">
                    <h1 className="text-[var(--txt-bright)] text-5xl font-extrabold">{part.title} <span className="text-[var(--light-blue)]">{part.title_colored}</span>
                    </h1>
                    <ul className={`text-left text-[var(--txt-bright)] list-disc w-[80%] py-[4%] grid grid-cols-1 md:grid-cols-${part.cols} translate-x-[5%] gap-x-10 gap-y-2`}>
                        {part.items.map((sub, idx) => (
                            <li key={idx}>{sub}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );

    // img_list: Heading with a list of items. Instead of bullet points has image icons. 
    } else if(part.type == "img_list") {

        return (
            <div className="relative flex justify-center text-center py-[5px] w-full h-full object-contain">
                <div className="w-full p-[1%] flex flex-col items-center">
                    <h1 className="text-[var(--txt-bright)] text-5xl font-extrabold">{part.title} <span className="text-[var(--light-blue)]">{part.title_colored}</span>
                    </h1>
                    <ul className={`text-left text-[var(--txt-bright)] w-[75%] py-[4%] grid grid-cols-${part.cols} translate-x-[5%] gap-y-4`}>
                        {part.items.map((sub, idx) => (
                            <li key={idx} className="flex gap-x-4 items-center">
                                <Image src={sub.src} 
                                        alt={sub.alt} 
                                        width={50}
                                        height={50}
                                        className="object-contain"/> <b>{sub.bold}</b> {sub.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );

    // link_box: Text with one link. 
    } else if(part.type == "link_box") {

        if(part.text) {
            if(part.uppercase_first) {
                return (
                  
                    <p className="first-letter:text-5xl text-[var(--txt-bright)] px-[5%] py-[2%]">
                        {part.text} 
                        <a className="text-[var(--light-blue)] font-bold hover:text-[var(--medium-blue)]" href={part.link_to}>{part.link_text}</a>
                        {part.post_text} 

                    </p>
                );
            } else {
                return (
                    <p className="text-[var(--txt-bright)] px-[5%] py-[2%]">
                        {part.text} 
                        <a className="text-[var(--light-blue)] font-bold hover:text-[var(--medium-blue)]" href={part.link_to}>{part.link_text}</a> {part.post_text} 
                    </p>
                );
            }
        } else {
            return (
                    <p className="text-[var(--txt-bright)] px-[5%] py-[2%]">
                        <a className="text-[var(--light-blue)] font-bold hover:text-[var(--medium-blue)]" href={part.link_to}>{part.link_text}</a> {part.post_text} 
                    </p>
                );
        }

    /* mix_list_image_text:  General section, with a heading, text under heading, left side text with list
                                and image on the right. Under that can be space for images.*/
    } else if(part.type == "mix_list_image_text") {
        const ref_WhatWeDo = useRef(null);
        const is_visible_WWD = useIsVisible(ref_WhatWeDo);

        return (
  
            <div className="px-[10%]" 
                        ref={ref_WhatWeDo}>
                {/* Heading */}
                <h1 className="text-[var(--txt-bright)] text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-6 mb-4 font-bold">
                    {part.title} <span className="text-[var(--light-blue)]">{part.colored_title}</span>
                </h1>

                {/* Text under heading */}
                <p className="mb-4 lg:mb-[50px] text-[var(--txt-bright)]">
                    {part.text}
                </p>

                {/*Main Section - Left text, list*/}
                <div className="flex-col text-[var(--txt-bright)]">
                    <div className="md:flex w-full">
                        <div className="flex flex-col w-1/2">
                            {part.side_text}
                            <ul className="flex-col space-y-4 list-disc">
                                {part.list?.map((sub, idx) => (
                                    <li key={idx}>{sub}</li>
                                ))}
                            </ul>

                        </div>
                        <div className="h-[125px] sm:h-[200px] md:h-[250px] w-full md:w-[50%] flex items-center justify-center">
                            <div
                            className={`relative w-[95%] duration-100 h-[80%] object-fill
                                                                        transition-all duration-[2000ms] ease-in-out ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"}`}
                            >
                                <Image
                                    src={part.img_src}
                                    alt={part.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Maps the images into a grid */}
                    <div className="md:flex w-full ">
                        {(part.imgs.length > 0 && <div className={`relative h-[150px] md:h-[200px] lg:h-[400px] w-full grid grid-cols-${part.imgs.length} items-center justify-items-center`}>
                            {part.imgs.map(({src, alt}, idx) => (
                                <div
                                    key={idx}
                                    ref={ref_WhatWeDo}
                                    className={`relative w-[90%] h-[80%] 
                                        transition-all duration-[2000ms] ease-in-out
                                        ${is_visible_WWD ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]"}`}
                                    >
                                    <div className="relative w-full h-full">
                                        <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))

                            }
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * TEMPLATE SECTION
 * 
 * @param Content 
 * @returns {JSX.Element}
 * 
 * This Handles the Hero and Main Article body, could be modified for some other parts.
 * Hero:           has an image, article title, subtitle, and some other information. 
 * Main Article:   Actual content of the article
 */
export default function TemplateSection({ content }: { content: Content }) {
    const ref_WhatWeDo = useRef(null);
    const is_visible_WWD = useIsVisible(ref_WhatWeDo);
    
    {/* HERO IMAGE */}
    if(content.type == "hero") {

        return (
            <div className="relative w-full h-screen">
                <Image
                    className="brightness-[0.70] object-cover"
                    src={content.img}
                    alt={content.alt}
                    fill
                />
            
                <div
                    ref={ref_WhatWeDo}
                    className={`absolute inset-0 flex items-center justify-center text-center
                        transition-all duration-1000 ease-in-out ${is_visible_WWD ? "scale-100" : "scale-50"}`}
                >
                    <div className="backdrop-blur-sm bg-black/50 text-[var(--txt-bright)] px-6 py-8 rounded-xl shadow-lg max-w-3xl">

                        {/* TITLE */}
                        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
                            {content.title}
                        </p>

                        {/* SUBTITLE */}
                        {content.subtitle && <p className="mt-2 text-sm md:text-lg xl:text-xl text-gray-200">
                            {content.subtitle}
                        </p>}

                        {/* Article Information */}
                        <p className="mt-2 text-sm md:text-lg xl:text-xl text-gray-200">
                            Daylun | {content.author && (<span> {content.author} | </span>)} {content.date}
                        </p>
                    </div>
                </div>
            </div>
        );

    {/* ARTICLE */}
    } else if(content.type == "article") {

        return (
            /* APPLY BACKGROUND */
            <div className={`px-[7%] md:px-[15%]`}
                    style={{ backgroundImage: `url(${content.bg_img})` }}
                    >

                {/* MAPPING PARTS */}
                <div className="bg-[var(--dark-blue)] w-full py-[50px]">
                    {content.content.map((sub, idx) => (
                        <PartsTemplate key={sub.id} part={sub} />
                    ))

                    }
                </div>
            </div>
        );

    }

    return (
        <>
        </>
    );
}