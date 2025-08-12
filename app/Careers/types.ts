export interface Job {
  id: string;
  title: string;
  department: "Engineering" | "Product" | "Software" | "Operations" | "People";
  location: string;
  employmentType: "Full-time" | "Part-time" | "Internship" | "Contract";
  description: string;
  responsibilities: string[];
  requirements: string[];
  applyUrl?: string; // link to Airtable form that is referenced in NoSQL database
}