import Link from "next/link";
import { schoolInfo } from "@/lib/data";

export default function ContactSection() {
  return (
    <div className="flex justify-center bg-white py-10 px-4">
      <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact info */}
        <div className="space-y-3">
          <h3 className="font-work-sans font-bold text-pinnacle-amber text-2xl lg:text-3xl">
            {schoolInfo.name}
          </h3>
          <p className="font-heebo text-body-dark text-sm">
            We are conveniently located at:
          </p>
          <h3 className="font-work-sans font-bold text-pinnacle-amber text-xl">
            {schoolInfo.address}
          </h3>

          <div>
            <h3 className="font-work-sans font-bold text-pinnacle-amber text-base mb-1">
              Email:
            </h3>
            <div className="space-y-1">
              {schoolInfo.emails.map((email) => (
                <div key={email}>
                  <Link
                    href={`mailto:${email}`}
                    className="font-heebo text-sm text-pinnacle-blue hover:underline"
                  >
                    {email}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <h3 className="font-work-sans font-bold text-pinnacle-amber text-base">
            Call Us:{" "}
            <Link
              href={`tel:${schoolInfo.phoneTel}`}
              className="text-pinnacle-blue hover:underline"
            >
              {schoolInfo.phoneFormatted}
            </Link>
          </h3>

          <div>
            <h3 className="font-work-sans font-bold text-pinnacle-amber text-base mb-2">
              Follow Us:
            </h3>
            <div className="flex items-center gap-3">
              <Link
                href={schoolInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pinnacle-navy text-white font-heebo text-xs px-3 py-1 hover:bg-pinnacle-blue transition-colors"
              >
                Facebook
              </Link>
              <span className="text-gray-400 font-heebo">||</span>
              <Link
                href={schoolInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white font-heebo text-xs px-3 py-1 hover:bg-red-700 transition-colors"
              >
                YouTube
              </Link>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-[350px] lg:h-[400px]">
          <iframe
            src={schoolInfo.mapEmbed}
            className="w-full h-full border-0"
            title="Pinnacle Montessori of St. Paul location map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
