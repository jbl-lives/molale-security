export type ServiceCard = {
  slug: string;
  title: string;
  blurb?: string;
  img: string; // path in /public (recommended) or external URL
};

export const servicesFancy: ServiceCard[] = [
  { slug: "armed-response",         title: "Armed Response",         img: "/assets/services/armed.jpg" },
  { slug: "physical-guarding",      title: "Physical Guarding",      img: "/assets/services/guarding.webp" },
  { slug: "vip-protection",         title: "VIP Protection",         img: "/assets/services/vip.jpg" },
  { slug: "cctv-alarms",            title: "CCTV & Alarms",          img: "/assets/services/camera.jpg" },
  { slug: "screening",              title: "Screening",              img: "/assets/services/screening2.jpg" },
  { slug: "private-investigations", title: "Private Investigations", img: "/assets/services/investigations.jpg" },

  
];
