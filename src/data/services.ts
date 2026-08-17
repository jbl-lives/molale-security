export type ServicePoint = {
  title: string;
  description: string;
};

export type ServiceCard = {
  slug: string;
  title: string;
  blurb?: string;
  img: string;
  // Expanded fields:
  introduction: string;
  mainPoints: ServicePoint[];
  process: string[];
};

export const servicesFancy: ServiceCard[] = [
  {
    slug: "armed-response",
    title: "Armed Response",
    img: "/assets/services/armed.webp",
    blurb: "Tactical intervention and 24/7 rapid deployment.",
    introduction: "Molale Security provides a swift, tactical response to alarm activations and emergency calls. Our Armed Response units are strategically stationed to ensure the fastest possible arrival times in Klerksdorp and surrounding areas.",
    mainPoints: [
      { title: "Tactical Superiority", description: "Our officers are trained in advanced tactical movement and high-pressure de-escalation." },
      { title: "24/7 Control Room", description: "Direct link to our state-of-the-art monitoring center for real-time backup dispatch." },
      { title: "SAPS Liaison", description: "Established protocols for seamless coordination with South African Police Services." }
    ],
    process: ["Alarm Signal Received", "Immediate Unit Dispatch", "Perimeter Tactical Assessment", "Secure Site & Incident Report"]
  },
  {
    slug: "physical-guarding",
    title: "Physical Guarding",
    img: "/assets/services/guard.webp",
    blurb: "Static and patrolling vetted security officers.",
    introduction: "Our guarding services provide a visible, professional deterrent for residential estates, retail centers, and industrial sites. We focus on strict access control and vigilant asset protection.",
    mainPoints: [
      { title: "PSIRA Registered", description: "Every guard is fully vetted, registered, and undergoes regular site-specific training." },
      { title: "Access Management", description: "Meticulous visitor logging and vehicle searches to maintain perimeter integrity." },
      { title: "Shift Management", description: "Digital patrol tracking ensures guards remain active and alert throughout their tour of duty." }
    ],
    process: ["Site Risk Assessment", "Post Order Development", "Guard Deployment", "Supervisory Site Visits"]
  },
  {
    slug: "vip-protection",
    title: "VIP Protection",
    img: "/assets/services/vip.jpg",
    blurb: "Discreet close protection and secure transit.",
    introduction: "Elite protection services for high-net-worth individuals, executives, and public figures. We prioritize discretion while maintaining an uncompromising safety perimeter.",
    mainPoints: [
      { title: "Close Protection", description: "Highly trained CPOs (Close Protection Officers) for one-on-one personal safety." },
      { title: "Advance Scouting", description: "Route planning and venue sweeps are conducted before the client arrives." },
      { title: "Secure Transit", description: "Advanced driving techniques to ensure safe passage through high-risk zones." }
    ],
    process: ["Threat Analysis", "Itinerary Planning", "Security Detail Briefing", "Discreet Execution"]
  },
  {
    slug: "cctv-alarms",
    title: "CCTV & Alarms",
    img: "/assets/services/cam.webp",
    blurb: "Smart surveillance and integrated detection systems.",
    introduction: "Leverage technology to secure your perimeter. We install and maintain sophisticated electronic security systems that act as your eyes when you aren't there.",
    mainPoints: [
      { title: "Remote Viewing", description: "Monitor your home or business from your smartphone anywhere in the world." },
      { title: "Smart Detection", description: "AI-powered cameras that can distinguish between animals, vehicles, and human intruders." },
      { title: "Technical Support", description: "Dedicated maintenance teams to ensure your system never goes offline." }
    ],
    process: ["Perimeter Consultation", "System Design", "Professional Installation", "Handover & User Training"]
  },
  {
    slug: "screening",
    title: "Screening",
    img: "/assets/services/screening.webp",
    blurb: "Vetting, background checks, and access control.",
    introduction: "Mitigate internal risk through rigorous screening and vetting processes. We ensure that the people entering your site are exactly who they claim to be.",
    mainPoints: [
      { title: "Criminal Record Checks", description: "Direct access to databases for rapid employee and contractor vetting." },
      { title: "Credential Verification", description: "Validation of IDs, driver's licenses, and professional certifications." },
      { title: "Industrial Screening", description: "Ideal for mining and high-value logistics sites where trust is paramount." }
    ],
    process: ["Information Gathering", "Database Cross-Referencing", "Verification Reporting", "Final Clearance Audit"]
  },
  {
    slug: "private-investigations",
    title: "Private Investigations",
    img: "/assets/services/investigate.webp",
    blurb: "Evidence gathering and professional surveillance.",
    introduction: "Our investigations unit handles sensitive cases with absolute confidentiality. We provide clear, admissible evidence for corporate or private matters.",
    mainPoints: [
      { title: "Discreet Surveillance", description: "Professional observation using high-tech equipment for photographic evidence." },
      { title: "Fraud Investigation", description: "Identifying internal theft, corporate espionage, or insurance fraud." },
      { title: "Legal Readiness", description: "Reports are compiled to a standard ready for legal counsel or disciplinary hearings." }
    ],
    process: ["Case Briefing", "Field Intelligence", "Evidence Collection", "Comprehensive Final Report"]
  }
];
