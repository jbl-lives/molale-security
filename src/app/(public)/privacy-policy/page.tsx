import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Molale Security handles information submitted through its website, including Careers applications.",
  alternates: { canonical: "/privacy-policy" },
};

const headingClass = "mt-10 text-xl font-semibold text-slate-950";
const paragraphClass = "mt-3 leading-7 text-slate-600";

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8f692b]">Molale Security Group</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Privacy Policy</h1>
      <p className={paragraphClass}>This draft explains how information is handled when you use the Molale Security website. It is intended to be read with the Protection of Personal Information Act 4 of 2013 (POPIA) and other applicable South African law. Please contact us if you have a question or request about your personal information.</p>

      <h2 className={headingClass}>Who is responsible for your information?</h2>
      <p className={paragraphClass}>Molale Security Group is the responsible party for personal information submitted through this website. Our published contact details are <a className="font-medium text-[#76551f] underline underline-offset-4" href="mailto:info@molalesecurity.com">info@molalesecurity.com</a>, +27 18 477 1412, and No 15 Third Avenue, Vaal Reefs, Orkney. Please address privacy requests to the email above for the attention of the Information Officer.</p>

      <h2 className={headingClass}>Careers applications</h2>
      <p className={paragraphClass}>When you submit a CV, the form asks for your full name, email address, contact number and CV file. The website uses these details to receive and consider your application for recruitment opportunities. The upload code does not save the application fields or CV in the website database. It sends the CV file to the Google Drive folder configured for recruitment. The applicant name is included in the uploaded file name; the email address and phone number are not included in that file name.</p>
      <p className={paragraphClass}>The website server processes the form and file to validate the submission and send the CV to Google Drive. Google processes the file as the Drive service provider. The upload route also requests an access token from Google’s OAuth service. The site’s hosting and serverless-function provider processes requests to display the website and handle the upload; the deployed host is Vercel.</p>

      <h2 className={headingClass}>Other website interactions</h2>
      <p className={paragraphClass}>The website also has a training application flow. It asks for a name and phone number, verifies the phone number through SMSPortal, records application information in the configured application database, and sends a WhatsApp message through Twilio. The application endpoint can store course, name, email if supplied, phone, notes if supplied, status and creation time. The current training form sends the name, phone and selected course. The database provider and its retention settings should be confirmed by Molale Security.</p>
      <p className={paragraphClass}>The contact inquiry form currently collects name, phone number, optional email, selected service and message in the browser. The code logs these form values to the browser console and displays a confirmation alert; it does not currently send the inquiry to a website API or save it through the application. Do not submit sensitive information through that form.</p>

      <h2 className={headingClass}>Cookies, analytics and technical logs</h2>
      <p className={paragraphClass}>A review of the website source found no analytics, advertising pixels or application code that sets cookies or uses browser local storage for tracking. The site uses browser-side navigation and a page progress indicator. External map tiles, a decorative texture image and links to WhatsApp are also present; those providers may receive technical connection information when their content is loaded or their links are used. We have not established the hosting, database or external providers’ log contents or retention periods. The hosting provider or browser may process technical information such as IP address, request details and device/browser data as part of operating the site.</p>

      <h2 className={headingClass}>Access, sharing and security</h2>
      <p className={paragraphClass}>Personal information is made available to service providers involved in the relevant website function, including Google Drive for CV uploads, Vercel for website hosting, and SMSPortal, the application database provider and Twilio for the training application flow. Access to a CV in Drive follows the permissions on the configured recruitment folder. The website code does not establish which people have access to that folder; Molale Security should confirm and limit access to people who need it for recruitment.</p>
      <p className={paragraphClass}>The upload route validates supported file types, checks file content and enforces a 4 MB file limit. It keeps OAuth credentials in server environment variables and its application logs do not intentionally include applicant form values or CV contents. These code-level measures do not establish all safeguards used by the hosting or service providers. No claim is made here about encryption, provider retention, or deletion practices that have not been confirmed.</p>

      <h2 className={headingClass}>Retention</h2>
      <p className={paragraphClass}>The Careers page says CVs are kept on file for suitable opportunities and asks applicants to consent to retention for recruitment consideration. The upload code does not set a retention period or automatically delete CVs. Training application records are stored in the configured database; the code does not define a deletion schedule. Molale Security should confirm retention periods and operational deletion procedures. You may contact us to request deletion or ask how long information is being retained.</p>

      <h2 className={headingClass}>Your rights</h2>
      <p className={paragraphClass}>Subject to applicable law, you may ask to access or correct personal information, object to or request restriction of certain processing, or request deletion. You may also raise a concern with the Information Regulator of South Africa. We may need to verify your identity and consider legal obligations or other lawful grounds before responding. Contact <a className="font-medium text-[#76551f] underline underline-offset-4" href="mailto:info@molalesecurity.com">info@molalesecurity.com</a> for a privacy request.</p>

      <h2 className={headingClass}>Changes and questions</h2>
      <p className={paragraphClass}>We may update this policy when website practices or legal requirements change. The version published on this page applies from its publication date. For privacy questions, contact Molale Security using the details above.</p>
      <p className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-500">Draft for business and legal review.</p>
    </article>
  );
}
