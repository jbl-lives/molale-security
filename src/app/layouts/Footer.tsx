import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-gray-900">Molale Security</h4>
          <p className="mt-2 text-sm text-gray-600">Orkney • Klerksdorp, North West</p>
          <p className="text-sm text-gray-600">Phone: +27 XX XXX XXXX</p>
          <p className="text-sm text-gray-600">Email: info@molalesecurity.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Services</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            <li><Link href="/services/armed-response">Armed Response</Link></li>
            <li><Link href="/services/physical-guarding">Physical Guarding</Link></li>
            <li><Link href="/services/cctv-alarms">CCTV & Alarms</Link></li>
            <li><Link href="/services/vip-protection">VIP Protection</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/locations/orkney">Orkney</Link></li>
            <li><Link href="/locations/klerksdorp">Klerksdorp</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Molale Security. All rights reserved.
      </div>
    </footer>
  );
}
