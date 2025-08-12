import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

const team = [
  {
    name: "Abdullah A.",
    title: "Electromechanical Engineering Assistant",
    image: "/AA.jpg",
    linkedin: "https://www.linkedin.com/in/abdullah-amir-m/",
    bio: "Experienced Engineer bringing his experience with electronics and hardware to assist the development of our robots.",
  },
  {
    name: "David H.",
    title: "Artifical Intelligence and Machine Learning Software Engineering Assistant",
    image: "/DH.jpg",
    linkedin: "https://www.linkedin.com/in/ddavid-he/",
    bio: "Integrating AI into our factory and leveraging AI software in marketing to attract new customers and improving customer relationships.",
  },
  {
    name: "Harsharan R.",
    title: "Robotics Software Engineering Assistant",
    image: "/HR.jpg",
    linkedin: "https://www.linkedin.com/in/harsharanr/",
    bio: "Robotics engineer developing the software solutions for our robotics factory. ",
  },
  {
    name: "Jeff L.",
    title: "Chief Information Officer",
    image: "/JL.jpeg",
    linkedin: "https://www.linkedin.com/in/jeff-luo-a8ba80217/",
    bio: "Lead developer on D2M.",
  },
  {
    name: "Khaled A.",
    title: "Reinforcement Learning Software Engineering Assistant",
    image: "/KA.jpg",
    linkedin: "https://www.linkedin.com/in/khaled-yaakoub-agha-b733361a4/",
    bio: "Developing training procedures for the AI models of the factory robots by bringing his experience with robotics and reinforcement learning.",
  },
  {
    name: "Michael D.",
    title: "Robotics Software Engineering Assistant",
    image: "/MD.jpg",
    linkedin: "https://www.linkedin.com/in/michael-denissov/",
    bio: "Software engineer with deep experience with robotics in charge of programming our factory robots.",
  },
  {
    name: "Mustafa H.",
    title: "Robotics Integration",
    image: "/MH.jpg",
    linkedin: "https://www.linkedin.com/in/mustafahamoody/",
    bio: "Robotics engineer integrating the robots into a smooth assembly line process.",
  },
  {
    name: "Shifan H.",
    title: "Software Engineering Assistant",
    image: "/placeholder.png",
    linkedin: "https://www.linkedin.com/in/shifan-he/",
    bio: "Software engineer working on D2M, finance&operations.",
  },
  {
    name: "Yash P.",
    title: "Robotics Software Engineering Assistant",
    image: "/YP.jpg",
    linkedin: "https://www.linkedin.com/in/yash-patel-33276b218/",
    bio: "Robotics engineer with vast experience in robots in a factory setting developing the capabilities of our robots.",
  },
];

export default function TeamCards() {
  return (
    <section className="bg-[#0474BC] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        The Team
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
