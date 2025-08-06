import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

const team = [
  {
    name: "Arthur Zankowicz",
    title: "Chief Executive Officer",
    image: "/about-the-designer-Arthur-Zankowicz.jpg",
    linkedin: "https://www.linkedin.com/in/arthur-z-a494a517b/",
    bio: "Over 25 years in sustainable design across construction, fashion, sport, and film. Founder of Pain, Moreno, and 50 Unlimited Co.",
  }
];

export default function LeaderCard() {
  return (
    <section className="bg-[#04012A] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        Our Leadership
      </h2>
      <div className="grid gap-10">
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
