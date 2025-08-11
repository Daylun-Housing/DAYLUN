import Image from "next/image";
import { SectionData, Paragraph, Part } from "./content";
import clsx from "clsx";

import { useIsVisible } from "../JS_Scripts/Visible";
import { useRef } from "react";

function TemplatePara({ paragraph }: { paragraph: Paragraph }) {
    return (
        <p>
            {(paragraph.first && <span className={clsx("mr-1", paragraph.first_quality)}>{paragraph.first}</span>)}
            {paragraph.paragraph}
        </p>
    );
}

// 

function PartsTemplate({ part }: { part: Part }) {
    if(part.type == "text_box") {

        return (
            <>
                {part.text && part.uppercase_first && 
                    (<p className="first-letter:text-5xl text-white px-[5%] py-[2%]">
                        {part.text}
                    </p>)}

                {part.text && !part.uppercase_first && 
                    (<p className="text-white px-[5%] py-[2%]">
                        {part.text}
                    </p>)}
            </>

        );
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
    } else if(part.type == "titled_list") {

        return (
            <div className="relative flex justify-center text-center py-[5px] w-full h-full object-contain">
                <div className="w-full p-[1%] flex flex-col items-center">
                    <h1 className="text-white text-5xl font-extrabold">{part.title} <span className="text-[#0474BC]">{part.title_colored}</span>
                    </h1>
                    <ul className={`text-left text-white list-disc w-[80%] py-[4%] grid grid-cols-1 md:grid-cols-${part.cols} translate-x-[5%] gap-x-10 gap-y-2`}>
                        {part.items.map((sub, idx) => (
                            <li key={idx}>{sub}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    } else if(part.type == "img_list") {

        return (
            <div className="relative flex justify-center text-center py-[5px] w-full h-full object-contain">
                <div className="w-full p-[1%] flex flex-col items-center">
                    <h1 className="text-white text-5xl font-extrabold">{part.title} <span className="text-[#0474BC]">{part.title_colored}</span>
                    </h1>
                    <ul className={`text-left text-white w-[75%] py-[4%] grid grid-cols-${part.cols} translate-x-[5%] gap-y-4`}>
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
    } else if(part.type == "link_box") {

        if(part.text) {
            if(part.uppercase_first) {
                return (
                  
                    <p className="first-letter:text-5xl text-white px-[5%] py-[2%]">
                        {part.text} 
                        <a className="text-[#0474BC] font-bold hover:text-[#055d96]" href={part.link_to}>{part.link_text}</a>
                        {part.post_text} 

                    </p>
                );
            } else {
                return (
                    <p className="text-white px-[5%] py-[2%]">
                        {part.text} 
                        <a className="text-[#0474BC] font-bold hover:text-[#055d96]" href={part.link_to}>{part.link_text}</a> {part.post_text} 
                    </p>
                );
            }
        } else {
            return (
                    <p className="text-white px-[5%] py-[2%]">
                        <a className="text-[#0474BC] font-bold hover:text-[#055d96]" href={part.link_to}>{part.link_text}</a> {part.post_text} 
                    </p>
                );
        }
    } else if(part.type == "mix_list_image_text") {
        const ref_WhatWeDo = useRef(null);
        const is_visible_WWD = useIsVisible(ref_WhatWeDo);

        return (
  
            <div className="px-[10%]" 
                        ref={ref_WhatWeDo}>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-6 mb-4 font-bold">
                    {part.title} <span className="text-[#0474BC]">{part.colored_title}</span>
                </h1>

                <p className="mb-4 lg:mb-[50px] text-white">
                    {part.text}
                </p>
                <div className="flex-col text-white">
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

                    <div className="md:flex w-full ">
                        {(part.imgs && <div className={`relative h-[150px] md:h-[200px] lg:h-[400px] w-full grid grid-cols-${part.img_num} items-center justify-items-center`}>
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

// This Handles the Hero and Main Article body, could be modified for some other parts

export default function TemplateSection({ section }: { section: SectionData }) {
    const ref_WhatWeDo = useRef(null);
    const is_visible_WWD = useIsVisible(ref_WhatWeDo);
    
    if(section.content.type == "hero") {

        return (
            <div className="relative w-full h-screen">
                <Image
                    className="brightness-[0.70] object-cover"
                    src={section.content.img}
                    alt={section.content.alt}
                    fill
                />
            
                <div
                    ref={ref_WhatWeDo}
                    className={`absolute inset-0 flex items-center justify-center text-center
                        transition-all duration-1000 ease-in-out ${is_visible_WWD ? "scale-100" : "scale-50"}`}
                >
                    <div className="backdrop-blur-sm bg-black/50 text-white px-6 py-8 rounded-xl shadow-lg max-w-3xl">
                        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight">
                            {section.title}
                        </p>
                        {section.content.subtitle && <p className="mt-2 text-sm md:text-lg xl:text-xl text-gray-200">
                            {section.content.subtitle}
                        </p>}
                        <p className="mt-2 text-sm md:text-lg xl:text-xl text-gray-200">
                            Daylun | {section.content.author && (<span> {section.content.author} | </span>)} {section.content.date}
                        </p>
                    </div>
                </div>
            </div>
        );
    } else if(section.content.type == "article") {

        return (
            <div className={`px-[7%] md:px-[15%]`}
                    style={{ backgroundImage: `url(${section.content.bg_img})` }}
                    >
                <div className="bg-[#04012A] w-full py-[50px]">
                    {section.content.content.map((sub, idx) => (
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