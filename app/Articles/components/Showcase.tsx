import Left from "./ArticleParts/Left";
import Middle from "./ArticleParts/Middle";
import Right from "./ArticleParts/Right";

export default function Showcase() {
    return (
        <section className="relative flex flex-col bg-[#0474BC] md:flex-row h-screen w-full">
           <Left />
           <Middle />
           <Right />
    
        </section>
    )
}