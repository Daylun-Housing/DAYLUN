import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

/** 
  * Leadership
  * 
  * Configuration for the leadership section of the About page. 
  * 
  * name: person name (string)
  * title: job title (string)
  * image: location of person photo in the public folder (string)
  * linkedin: link to linkedin, optional (string)
  * bio: biography of the person (string)
  */
const team = [
  {
    name: "Arthur Zankowicz",
    title: "Chief Executive Officer",
    image: "/about-the-designer-Arthur-Zankowicz.jpg",
    linkedin: "https://www.linkedin.com/in/arthur-z-a494a517b/",
    bio: "Over 25 years in sustainable design across construction, fashion, sport, and film. Founder of Pain, Moreno, and 50 Unlimited Co.",
  }
];

/**
 * LEADERSHIP CARDS  
 * 
 * @returns {JSX.Element}
 * Leadership section of the About page. The configurations are mapped into cards that are 
 * set in a grid of 3 columns. 
 */
export default function LeaderCard() {
  return (
    <section className="bg-[var(--dark-blue)] text-[var(--txt-bright)] py-16 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Our <span className="text-[var(--light-blue)]">Leadership</span>
      </h2>
      <div className="grid gap-10">
        {team.map((person, idx) => (
          <div
            key={idx}
            className="bg-[var(--key-card-bg)] rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">{person.name}</h3>
            <p className="text-sm text-[var(--txt-faint-grey)]">{person.title}</p>
            <p className="text-sm mt-4">{person.bio}</p>
            {(person.linkedin &&  <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-[var(--light-blue)] hover:text-[var(--lighter-blue)]"
            >
              <FaLinkedinIn size={20} />
            </a>)}
          </div>
        ))}
      </div>
    </section>
  );
}
