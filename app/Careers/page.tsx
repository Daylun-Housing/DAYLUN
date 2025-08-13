"use client";

import { useMemo, useState, useEffect } from "react";
import Header from "../Common/Header";
import Link from "next/link";
import type { Job } from "./types";
import JOBS_DATA from "./jobs"; // default export from jobs.ts

// Use the imported data, typed
const JOBS: Job[] = JOBS_DATA;

export default function CareersPage() {
  const [q, setQ] = useState("");
  const [department, setDepartment] = useState<string>("All");
  const [location, setLocation] = useState<string>("All");
  const [employmentType, setEmploymentType] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
    <div className="h-screen overflow-y-auto bg-gray-50" suppressHydrationWarning>
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Careers at{" "}
            <span className="bg-gradient-to-r from-[#0474BC] to-blue-400 text-transparent bg-clip-text">
              DAYLUN
            </span>
          </h1>
          <div className="h-12" />
          <div className="mt-3 h-1 w-24 mx-auto bg-[#0474BC] rounded-full" />
          <div className="h-4" />
          <p className="mt-5 text-lg md:text-xl text-gray-500 leading-relaxed">
            Join a small, focused team shipping{" "}
            <span className="font-semibold text-[#0474BC]">real houses</span>.
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
          Showing <span className="font-semibold">{filtered.length}</span> role
          {filtered.length === 1 ? "" : "s"}
        </div>

        {/* Jobs grouped by department */}
        {JOBS.length === 0 ? (
          <NoOpenRoles />
        ) : grouped.length === 0 ? (
          <EmptyState />
        ) : (
          <section className="space-y-8">
            {grouped.map(([dept, jobs]) => (
              <div key={dept}>
                <h2 className="mb-3 text-xl font-semibold">{dept}</h2>
                <ul className="space-y-3">
                  {jobs.map((job) => (
                    <li key={job.id}>
                      <JobCard job={job} onViewDetails={() => setSelectedJob(job)} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Footer blurb */}
        {JOBS.length > 0 && (
          <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
            <h3 className="text-lg font-semibold">Don’t see a fit?</h3>
            <p className="mt-1 text-gray-700">
              We’re always meeting great builders. Send a short note and resume to{" "}
              <a href="mailto:info@daylun.ca" className="text-[#0474BC] underline">
                info@daylun.ca
              </a>
              .
            </p>
          </section>
        )}
      </main>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

function JobCard({ job, onViewDetails }: { job: Job; onViewDetails: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
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
          className={`mt-1 inline-block h-5 w-5 rotate-0 border-b-2 border-r-2 border-gray-400 transition-transform ${
            open ? "rotate-45" : "-rotate-45"
          }`}
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
            <button
              onClick={onViewDetails}
              className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50"
            >
              View details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function JobModal({ job, onClose }: { job: Job; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="job-title"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative z-[101] w-[95vw] max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-xl">
        <div className="sticky top-0 flex items-center justify-between border-b px-5 py-3 bg-white/90 backdrop-blur">
          <h3 id="job-title" className="text-lg font-semibold">
            {job.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md border px-2 py-1 hover:bg-gray-50"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          <p className="text-sm text-gray-600">
            {job.location} • {job.employmentType} • {job.department}
          </p>

          <p className="mt-4 text-gray-800">{job.description}</p>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Responsibilities</h4>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                {job.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Requirements</h4>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
                {job.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href={job.applyUrl || "mailto:careers@daylun.ca"}
              className="rounded-xl bg-[#0474BC] px-4 py-2 text-white hover:bg-[#0267a8]"
            >
              Apply now
            </a>
            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
      <p className="text-gray-600">
        No roles match your filters. Try clearing them or changing search terms.
      </p>
    </div>
  );
}

function NoOpenRoles() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-10 text-center">
      <h3 className="text-lg font-semibold text-gray-900">No open roles right now</h3>
      <p className="mt-2 text-gray-700">
        We’re not listing any positions at the moment. If you’re interested in working at Daylun,
        please email{" "}
        <a href="mailto:info@daylun.ca?subject=General%20Interest%20-%20Daylun" className="text-[#0474BC] underline">
          info@daylun.ca
        </a>{" "}
        and check back here soon for new openings.
      </p>
    </div>
  );
}