import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-8">
      <div className="rounded-xl border border-[var(--color-border)] p-6">
        <h1 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Molale Security
        </h1>
        <p className="mt-2 opacity-80">Protecting what matters.</p>
        <button className="mt-6 rounded-lg px-4 py-2 text-white"
                style={{ background: "var(--color-primary)" }}>
          Get a Quote
        </button>
      </div>
    </main>
  );
}
