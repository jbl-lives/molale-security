export const company = {
  name: "Molale Security",
  tagline: "Protecting what matters.",
  founded: 2016,
  hq: "Klerksdorp, North West",
  registration: "PSIRA compliant",
  email: "info@molalesecurity.com",
  phone: "+27 XX XXX XXXX",
};

// src/data/company.ts
export const missionIntro =
  "Molale Security’s mission is to protect people and property through ethical, responsive, and accountable security services—24/7. We do this by aligning four pillars:";

export const missionPillars = [
  {
    title: "1. People",
    desc:
      "We recruit for character, verify credentials, and maintain PSIRA compliance across the company. Officers receive continuous training, site briefings, and health & safety refreshers so they arrive prepared and professional.",
  },
  {
    title: "2. Process",
    desc:
      "We operate with documented SOPs for guarding, access control, alarm monitoring, incident escalation, and post-incident reporting. Clients receive clear SLAs, regular service reviews, and transparent communication via call, email, or WhatsApp.",
  },
  {
    title: "3. Technology",
    desc:
      "Our control room integrates alarm monitoring, GPS-tracked patrols, body-cam or dash-cam evidence (where applicable), and digital incident logs. These tools improve response accuracy, accountability, and audit trails.",
  },
  {
    title: "4. Community & Compliance",
    desc:
      "We participate in local safety initiatives, respect the communities we serve, and follow applicable laws and regulations at all times.",
  },
];


export const vision =
  `Molale Security’s vision is to become the most trusted protection partner in the North West and 
    surrounding provinces—known for rapid response, disciplined execution, and genuine community 
    care. We aim to raise the local standard of security by combining well-trained people, 
    proven procedures, and modern technology into a single, reliable service experience. 
    We see a future where clients—homeowners, businesses, schools, clinics, retail centres, 
    industrial sites, and mining operations—feel protected not only when incidents occur, but
     every day through proactive deterrence, visible presence, and clear communication.`;

export const values = [
  { title: "Integrity", desc: "We act honestly and keep our word—on site and in reporting." },
  { title: "Preparedness", desc: "We train continuously and maintain readiness to respond." },
  { title: "Respect", desc: "We serve with professionalism and treat every client with dignity." },
  { title: "Accountability", desc: "Transparent incident logs, clear SLAs and measurable outcomes." },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  avatar?: string | null; // /public path or external URL; if falsy we render initials
};

export const leadership: TeamMember[] = [
  {
    name: "Kabelo Molale",
    role: "Managing Director",
    bio: "Founder of Molale Security Services.",
    avatar: "/assets/images/people/molale.jpg",
  },
  {
    name: "Naledi M.",
    role: "Head of Operations",
    bio: "Leads control room & field ops; ensures dispatch KPIs and SLAs are met across all shifts.",
    avatar: "/assets/images/people/maletsatsi.jpg",
  },
  {
    name: "Thabiso R.",
    role: "Training & Compliance",
    bio: "Designs officer training, competency refreshers and incident-report standards.",
    avatar: "/assets/images/people/lydia.jpg",
  },
  {
    name: "Lerato P.",
    role: "Client Services",
    bio: "Owns onboarding, service reviews and customer feedback loops.",
    avatar: "/assets/images/people/motlalepule.jpg",
  },
];

export const milestones = [
  { year: 2016, title: "Founded", blurb: "Started as a small guarding team in Klerksdorp." },
  { year: 2018, title: "24/7 Control Room", blurb: "Launched our monitoring and rapid dispatch center." },
  { year: 2021, title: "CCTV & Alarms", blurb: "Added installations, upgrades and maintenance." },
  { year: 2024, title: "Training Academy", blurb: "Formalised officer upskilling and compliance refreshers." },
];

export const stats = [
  { label: "Avg Dispatch Time", value: "≤ 15 min" },
  { label: "Active Clients", value: "300+" },
  { label: "Hours on Duty / month", value: "10,000+" },
  { label: "Response Coverage", value: "25–40 km radius" },
];

export const certifications = [
  { label: "PSIRA Compliant", desc: "Company & officers duly registered" },
  { label: "Incident Reporting", desc: "Standardised logs & audit trails" },
  { label: "First Aid & Fire", desc: "Officers certified where required" },
];
