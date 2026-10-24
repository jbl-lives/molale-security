import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Molale Security website and its online forms.",
  alternates: { canonical: "/terms-of-service" },
};

const headingClass = "mt-10 text-xl font-semibold text-slate-950";
const paragraphClass = "mt-3 leading-7 text-slate-600";

export default function TermsOfServicePage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">Molale Security Group</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Terms of Service</h1>
      <p className={paragraphClass}>These draft terms cover use of the Molale Security website and its online forms. By using the website, you agree to use it lawfully and in line with these terms. These terms do not replace any separate written agreement for security services or training.</p>

      <h2 className={headingClass}>Acceptable use</h2>
      <p className={paragraphClass}>You may use the website to learn about Molale Security, make an inquiry, or submit an application through the relevant form. Do not use the website to break the law, interfere with its operation, attempt unauthorized access, distribute malicious code, or submit content that infringes another person’s rights.</p>

      <h2 className={headingClass}>Information you submit</h2>
      <p className={paragraphClass}>You are responsible for providing information that is accurate to the best of your knowledge and for having the right to submit any CV or other material you provide. Submitting a CV or inquiry does not guarantee an interview, employment, admission to a course, or the provision of services. Application handling is described in our <a className="font-medium text-blue-700 underline underline-offset-4" href="/privacy-policy">Privacy Policy</a>.</p>

      <h2 className={headingClass}>Website content and intellectual property</h2>
      <p className={paragraphClass}>Website text, design, images, logos and other materials may be protected by intellectual property rights. You may view and use them for personal, non-commercial reference. Do not reproduce, adapt, distribute or commercially use material without permission from the relevant rights holder, except where the law allows. Molale Security should confirm ownership and licensing details for all published content before these terms are finalized.</p>

      <h2 className={headingClass}>External services and links</h2>
      <p className={paragraphClass}>The website links to or uses third-party services and content, including Google Drive for CV uploads, SMSPortal and Twilio for parts of the training application flow, map tiles, and WhatsApp links. Those services are governed by their own terms and privacy practices. Molale Security does not control external websites and is not responsible for their content or availability. Links are provided for convenience and do not by themselves imply endorsement.</p>

      <h2 className={headingClass}>Availability and changes</h2>
      <p className={paragraphClass}>We aim to keep the website available and current, but pages or features may occasionally be unavailable, changed or removed. Online forms depend on the availability of the website and relevant third-party services. If a form does not work, contact us using the details below.</p>

      <h2 className={headingClass}>Responsibility and limitations</h2>
      <p className={paragraphClass}>Website information is provided for general information and is not a substitute for a tailored quotation, written service agreement, or professional advice. Nothing in these terms excludes or limits a right or liability that cannot lawfully be excluded or limited under South African law. Molale Security should obtain legal review of any additional limitation of liability before adding one.</p>

      <h2 className={headingClass}>South African law and contact</h2>
      <p className={paragraphClass}>These terms are intended to be interpreted under the laws of the Republic of South Africa, subject to applicable consumer protection and other mandatory legal rights. For questions about the website or these terms, contact <a className="font-medium text-blue-700 underline underline-offset-4" href="mailto:info@molalesecurity.com">info@molalesecurity.com</a> or call +27 18 477 1412. Our published address is No 15 Third Avenue, Vaal Reefs, Orkney.</p>

      <p className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-500">Draft for business and legal review.</p>
    </article>
  );
}
