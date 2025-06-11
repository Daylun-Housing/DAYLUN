import Left from "./ArticleParts/Left";
import Middle from "./ArticleParts/Middle";
import Right from "./ArticleParts/Right";

import {useIsVisible} from "../../JS_Scripts/Visible"
import { useRef } from "react";

export default function Showcase() {
    const ref_WhatWeDo = useRef(null);
    const is_visible_WWD = useIsVisible(ref_WhatWeDo);

    return (
        <section className="relative flex flex-col bg-[#0474BC] w-full text-center">
            <div className="text-5xl text-white font-bold mt-10">
                <p>ALL ARTICLES</p>
            </div>

            <div>

                <div ref={ref_WhatWeDo} className={`relative flex flex-col md:flex-row justify-center items-center 
                                                    transition-all ease-in-out duration-[2000ms] ${is_visible_WWD ? "opacity-100" : "opacity-0"}`}>

                    <Left />
                    <Middle />
                    <Right />

                </div>

            </div>

        </section>
    )
}