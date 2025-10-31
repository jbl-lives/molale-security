"use client";
import Image from "next/image";

type Props = { name: string; src?: string | null; size?: number };

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const letters = (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
  return (letters || "U").toUpperCase();
}
function hashHue(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % 360;
}
function bgForName(name: string) {
  const hue = hashHue(name);
  return `hsl(${hue} 70% 45%)`;
}

export default function AvatarFallback({ name, src, size = 80 }: Props) {
  const dim = `${size}px`;
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: dim, height: dim }}
        loading="lazy"
      />
    );
  }
  return (
    <div
      className="grid place-items-center rounded-full text-white font-semibold"
      style={{ width: dim, height: dim, background: bgForName(name) }}
      aria-hidden="true"
      title={name}
    >
      {getInitials(name)}
    </div>
  );
}
