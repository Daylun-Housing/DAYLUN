import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

const team = [
  {
    name: "Arthur Zankowicz",
    title: "Chief Executive Officer",
    image: "/about-the-designer-Arthur-Zankowicz.jpg",
    linkedin: "https://www.linkedin.com/in/arthur-z-a494a517b/",
    bio: "Over 25 years in sustainable design across construction, fashion, sport, and film. Founder of Pain, Moreno, and 50 Unlimited Co.",
  },
  {
    name: "Patrick L.",
    title: "Chief Financial Officer",
    image: "/PL.jpeg",
    linkedin: "https://www.linkedin.com/in/patrick-liu-850575325/",
    bio: "Finance and operations lead with experience in high-growth situations and international scaling strategies.",
  },
  {
    name: "Jeff L.",
    title: "Chief Information Officer",
    image: "/JL.jpeg",
    linkedin: "https://www.linkedin.com/in/jeff-luo-a8ba80217/",
    bio: "Oversees the company’s digital infrastructure.",
  },
  {
    name: "Michelle Y.",
    title: "Director of AI, Operations, Marketing",
    image: "/MY.jpeg",
    linkedin: "https://www.linkedin.com/in/michellejyao/",
    bio: "Leads the integration of AI into operations and marketing, focusing on advanced automation with customer engagement and growth.",
  },
  {
    name: "Armaan R.",
    title: "Founding Robotics Engineer",
    image: "/AR.jpeg",
    linkedin: "https://www.linkedin.com/in/armaanrasheed/",
    bio: "Designs and deploys robotics solutions for manufacturing and automation, working towards efficient, scalable production.",
  },

  {
    name: "Aidan B.",
    title: "Director of Engineering",
    image: "/AB.jpeg",
    linkedin: "https://www.linkedin.com/in/bilon/",
    bio: "Manages technical teams and engineering systems. Ensures all design and development efforts meet structural/functional standards.",
  },
];

export default function TeamCards() {
  return (
    <section className="bg-[#04012A] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Our Leadership Team
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {team.map((person, idx) => (
          <div
            key={idx}
            className="bg-[#0A083D] rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
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
            <p className="text-sm text-[#87a0b4]">{person.title}</p>
            <p className="text-sm mt-4">{person.bio}</p>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-[#0474BC] hover:text-[#0f99e0]"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
