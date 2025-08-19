import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

/*
  CONSULTANTS

  Configuration for the consultant section of the About page. 

  name: person name (string)
  title: job title (string)
  image: location of person photo in the public folder (string)
  linkedin: link to linkedin, optional (string)
  bio: biography of the person (string)
*/

const team = [
  {
    name: "Patrick L.",
    title: "Financial Advisor",
    image: "/PL.jpeg",
    linkedin: "https://www.linkedin.com/in/patrick-liu-850575325/",
    bio: "Finance and operations advisor with experience in high-growth situations and international scaling strategies.",
  },
  {
    name: "Michelle Y.",
    title: "AI Software Developer",
    image: "/MY.jpeg",
    linkedin: "https://www.linkedin.com/in/michellejyao/",
    bio: "Consultant on the integration of AI into operations and marketing, focusing on advanced automation with customer engagement and growth.",
  },
  {
    name: "Armaan R.",
    title: "Founding Robotics Software Developer",
    image: "/AR.jpeg",
    linkedin: "https://www.linkedin.com/in/armaanrasheed/",
    bio: "Designs and deploys robotics solutions for manufacturing and automation, working towards efficient, scalable production.",
  },

  {
    name: "Aidan B.",
    title: "Founding Robotics Software Developer",
    image: "/AB.png",
    linkedin: "https://www.linkedin.com/in/bilon/",
    bio: "Manages technical teams and engineering systems. Ensures all design and development efforts meet structural/functional standards.",
  },
];

/**
 * CONSULTANT CARDS
 * @returns {JSX.Element}
 * 
 * Consultant section of the About page. The configurations are mapped into cards that are 
 * set in a grid of 3 columns. 
 */
export default function ConsultantsCards() {
  return (
    <section className="bg-[var(--dark-blue)] text-[var(--txt-bright)] py-16 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Key <span className="text-[var(--light-blue)]">Consultants</span>
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            {(person.linkedin && <a
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
