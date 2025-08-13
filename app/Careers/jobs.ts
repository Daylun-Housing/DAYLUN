import type { Job } from "./types";

const JOBS: Job[] = [
  {
    id: "robotics-team-lead-001",
    title: "Lead Robotics Engineer",
    department: "Engineering",
    location: "Whitehorse, YT",
    employmentType: "Full-time",
    description:
      "As our Lead Robotics Engineer, you’ll be responsible for leading the design, integration, and deployment of robotic systems across the factory. You’ll help architect a full-stack robotics workflow from motion planning to task execution while working closely with software, mechanical, and factory operations teams.",
    responsibilities: [
      "Build and integrate ROS2 nodes for AMRs, robotic arms, and sensors.",
      "Own perception + control pipelines for tasks like pick-and-place, material transport, and fixture assembly.",
      "Develop task planners and sequencing logic to coordinate multi-robot systems.",
      "Tune motion planning, path following, and safety behaviours for dynamic factory environments.",
      "Drive rapid prototyping and in-factory validation cycles.",
      "Lead and mentor the robotics engineering team, setting technical direction and best practices.",
      "Shape hiring and mentorship as we grow the robotics team.",
    ],
    requirements: [
      "Bachelor’s or Master’s in Mechanical, Mechatronics, Computer, Electrical, or Software Engineering (or related).",
      "2+ years experience working on real-world robotics (industry or internships).",
      "Strong fluency in ROS/ROS 2 and C++ or Python.",
      "Experience with one or more of: Collaborative robot arms, mobile robots, perception, or motion planning.",
      "Proficiency in simulation tools like Isaac Sim and Isaac Lab for testing and reinforcement learning is a plus",
    ],
    applyUrl: "https://airtable.com/appfLsOONQQwlfUDR/pagzZVPQIIj4WN7X3/form",
  },
  {
    id: "robotics-team-lead-contract-001",
    title: "Robotics Engineer",
    department: "Engineering",
    location: "Waterloo, ON",
    employmentType: "Contract",
    description:
      "As our Lead Robotics Engineer, you’ll be responsible for leading the design, integration, and deployment of robotic systems across the factory. You’ll help architect a full-stack robotics workflow from motion planning to task execution while working closely with software, mechanical, and factory operations teams.",
    responsibilities: [
      "Build and integrate ROS2 nodes for AMRs, robotic arms, and sensors.",
      "Own perception + control pipelines for tasks like pick-and-place, material transport, and fixture assembly.",
      "Develop task planners and sequencing logic to coordinate multi-robot systems.",
      "Tune motion planning, path following, and safety behaviours for dynamic factory environments.",
      "Drive rapid prototyping and in-factory validation cycles.",
      "Lead and mentor the robotics engineering team, setting technical direction and best practices.",
      "Shape hiring and mentorship as we grow the robotics team.",
    ],
    requirements: [
      "Bachelor’s or Master’s in Mechanical, Mechatronics, Computer, Electrical, or Software Engineering (or related).",
      "2+ years experience working on real-world robotics (industry or internships).",
      "Strong fluency in ROS/ROS 2 and C++ or Python.",
      "Experience with one or more of: Collaborative robot arms, mobile robots, perception, or motion planning.",
      "Proficiency in simulation tools like Isaac Sim and Isaac Lab for testing and reinforcement learning is a plus",
    ],
    applyUrl: "https://airtable.com/appfLsOONQQwlfUDR/pagzZVPQIIj4WN7X3/form",
  },
    {
    id: "production-manager-001",
    title: "Production Manager",
    department: "Operations",
    location: "Whitehorse, YT",
    employmentType: "Full-time",
    description: "We are seeking a Production / Product Manager to oversee daily operations at our Whitehorse modular panel factory. This role bridges construction knowledge with modern production practices, ensuring that our automated workflows deliver high-quality, on-time output. While you won’t be programming robots, you will work closely with the robotics team to keep production running smoothly, adapt processes, and manage the people, materials, and schedules that keep the factory on track.",
    responsibilities: [
      "Plan and schedule production runs, coordinating with logistics, suppliers, and onsite staff.",
      "Track production data using spreadsheets (Excel, Google Sheets) and basic software tools.",
      "Identify and resolve workflow bottlenecks, escalating technical issues to the robotics team when needed.",
      "Ensure compliance with safety protocols and quality standards.",
      "Manage and train production staff, fostering a safe, efficient, and positive work environment.",
      "Collaborate with leadership to align production capacity with housing delivery goals.",
      "Adapt to new tools, processes, and automation systems as the factory evolves.",
    ],
    requirements: [
      "Experience in construction production, prefabrication, or manufacturing operations.",
      "Strong organizational and problem-solving skills.",
      "Basic computer proficiency (spreadsheets, email, scheduling tools).",
      "Comfort learning and adapting to new technologies, including automated equipment.",
      "Ability to lead teams, manage schedules, and meet deadlines in a fast-paced environment.",
      "Excellent communication skills for coordinating between factory staff, suppliers, and leadership.",
    ],
    applyUrl: "https://airtable.com/appfLsOONQQwlfUDR/pagKvtQiDzenMuEcJ/form",
  },
  {
    id: "sales-manager-001",
    title: "Sales Manager, Go-to-market",
    department: "Product",
    location: "Remote",
    employmentType: "Full-time",
    description: "We are seeking an experienced Sales Manager to lead customer acquisition and sales strategy for Daylun’s automated housing solutions. This role focuses on building relationships with decision-makers in construction, development, and government procurement, while educating them on how modular, automated production can improve project timelines, quality, and cost predictability. You will be the primary driver of sales growth, leveraging your industry network to open doors and your communication skills to close deals. While our headquarters team will support you with technical information, you will own the customer relationship from first contact to signed contract. This role can be remote anywhere in Canada, with occasional travel to Whitehorse and client sites.",
    responsibilities: [
      "Identify and develop new business opportunities with builders, developers, and government agencies.",
      "Leverage existing industry connections to create and expand our customer pipeline.",
      "Present and explain Daylun’s modular panel solutions in a way that resonates with both technical and non-technical stakeholders.",
      "Work closely with leadership to develop pricing models, proposals, and sales strategies.",
      "Negotiate contracts and manage the end-to-end sales process.",
      "Maintain regular communication with customers to ensure satisfaction and identify follow-on opportunities.",
      "Provide market feedback to inform product offerings and production planning.",
    ],
    requirements: [
      "5+ years of experience in construction sales, business development, or related roles.",
      "Established network of industry contacts in residential or commercial construction.",
      "Proven track record of securing and managing large contracts.",
      "Excellent communication, presentation, and negotiation skills.",
      "Ability to work independently, manage your own pipeline, and deliver results.",
      "Proficiency with basic computer tools (email, spreadsheets, CRM systems).",
    ],
    applyUrl: "https://airtable.com/appfLsOONQQwlfUDR/pagYevsCbnEbBWNHV/form",
  },
  {
    id: "diagnostics-software-001",
    title: "Diagnostics Software Engineer",
    department: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    description: "We’re looking for a Remote Diagnostics Engineer to become the first line of software response when something goes wrong on the robot. You’ll know the code base inside out, help triage bugs in real-time, and ensure robots stay online and productive.",
    responsibilities: [
      "Act as the remote “mission control” for deployed robots during production.",
      "Debug live issues: perception failures, control hiccups, task breakdowns, system crashes.",
      "Build diagnostics tooling, dashboards, and remote logging to catch issues early.",
      "Work closely with core engineering to understand and patch code base issues.",
      "Design fallback behaviours or watchdogs to handle edge cases in the field.",
      "Contribute to feature development pre-deployment to stay sharp on architecture.",
      "Document root causes, patching procedures, and help train the next diagnostics engineer.",
    ],
    requirements: [
      "Bachelor’s or Master’s in Mechanical, Mechatronics, Computer, Electrical, or Software Engineering (or related).",
      "1+ years experience working on robotics software or embedded systems.",
      "Strong debugging skills in ROS2, C++, and Python.",
      "Solid grasp of how robot stacks work: sensors, perception, planning, and actuation.",
      "Familiarity with remote troubleshooting: SSH, logging systems, remote service restarts.",
    ],
    applyUrl: "https://airtable.com/appfLsOONQQwlfUDR/paguDIDpG1ysBlPqQ/form",
  },
  {
    id: "create-own-001",
    title: "Create Your Own Job",
    department: "Create your own",
    location: "",
    employmentType: "Full-time",
    description: "At Daylun, we know the right people don’t always fit into a job description and we don’t want that to stop us from working together. If you have skills, experience, or ideas that could help us accelerate automated housing production, we want to hear from you.",
    responsibilities: [
    ],
    requirements: [
    ],
    applyUrl: "https://airtable.com/appfLsOONQQwlfUDR/pag84R2kffZuXh1Fg/form",
  },
  {
    id: "create-own-intern-001",
    title: "Create Your Own Internship",
    department: "Create your own",
    location: "",
    employmentType: "Internship",
    description: "At Daylun, we know the right people don’t always fit into a job description and we don’t want that to stop us from working together. If you have skills, experience, or ideas that could help us accelerate automated housing production, we want to hear from you.",
    responsibilities: [
    ],
    requirements: [
    ],
    applyUrl: "https://airtable.com/appfLsOONQQwlfUDR/pag84R2kffZuXh1Fg/form",
  },
]

export default JOBS;

/* Blank copy for new job postings
  {
    id: "",
    title: "",
    department: "",
    location: "",
    employmentType: "",
    description: "",
    responsibilities: [
      "",
    ],
    requirements: [
      "",
    ],
    applyUrl: "",
  },
  */