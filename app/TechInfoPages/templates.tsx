import Image from "next/image";
import { SectionData, Paragraph } from "./types";
import clsx from "clsx";

function TemplatePara({ paragraph }: { paragraph: Paragraph }) {
    return (
        <p>
            {(paragraph.first && <span className={clsx("mr-1", paragraph.first_quality)}>{paragraph.first}</span>)}
            {paragraph.paragraph}
        </p>
    );
}

export default function TemplateSection({ section }: { section: SectionData }) {
    if(section.type === 'intro') {

        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center justify-center", section.bgColor)}>
                <div className={clsx("w-1/2 h-full flex flex-col justify-center items-center")}>
                    
                    {/* LOGO */}
                    {section.logo && <div className="w-full h-[33%] flex">
                                        <div className="w-full h-full flex justify-center items-center -translate-x-[20%]">

                                            <div className="relative w-[40%] h-full ">
                                                <Image src="/DAYLUN.png" alt="DAYLUN's" fill className="object-contain"/>
                                            </div>
                                            <p className={clsx("text-md md:text-4xl -translate-y-[30%] px-2 font-serif italic", section.textColor)}>'s</p>
                                        </div>

                                    </div>
                                    }
                    <div className="p-2 h-[66%] flex w-full">
                            <h1 className={clsx("absolute text-[clamp(1.5rem,4vw,4.5rem)] text-right font-extrabold tracking-widest w-[40%] -translate-y-[40%] translate-x-[3%] whitespace-pre-line", section.textColorSub2)}>{section.subheading2}</h1>
                        <div className="w-[80%]">
                            <h1 className={clsx("relative text-[clamp(1.5rem,4vw,4.5rem)] w-full text-right tracking-widest whitespace-pre-line", section.textColor)}>{section.title}</h1>
                            <h2 className={clsx("text-[clamp(0.75rem,1.5vw,1.25rem)] w-full text-right whitespace-pre-line", section.textColorSub)}>{section.subheading}</h2>
                        </div>
                        
                    </div>
                </div>
                <div className="relative w-1/2 h-full flex justify-center items-center">
                    <div className="relative w-full h-full ">
                        {section.img && section.imgAlt && (<Image src={section.img} alt={section.imgAlt} fill className="object-contain"/>)}
                    </div>
                </div>
            </section>
        );
    } else if (section.type === 'story') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center aspect-[16/9]", section.bgColor)}>

                <div className={clsx("w-[60%] h-full flex flex-col items-center")}>
                    <div className="w-full h-[20%] md:h-[38%] flex p-4 md:p-10 items-center">
                        <h1 className={clsx("text-[clamp(1rem,4vw,2.25rem)]", section.textColorBasic)}>The 
                            <span className={clsx("text-[clamp(1rem,4vw,3.5rem)] px-2 italic font-bold", section.textColorEmph2)}>Story</span> 
                            Behind 
                        <br />
                        <span className={clsx("text-[clamp(1rem,4vw,4rem)] ml-2 font-extrabold tracking-widest", section.textColorEmph)}>{section.title}</span></h1>
                    </div>
                    <div className={clsx("w-full h-[80%] md:h-[62%] flex px-8 md:font-medium flex flex-col", section.textColorBasic)}>
                        <p className="text-[clamp(0.45rem,1vw,0.8rem)] whitespace-pre-line w-full">{section.content}</p>
                        <div className="hidden md:block w-full h-[20%] translate-y-[30%]">
                            <Image src="/DAYLUN.png" alt="DAYLUN" fill className="object-contain"/>

                        </div>
                    </div>
                    
                </div>
                <div className={clsx("w-[40%] flex flex-col justify-center items-center pr-5")}>
                    <div className={clsx(`w-full pt-5 pb-10 grid grid-cols-${section.cols} auto-rows-fr`)}>
                        {section.imgs.map((imgSrc, i) => (
                            <div key={i} className={`h-full w-full flex items-center justify-center
                                                                    ${(section.imgs.length % 2 !== 0 && i == section.imgs.length - 1) ? "col-span-2": ""}`}>
                                <img key={i} src={imgSrc.img} className={`max-h-full max-w-full object-contain`} />
                            </div>
                            
                        ))}
                    </div>
                </div>
            </section>
        );

    } else if (section.type === 'applications') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center", section.bgColor)}>

                {/* LEFT SIDE */}
                <div className={clsx("w-[70%] md:w-[60%] h-full flex flex-col items-center")}>
                    {/* TITLE */}
                    <div className="w-full h-[10%] sm:h-[12%] md:h-[20%] flex px-10 mt-5 items-center">
                        <h1 className={clsx("text-[clamp(0.75rem,2.5vw,2.5rem)] px-2 font-bold", section.textColorEmph)}>APPLICATIONS
                        <br />
                        <span className={clsx("text-[clamp(0.75rem,2vw,2rem)] ml-2 font-extrabold md:tracking-widest whitespace-pre-line", section.textColorEmph2)}>{section.title}</span></h1>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className={clsx("w-full sm:h-[88%] md:h-[80%] flex px-8 flex flex-col", section.textColorBasic)}>
                        {/* PARAGRAPHS MAPPED FROM CONTENT_ARR */}
                        <div className="text-[clamp(0.45rem,1.25vw,0.75rem)] w-full gap-y-1 md:gap-y-2 flex flex-col">
                        {(section.contentArr && section.contentArr.map((sub, index) => (
                            <TemplatePara key={sub.id} paragraph={sub} />)
                        ))}
                        </div>

                        {/* OPTIONAL BOTTOM IMAGE */}
                        {(section.botImg && section.botImgAlt && 
                        <div className="hidden md:block relative w-full h-[20%] translate-y-[20%]">
                            <Image src={section.botImg} alt={section.botImgAlt} fill className="object-contain"/>

                        </div>)}
                    </div>
                    
                </div>
                <div className={clsx("h-1/2 w-[30%] md:w-[40%] md:h-full flex md:flex-col justify-center items-center pr-2")}>
                    <div className={clsx(`w-full grid grid-cols-${section.cols}`)}>
                        {section.imgs.map((imgSrc, i) => (
                            <div key={i} className={`h-full w-full flex items-center justify-center
                                                                    ${(section.imgs.length % 2 !== 0 && i == section.imgs.length - 1) ? "col-span-2": ""}`}>
                                <img src={imgSrc.img} className={`max-h-full max-w-full object-contain`} />
                            </div>
                            
                        ))}
                    </div>
                </div>
            </section>
        );

    } else if (section.type === 'img_showcase') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex flex-col h-full w-full items-center", section.bgColor)}>

                <div className={clsx("w-full h-[15%] flex md:flex-col")}>
                    <div className="w-[80%] md:w-[50%] h-[38%] flex p-10">
                        <h1 className={clsx("text-[clamp(1.5rem,3.5vw,2.5rem)] ml-2 font-extrabold", section.textColorEmph)}>{section.title}
                            <span className={clsx("text-[clamp(1.5rem,3.5vw,2.5rem)] ml-2 font-extrabold tracking-widest", section.textColorEmph2)}>{section.subheading}</span>
                        </h1>
                    </div>
                </div>
                {section.cols > 0 && (<div className={clsx("md:w-[80%] h-[85%] flex justify-center items-center pr-5")}>
                    <div className={clsx(`w-full h-[80%] grid grid-cols-${section.cols}`)}>
                        {section.imgs.map((imgSrc, i) => (
                            <div key={i} className="flex flex-col justify-center items-center h-[75%] p-1 md:p-5">
                                <h2 className={clsx(`font-bold h-[10%]`, section.textColorBasic)}>{imgSrc.alt}</h2>
                                <img src={imgSrc.img} alt={imgSrc.alt} className={`relative w-full h-[70%] md:h-[80%] object-contain`} />
                            </div>
                        ))}
                    </div>
                </div>)}
            </section>
        );
    } else if (section.type === 'article_gen') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center", section.bgColor)}>

                {/* LEFT SIDE */}
                <div className={clsx("w-[60%] h-full flex flex-col items-center")}>
                    {/* TITLE */}
                    <div className={clsx("text-[clamp(1rem,3.5vw,2.5rem)] px-10 font-bold tracking-widest w-full h-[22%] md:h-[30%] flex px-10 mt-5 flex-col", section.textColorEmph)}>
                        <h1> {section.title}</h1>
                        
                        <h1 className={clsx("text-[clamp(1rem,3vw,2rem)] font-extrabold tracking-widest whitespace-pre-line", section.textColorEmph2)}>{section.subheading}</h1>
                        
                        <h1>{section.subheading2}</h1>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className={clsx("w-full h-[78%] md:h-[70%] flex px-8 flex flex-col", section.textColorBasic)}>
                        {/* PARAGRAPHS MAPPED FROM CONTENT_ARR */}
                        <div className="text-[clamp(0.45rem,1.25vw,0.75rem)] w-full gap-y-2 flex flex-col">
                        {(section.contentArr && section.contentArr.map((sub, index) => (
                            <TemplatePara key={sub.id} paragraph={sub} />)
                        ))}
                        </div>

                        {/* OPTIONAL BOTTOM IMAGE */}
                        {(section.botImg && section.botImgAlt && 
                        <div className="relative w-full h-[20%] translate-y-[20%]">
                            <Image src={section.botImg} alt={section.botImgAlt} fill className="object-contain"/>

                        </div>)}
                    </div>
                    
                </div>
                <div className={clsx("h-1/2 w-[40%] md:h-full flex flex-col justify-center items-center pr-5")}>
                    <div className={clsx(`w-full h-full py-10 grid grid-cols-${section.cols} auto-rows-fr`, section.imgBgColor)}>
                        {section.imgs.map((imgSrc, i) => (
                            <div key={i} className={`h-full w-full flex items-center justify-center
                                                                    ${(section.imgs.length % 2 !== 0 && i == section.imgs.length - 1) ? "col-span-2": ""}`}>
                                <img src={imgSrc.img} className={`max-h-full max-w-full object-contain`} />
                            </div>
                            
                        ))}
                    </div>
                </div>
            </section>
        );

    } else if (section.type === 'video') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex flex-col h-full w-full items-center", section.bgColor)}>

                <div className={clsx("w-full h-[20%] flex md:flex-col")}>
                    <div className="w-[90%] md:w-[50%] h-[38%] flex p-10">
                        <h1 className={clsx("text-[clamp(1.3rem,3.5vw,2.5rem)] ml-2 font-extrabold", section.textColorEmph)}>{section.title}
                            <br />
                            <span className={clsx("text-[clamp(1.3rem,3.5vw,2.5rem)] ml-2 font-extrabold tracking-widest", section.textColorEmph2)}>{section.subheading}</span>
                        </h1>
                    </div>
                    
                </div>
                {section.embed && (<div className={clsx("w-[80%] h-[70%] flex justify-center items-center pr-5")}>
                    <div className="w-full h-full p-1 md:pt-[3%] flex justify-center">
                        {section.embed && section.link && 
                        (
                            <div className="relative w-full md:w-[70%] aspect-video">
                                <iframe className="mt-2 absolute top-0 left-0 w-full h-full" src={section.link} title="YouTube video player" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                                            picture-in-picture; web-share" 
                                        ></iframe>
                            </div>
                        )}
                        
                    </div>
                </div>)}
            </section>
        );
    } 

  return (
    <>
    </>
  );
}