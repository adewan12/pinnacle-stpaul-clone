import Link from "next/link";
import Image from "next/image";
import { schoolInfo } from "@/lib/data";

const ctaButtons = [
  { label: "STUDENT SIGN UP", href: "/student-registration", primary: true },
  { label: "CALL US", href: `tel:${schoolInfo.phoneTel}`, primary: false },
  { label: "SCHEDULE A TOUR", href: "/schedule-a-tour", primary: true },
  { label: "360 VIRTUAL TOUR", href: "/virtual-tour-360", primary: false },
];

export default function HeaderCTA() {
  return (
    <div className="bg-white mt-2 p-2 tracking-widest">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-2">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="/">
            <Image
              src="/images/logo-st-paul.webp"
              alt="School Logo Image of Pinnacle Montessori of St Paul, Wylie, Texas"
              width={400}
              height={120}
              className="h-[80px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
          {ctaButtons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={`px-3 py-2 text-[11px] font-work-sans font-bold tracking-widest transition-colors border ${
                btn.primary
                  ? "bg-pinnacle-navy text-white border-pinnacle-navy hover:bg-pinnacle-blue"
                  : "bg-white text-pinnacle-navy border-pinnacle-navy hover:bg-pinnacle-navy hover:text-white"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
