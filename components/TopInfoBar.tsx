import { schoolInfo } from "@/lib/data";

export default function TopInfoBar() {
  return (
    <div className="bg-pinnacle-navy text-white shadow-2xl h-28 lg:h-12">
      <div className="max-w-screen-xl mx-auto h-full flex flex-row items-center justify-between px-4 gap-4">
        {/* Address */}
        <div className="flex items-center gap-2 min-w-0">
          <svg
            className="w-4 h-4 shrink-0 fill-pinnacle-amber"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          <h1 className="text-xs font-heebo font-normal leading-tight">
            {schoolInfo.name}, {schoolInfo.address}
          </h1>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 shrink-0">
          <svg
            className="w-4 h-4 shrink-0 fill-pinnacle-amber"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <h2 className="text-xs font-heebo font-normal">
            <a href={`tel:${schoolInfo.phoneTel}`} className="hover:text-pinnacle-amber transition-colors">
              {schoolInfo.phone}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
