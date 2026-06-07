import Link from "next/link";
import Image from "next/image";
import { schoolInfo, corporateInfo, quickLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-footer-navy text-white">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 – School info */}
          <div className="space-y-2">
            <p className="font-work-sans font-bold text-pinnacle-amber text-base tracking-widest">
              {schoolInfo.name}
            </p>
            <p className="font-heebo text-muted-text text-xs">Address:</p>
            <p className="font-heebo text-white text-sm">{schoolInfo.addressLine1}</p>
            <p className="font-heebo text-white text-sm">{schoolInfo.addressLine2}</p>
            <p className="font-heebo text-muted-text text-xs">
              Hours: {schoolInfo.hours}
            </p>
            <p className="font-heebo text-sm">
              <span className="text-muted-text">Call Us: </span>
              <Link
                href={`tel:${schoolInfo.phoneTel}`}
                className="text-white hover:text-pinnacle-amber transition-colors"
              >
                {schoolInfo.phoneFormatted}
              </Link>
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={schoolInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-[#1877f2] w-8 h-8 flex items-center justify-center rounded hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </Link>
              <Link
                href={schoolInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="bg-black w-8 h-8 flex items-center justify-center rounded hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2 – Corporate office */}
          <div className="space-y-2">
            <p className="font-work-sans font-bold text-pinnacle-amber text-base tracking-widest">
              {corporateInfo.name}
            </p>
            <p className="font-heebo text-muted-text text-xs">Address:</p>
            <p className="font-heebo text-white text-sm">{corporateInfo.address}</p>
            <p className="font-heebo text-white text-sm">{corporateInfo.city}</p>
            <p className="font-heebo text-muted-text text-xs">
              Hours: {corporateInfo.hours}
            </p>
            <p className="font-heebo text-sm">
              <span className="text-muted-text">Call Us: </span>
              <Link
                href={`tel:${corporateInfo.phoneTel}`}
                className="text-white hover:text-pinnacle-amber transition-colors"
              >
                {corporateInfo.phone}
              </Link>
            </p>
          </div>

          {/* Column 3 – Quick links + badge */}
          <div className="space-y-2">
            <p className="font-work-sans font-bold text-pinnacle-amber text-base tracking-widest">
              Quick Links
            </p>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <svg
                    className="w-3 h-3 fill-pinnacle-amber shrink-0"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    href={link.href}
                    className="font-heebo text-sm text-white hover:text-pinnacle-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Franchise badge */}
            <div className="pt-4">
              <Image
                src="/images/footer-top-100.webp"
                alt="Image of Franchise Connect Top 100"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-dark mx-4" />

      {/* Non-discrimination statement */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <p className="font-heebo text-muted-text text-xs leading-relaxed text-center">
          The Pinnacle Montessori School is committed to ensuring that its
          services are provided in a non-discriminatory manner without regard to
          race, color, religious creed, disability, handicap, ancestry, national
          origin, age, sex, or limited English proficiency.
        </p>
      </div>
    </footer>
  );
}
