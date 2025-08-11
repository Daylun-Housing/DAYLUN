"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Internship" | "Contract";
  description: string;
  responsibilities: string[];
  requirements: string[];
  applyUrl?: string; // link to Lever/Greenhouse/Ashby or mailto
};

///////////////////////////////////////////////////////////////////////////////
// CAREERS DATA
///////////////////////////////////////////////////////////////////////////////
const JOBS: Job[] = [
  {
    id: "rbt-ml-eng-001",
    title: "Robotics ML Engineer",
    department: "Engineering",
    location: "Toronto, ON (Hybrid)",
    employmentType: "Full-time",
    description:
      "Own perception and controls features for our robotic construction platform. Ship production code that affects real builds.",
    responsibilities: [
      "Design, train, and evaluate ML models for perception and planning",
      "Deploy models to edge devices; monitor performance and reliability",
      "Collaborate with robotics, platform, and product teams",
    ],
    requirements: [
      "2+ years with Python and modern DL frameworks",
      "Experience with ROS/ROS2 and real-time systems",
      "Strong data pipeline and evaluation skills",
    ],
    applyUrl: "mailto:careers@daylun.ca?subject=Application%20-%20Robotics%20ML%20Engineer",
  },
  {
    id: "mech-int-002",
    title: "Mechanical Engineering Intern (Winter/Spring)",
    department: "Engineering",
    location: "Toronto, ON (Onsite)",
    employmentType: "Internship",
    description:
      "Support mechanical design, prototyping, and testing for new automation cells and end effectors.",
    responsibilities: [
      "Create and review CAD for mechanisms and fixtures",
      "Prototype, test, and iterate with cross-functional teams",
      "Document findings and prepare handoff packages",
    ],
    requirements: [
      "Proficiency with a major CAD tool (e.g., SolidWorks, Fusion, NX)",
      "Hands-on prototyping experience",
      "Curiosity and bias to action",
    ],
    applyUrl: "mailto:careers@daylun.ca?subject=Application%20-%20Mechanical%20Engineering%20Intern",
  },
  {
    id: "pm-003",
    title: "Technical Product Manager",
    department: "Product",
    location: "Remote (Canada)",
    employmentType: "Full-time",
    description:
      "Lead roadmap and delivery for core platform capabilities. Align engineering efforts with business impact.",
    responsibilities: [
      "Own roadmap, specs, and release planning",
      "Define success metrics and drive experiments",
      "Partner with Engineering and Ops for execution",
    ],
    requirements: [
      "3+ years in PM or EM with technical background",
      "Strong communication and stakeholder alignment",
      "Data-informed decision making",
    ],
    applyUrl: "mailto:careers@daylun.ca?subject=Application%20-%20Technical%20Product%20Manager",
  },
  {
    id: "elec-eng-004",
    title: "Electrical Engineer",
    department: "Engineering",
    location: "Toronto, ON (Hybrid)",
    employmentType: "Full-time",
    description:
      "Design, prototype, and validate electrical systems for robotic modules and factory automation equipment.",
    responsibilities: [
      "Develop schematics and PCB layouts",
      "Oversee wiring harness design and integration",
      "Collaborate with mechanical and software teams for system bring-up",
    ],
    requirements: [
      "Bachelor in Electrical Engineering or related field",
      "Experience with PCB design tools (Altium, KiCad, etc.)",
      "Familiarity with industrial communication protocols",
    ],
    applyUrl: "mailto:careers@daylun.ca?subject=Application%20-%20Electrical%20Engineer",
  },
  {
    id: "soft-eng-005",
    title: "Full Stack Software Engineer",
    department: "Software",
    location: "Remote (Canada)",
    employmentType: "Full-time",
    description:
      "Build and maintain internal and customer-facing tools that support robotic construction workflows.",
    responsibilities: [
      "Develop web dashboards and APIs for monitoring and control",
      "Integrate cloud-based data pipelines with on-site systems",
      "Write clean, maintainable, and well-tested code",
    ],
    requirements: [
      "Proficiency in TypeScript, Node.js, and React",
      "Experience with cloud services (AWS, GCP, or Azure)",
      "Understanding of REST and GraphQL APIs",
    ],
    applyUrl: "mailto:careers@daylun.ca?subject=Application%20-%20Full%20Stack%20Software%20Engineer",
  },
  {
    id: "ops-coord-006",
    title: "Operations Coordinator",
    department: "Operations",
    location: "Toronto, ON (Onsite)",
    employmentType: "Full-time",
    description:
      "Support daily operations, procurement, and logistics for active construction and R&D projects.",
    responsibilities: [
      "Manage vendor relationships and purchase orders",
      "Coordinate delivery schedules and inventory management",
      "Assist in planning and executing on-site builds",
    ],
    requirements: [
      "Strong organizational and communication skills",
      "Experience with inventory management tools",
      "Ability to work in fast-paced environments",
    ],
    applyUrl: "mailto:careers@daylun.ca?subject=Application%20-%20Operations%20Coordinator",
  },
  {
    id: "hr-gen-007",
    title: "HR Generalist",
    department: "People",
    location: "Toronto, ON (Hybrid)",
    employmentType: "Full-time",
    description:
      "Manage recruitment, onboarding, and employee engagement initiatives across the company.",
    responsibilities: [
      "Coordinate recruitment efforts and candidate pipelines",
      "Lead onboarding sessions and maintain HR records",
      "Assist in developing company culture and engagement programs",
    ],
    requirements: [
      "2+ years in HR or recruitment",
      "Knowledge of Canadian employment law",
      "Strong interpersonal skills",
    ],
    applyUrl: "mailto:careers@daylun.ca?subject=Application%20-%20HR%20Generalist",
  },
];
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// ======== PAGE ========
export default function CareersPage() {
  const [q, setQ] = useState("");
  const [department, setDepartment] = useState<string>("All");
  const [location, setLocation] = useState<string>("All");
  const [employmentType, setEmploymentType] = useState<string>("All");

  const departments = useMemo(
    () => ["All", ...Array.from(new Set(JOBS.map((j) => j.department)))],
    []
  );
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(JOBS.map((j) => j.location)))],
    []
  );
  const employmentTypes = useMemo(
    () => ["All", ...Array.from(new Set(JOBS.map((j) => j.employmentType)))],
    []
  );

  const filtered = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesQ =
        !q ||
        job.title.toLowerCase().includes(q.toLowerCase()) ||
        job.description.toLowerCase().includes(q.toLowerCase()) ||
        job.requirements.join(" ").toLowerCase().includes(q.toLowerCase()) ||
        job.responsibilities.join(" ").toLowerCase().includes(q.toLowerCase());

      const matchesDept = department === "All" || job.department === department;
      const matchesLoc = location === "All" || job.location === location;
      const matchesType =
        employmentType === "All" || job.employmentType === employmentType;

      return matchesQ && matchesDept && matchesLoc && matchesType;
    });
  }, [q, department, location, employmentType]);

  // Group by department for a sectioned look like many career sites
  const grouped = useMemo(() => {
    const map = new Map<string, Job[]>();
    filtered.forEach((j) => {
      const key = j.department;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(j);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div
      className="h-screen overflow-y-auto bg-gray-50"
      suppressHydrationWarning
    >
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="mb-8 text-center">
            <h1 className="text-4xl font-semibold tracking-tight">Careers at DAYLUN</h1>
            <p className="mt-3 text-gray-600">
            Build the future of automated construction. Join a small, focused team shipping real houses.
            </p>
        </section>

        {/* Filters */}
        <section className="mb-8 rounded-2xl border border-blue-100 bg-white p-4 md:p-6 shadow-sm">
            <div className="grid gap-3 md:grid-cols-4">
            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Search
                </label>
                <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search titles, skills, keywords…"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
                </label>
                <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                {departments.map((d) => (
                    <option key={d} value={d}>
                    {d}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
                </label>
                <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                {locations.map((l) => (
                    <option key={l} value={l}>
                    {l}
                    </option>
                ))}
                </select>
            </div>

            <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Employment Type
                </label>
                <select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                {employmentTypes.map((t) => (
                    <option key={t} value={t}>
                    {t}
                    </option>
                ))}
                </select>
            </div>

            <div className="flex items-end">
                <button
                onClick={() => {
                    setQ("");
                    setDepartment("All");
                    setLocation("All");
                    setEmploymentType("All");
                }}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 hover:bg-gray-50"
                >
                Clear filters
                </button>
            </div>
            </div>
        </section>

        {/* Results summary */}
        <div className="mb-3 text-sm text-gray-600">
            Showing <span className="font-semibold">{filtered.length}</span> role{filtered.length === 1 ? "" : "s"}
        </div>

        {/* Jobs grouped by department */}
        {grouped.length === 0 ? (
            <EmptyState />
        ) : (
            <section className="space-y-8">
            {grouped.map(([dept, jobs]) => (
                <div key={dept}>
                <h2 className="mb-3 text-xl font-semibold">{dept}</h2>
                <ul className="space-y-3">
                    {jobs.map((job) => (
                    <li key={job.id}>
                        <JobCard job={job} />
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </section>
        )}

        {/* Footer blurb */}
        <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
            <h3 className="text-lg font-semibold">Don’t see a fit?</h3>
            <p className="mt-1 text-gray-700">
            We’re always meeting great builders. Send a short note and resume to{" "}
            <a href="mailto:careers@daylun.ca" className="text-[#0474BC] underline">
                careers@daylun.ca
            </a>
            .
            </p>
        </section>
        </main>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 md:px-6 py-4 md:py-5 flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <div>
          <h3 className="text-base md:text-lg font-medium">{job.title}</h3>
          <p className="mt-1 text-xs md:text-sm text-gray-600">
            {job.location} • {job.employmentType}
          </p>
        </div>
        <span
          className={`mt-1 inline-block h-5 w-5 rotate-0 border-b-2 border-r-2 border-gray-400 transition-transform ${open ? "rotate-45" : "-rotate-45"}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="px-4 md:px-6 pb-5 md:pb-6 border-t border-gray-100">
          <p className="mt-4 text-gray-700">{job.description}</p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Responsibilities</h4>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Requirements</h4>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={job.applyUrl || "mailto:careers@daylun.ca"}
              className="rounded-xl bg-[#0474BC] px-4 py-2 text-white hover:bg-[#0267a8]"
            >
              Apply now
            </a>
            <Link
              href={`/Careers/${job.id}`}
              className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50"
            >
              View details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
      <p className="text-gray-600">No roles match your filters. Try clearing them or changing search terms.</p>
    </div>
  );
}