import Image from "next/image";
import { SectionData, Paragraph } from "./content";
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
    if(section.type === 'intro-left-right') {

        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center justify-center", section.bgcolor2)}>
                <div className={clsx("w-1/2 h-full flex flex-col justify-center items-center")}>
                    
                    {/* LOGO */}
                    {section.logo && <div className="w-full h-[33%] flex">
                                        <div className="w-full h-full flex justify-center items-center -translate-x-[20%]">

                                            <div className="relative w-[40%] h-full ">
                                                <Image src="/DAYLUN.png" alt="DAYLUN's" fill className="object-contain"/>
                                            </div>
                                            <p className={clsx("text-md md:text-4xl -translate-y-[30%] px-2 font-serif italic", section.textcolor1)}>'s</p>
                                        </div>

                                    </div>
                                    }
                    <div className="p-2 h-[66%] flex w-full">
                            <h1 className={clsx("absolute text-[clamp(2rem,4vw,4.5rem)] text-right font-extrabold tracking-widest w-[40%] -translate-y-[40%] translate-x-[3%] whitespace-pre-line", section.textcolor3)}>{section.subheading2}</h1>
                        <div className="w-[80%]">
                            <h1 className={clsx("relative text-[clamp(2rem,4vw,4.5rem)] w-full text-right tracking-widest whitespace-pre-line", section.textcolor1)}>{section.title}</h1>
                            <h2 className={clsx("text-[clamp(0.75rem,1.5vw,1.25rem)] w-full text-right whitespace-pre-line", section.textcolor2)}>{section.subheading1}</h2>
                        </div>
                        
                    </div>
                </div>
                <div className="relative w-1/2 h-full flex justify-center items-center">
                    <div className="relative w-full h-full ">
                        {section.imageUrl && section.imagealt && (<Image src={section.imageUrl} alt={section.imagealt} fill className="object-contain"/>)}
                    </div>
                </div>
            </section>
        );
    } else if (section.type === 'story') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center aspect-[16/9]", section.bgcolor1)}>

                <div className={clsx("w-[60%] h-full flex flex-col items-center")}>
                    <div className="w-full h-[20%] md:h-[38%] flex p-10 items-center">
                        <h1 className={clsx("text-[clamp(1rem,2vw,2.25rem)]", section.textcolor1)}>The 
                            <span className={clsx("text-[clamp(1rem,2vw,3.5rem)] px-2 italic font-bold", section.textcolor3)}>Story</span> 
                            Behind 
                        <br />
                        <span className={clsx("text-[clamp(1rem,2vw,4rem)] ml-2 font-extrabold tracking-widest", section.textcolor2)}>{section.title}</span></h1>
                    </div>
                    <div className={clsx("w-full h-[75%] md:h-[62%] flex px-8 md:font-medium flex flex-col", section.textcolor1)}>
                        <p className="text-[clamp(0.5rem,1vw,0.8rem)] whitespace-pre-line w-full">{section.content}</p>
                        <div className="hidden md:block w-full h-[20%] translate-y-[30%]">
                            <Image src="/DAYLUN.png" alt="DAYLUN" fill className="object-contain"/>

                        </div>
                    </div>
                    
                </div>
                <div className={clsx("w-full h-1/2 md:w-[40%] md:h-full flex flex-col justify-center items-center pr-5")}>
                    <div className={clsx("w-full h-[30%] flex", section.bgcolor2)}>
                        {section.imageUrl && section.imagealt && 
                        (<div className="relative h-full w-1/2">
                            <Image src={section.imageUrl} alt={section.imagealt} fill className="object-contain"/>
                        </div>)}

                        {section.imageUrl2 && section.imagealt2 && 
                        (<div className="relative h-full w-1/2">
                            <Image src={section.imageUrl2} alt={section.imagealt2} fill className="object-cover"/>
                        </div>)}
                    </div>
                    <div className="w-full h-[45%]">
                        {section.imageUrl3 && section.imagealt3 && 
                        (<div className="relative h-full w-full">
                            <Image src={section.imageUrl3} alt={section.imagealt3} fill className="object-cover"/>
                        </div>)}
                        
                    </div>
                </div>
            </section>
        );

    } else if (section.type === 'applications') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center", section.bgcolor1)}>

                {/* LEFT SIDE */}
                <div className={clsx("w-[70%] md:w-[60%] h-full flex flex-col items-center")}>
                    {/* TITLE */}
                    <div className="w-full h-[12%] md:h-[20%] flex px-10 mt-5 items-center">
                        <h1 className={clsx("text-[clamp(1rem,2.5vw,2.5rem)] px-2 font-bold", section.textcolor2)}>APPLICATIONS
                        <br />
                        <span className={clsx("text-[clamp(1rem,2vw,2rem)] ml-2 font-extrabold md:tracking-widest whitespace-pre-line", section.textcolor3)}>{section.title}</span></h1>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className={clsx("w-full h-[88%] md:h-[80%] flex px-8 flex flex-col", section.textcolor1)}>
                        {/* PARAGRAPHS MAPPED FROM CONTENT_ARR */}
                        <div className="text-[clamp(0.5rem,1.25vw,0.75rem)] w-full gap-y-1 md:gap-y-2 flex flex-col">
                        {(section.content_arr && section.content_arr.map((sub, index) => (
                            <TemplatePara key={sub.id} paragraph={sub} />)
                        ))}
                        </div>

                        {/* OPTIONAL BOTTOM IMAGE */}
                        {(section.botimageUrl && section.botimagealt && 
                        <div className="hidden md:block relative w-full h-[20%] translate-y-[20%]">
                            <Image src={section.botimageUrl} alt={section.botimagealt} fill className="object-contain"/>

                        </div>)}
                    </div>
                    
                </div>
                <div className={clsx("h-1/2 w-[30%] md:w-[40%] md:h-full flex md:flex-col justify-center items-center pr-2")}>
                    {(section.img_num == 1 && 
                    <>

                            {section.imageUrl && section.imagealt && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl} alt={section.imagealt} fill className="object-cover"/>
                            </div>)}
                    </>)}
                    {(section.img_num == 2 && 
                    <>
                        <div className={clsx("w-full h-[38%]", section.bgcolor2)}>
                            {section.imageUrl && section.imagealt && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl} alt={section.imagealt} fill className="object-cover"/>
                            </div>)}
                        </div>
                        <div className="w-full h-[38%]">
                            {section.imageUrl2 && section.imagealt2 && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl2} alt={section.imagealt2} fill className="object-cover"/>
                            </div>)}
                            
                        </div>
                    </>)}
                    {(section.img_num == 3 && 
                    <>
                        <div className={clsx("w-full h-[30%] flex", section.bgcolor2)}>
                            {section.imageUrl && section.imagealt && 
                            (<div className="relative h-full w-1/2">
                                <Image src={section.imageUrl} alt={section.imagealt} fill className="object-contain"/>
                            </div>)}

                            {section.imageUrl2 && section.imagealt2 && 
                            (<div className="relative h-full w-1/2">
                                <Image src={section.imageUrl2} alt={section.imagealt2} fill className="object-cover"/>
                            </div>)}
                        </div>
                        <div className="w-full h-[45%]">
                            {section.imageUrl3 && section.imagealt3 && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl3} alt={section.imagealt3} fill className="object-cover"/>
                            </div>)}
                            
                        </div>
                    </>)}
                </div>
            </section>
        );

    } else if (section.type === 'img_showcase') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex flex-col h-full w-full items-center", section.bgcolor1)}>

                <div className={clsx("w-full h-[20%] flex md:flex-col")}>
                    <div className="w-[80%] md:w-[50%] h-[38%] flex p-10">
                        <h1 className={clsx("text-[clamp(1.5rem,3.5vw,2.5rem)] ml-2 font-extrabold", section.textcolor2)}>{section.title}
                            <span className={clsx("text-[clamp(1.5rem,3.5vw,2.5rem)] ml-2 font-extrabold tracking-widest", section.textcolor3)}>{section.subheading1}</span>
                        </h1>
                    </div>
                    
                </div>
                {section.img_num && (<div className={clsx("md:w-[80%] h-[80%] flex justify-center items-center pr-5")}>
                    <div className="w-1/3 h-[90%] p-1 md:p-5">
                        {section.imageUrl && section.imagealt && 
                        (
                            <>
                                <h3 className={clsx("font-bold w-full mb-1 text-center h-[10%]", section.textcolor1)}>{section.imagealt}</h3>
                                <div className="relative h-[70%] md:h-[80%] w-full">
                                    <Image src={section.imageUrl} alt={section.imagealt} fill className="object-cover md:object-contain"/>
                                </div>
                            </>
                        )}
                        
                    </div>
                    <div className="w-1/3 h-[90%] p-1 md:p-5">
                        {section.imageUrl2 && section.imagealt2 && 
                        (
                            <>
                                <h3 className={clsx("font-bold w-full mb-1 text-center h-[10%]", section.textcolor1)}>{section.imagealt2}</h3>
                                <div className="relative h-[70%] md:h-[80%] w-full">
                                    <Image src={section.imageUrl2} alt={section.imagealt2} fill className="object-cover md:object-contain"/>
                                </div>
                            </>
                        )}
                        
                    </div>
                    <div className="w-1/3 h-[90%] p-1 md:p-5">
                        {section.imageUrl3 && section.imagealt3 && 
                        (
                            <>
                                <h3 className={clsx("font-bold w-full mb-1 text-center h-[10%]", section.textcolor1)}>{section.imagealt3}</h3>
                                <div className="relative h-[70%] md:h-[80%] w-full">
                                    <Image src={section.imageUrl3} alt={section.imagealt3} fill className="object-cover md:object-contain"/>
                                </div>
                            </>
                        )}
                        
                    </div>
                </div>)}
            </section>
        );
    } else if (section.type === 'article_gen') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex h-full w-full items-center", section.bgcolor1)}>

                {/* LEFT SIDE */}
                <div className={clsx("w-[70%] md:w-[60%] h-full flex flex-col items-center")}>
                    {/* TITLE */}
                    <div className={clsx("text-[clamp(1rem,3.5vw,2.5rem)] px-10 font-bold tracking-widest w-full h-[22%] md:h-[30%] flex px-10 mt-5 flex-col", section.textcolor2)}>
                        <h1> {section.title}</h1>
                        
                        <h1 className={clsx("text-[clamp(1rem,3vw,2rem)] font-extrabold tracking-widest whitespace-pre-line", section.textcolor3)}>{section.subheading1}</h1>
                        
                        <h1>{section.subheading2}</h1>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className={clsx("w-full h-[88%] md:h-[70%] flex px-8 flex flex-col", section.textcolor1)}>
                        {/* PARAGRAPHS MAPPED FROM CONTENT_ARR */}
                        <div className="text-[clamp(0.5rem,1.25vw,0.75rem)] w-full gap-y-2 flex flex-col">
                        {(section.content_arr && section.content_arr.map((sub, index) => (
                            <TemplatePara key={sub.id} paragraph={sub} />)
                        ))}
                        </div>

                        {/* OPTIONAL BOTTOM IMAGE */}
                        {(section.botimageUrl && section.botimagealt && 
                        <div className="relative w-full h-[20%] translate-y-[20%]">
                            <Image src={section.botimageUrl} alt={section.botimagealt} fill className="object-contain"/>

                        </div>)}
                    </div>
                    
                </div>
                <div className={clsx("w-[30%] md:w-[40%] h-full flex flex-col justify-center items-center pr-2")}>
                    {(section.img_num == 1 && 
                    <>

                            {section.imageUrl && section.imagealt && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl} alt={section.imagealt} fill className="object-cover"/>
                            </div>)}
                    </>)}
                    {(section.img_num == 2 && 
                    <>
                        <div className={clsx("w-full h-[38%]", section.bgcolor2)}>
                            {section.imageUrl && section.imagealt && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl} alt={section.imagealt} fill className="object-cover"/>
                            </div>)}
                        </div>
                        <div className="w-full h-[38%]">
                            {section.imageUrl2 && section.imagealt2 && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl2} alt={section.imagealt2} fill className="object-cover"/>
                            </div>)}
                            
                        </div>
                    </>)}
                    {(section.img_num == 3 && 
                    <>
                        <div className={clsx("w-full h-[30%] flex", section.bgcolor2)}>
                            {section.imageUrl && section.imagealt && 
                            (<div className="relative h-full w-1/2">
                                <Image src={section.imageUrl} alt={section.imagealt} fill className="object-contain"/>
                            </div>)}

                            {section.imageUrl2 && section.imagealt2 && 
                            (<div className="relative h-full w-1/2">
                                <Image src={section.imageUrl2} alt={section.imagealt2} fill className="object-contain"/>
                            </div>)}
                        </div>
                        <div className={clsx("w-full h-[45%] flex", section.bgcolor2)}>
                            {section.imageUrl3 && section.imagealt3 && 
                            (<div className="relative h-full w-full">
                                <Image src={section.imageUrl3} alt={section.imagealt3} fill className="object-contain"/>
                            </div>)}
                            
                        </div>
                    </>)}
                </div>
            </section>
        );

    } else if (section.type === 'vid_showcase') {
        return (
            
            <section className={clsx("snap-start relative overflow-hidden flex flex-col h-full w-full items-center", section.bgcolor1)}>

                <div className={clsx("w-full h-[20%] flex md:flex-col")}>
                    <div className="w-[80%] md:w-[50%] h-[38%] flex p-10">
                        <h1 className={clsx("text-[clamp(1.5rem,3.5vw,2.5rem)] ml-2 font-extrabold", section.textcolor2)}>{section.title}
                            <span className={clsx("text-[clamp(1.5rem,3.5vw,2.5rem)] ml-2 font-extrabold tracking-widest", section.textcolor3)}>{section.subheading1}</span>
                        </h1>
                    </div>
                    
                </div>
                {section.img_num && (<div className={clsx("w-[80%] h-[70%] flex justify-center items-center pr-5")}>
                    <div className="w-full h-full p-1 md:p-5 flex justify-center">
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