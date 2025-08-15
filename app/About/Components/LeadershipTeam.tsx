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
    bio: `Over 25 years in sustainable design across construction, fashion, sport, and film. Founder of Pain, Moreno, and 50 Unlimited Co.
          Arthur now turns his experience in sustainable fashion to construction, which drives Daylun's pioneering approach in construction.`,
  },
  /*{
    name: "Janey Shin",
    title: "Co-Founder",
    image: "/janeyshin.jpg",
    linkedin: "https://www.linkedin.com/in/janeyshin",
    bio: `Co-Founder of Daylun, with 20+ years of experience in healthcare and life sciences data, driving innovation through analytics. She has
          led multinational pharma companies in pioneering approaches and influenced government policy.`,
  },
  {
    name: "Elmu Hernandez",
    title: "Bim Modelling",
    image: "/placeholder.png",
    bio: `With over 25+ years of experience in 3D modelling and Rivet, Elmu has delivered high-quality solutions across the globe, including in
          Europe, Asia, and North America. He now contributes his innovative and precise engineer to Daylun.`,
  },
  {
    name: "Dr. Beck Lee",
    title: "Chemical Engineer",
    image: "/placeholder.png",
    bio: `Dr. Lee is a leading expert in chemistry and green product innovation, specializing in sustainability. He has collaborated with top sports
        brands to develop eco-friendly solutions and is a professor at Xiamen University.`,
  },*/
  {
    name: "Chris St. Jacques",
    title: "Project Manager",
    image: "/placeholder.png",
    bio: `Chris brings 15 years of experience in project and supply chain management, with a strong focus on efficiency and execution. Based in Southeast
          Asia, he oversees Daylun's international projects with precision and dedication. `,
  },
  /*{
    name: "Karl Bruce",
    title: "Sales Manager",
    image: "/karlbruce.jpg",
    linkedin: "https://www.linkedin.com/in/connectwithkarlbruce",
    bio: `With 15+ years of experience in the Canadian Construction landscape, our Sales Manager has a deep understanding of the industry. He leverages this
          understanding to drive growth and forge strong client relationships.`,
  },
  {
    name: "Peter Rupert",
    title: "Chief Technology Officer",
    image: "/placeholder.png",
    bio: `An Aeronautical and Mechanical Engineer specializing in Computer-Aided Engineering who has collaborated with Arthur Zankowicz in materials
          development, his knowledge of materials is invaluable in research and development, as well as in using AI and automation to optimize factory operations.`,
  }*/
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
      <div className="grid grid-cols-3 gap-10">
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
