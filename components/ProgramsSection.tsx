import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/data";

export default function ProgramsSection() {
  return (
    <div className="flex justify-center bg-slate-bg py-10 px-4">
      <div className="w-full max-w-screen-xl">
        <h3 className="font-work-sans font-bold text-pinnacle-amber text-3xl text-center mb-8">
          Our Programs
        </h3>

        <div className="flex flex-wrap justify-center gap-5">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={program.href}
              className="group w-[280px] bg-white shadow hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[210px] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Program name button */}
              <div className="bg-pinnacle-navy px-3 py-2">
                <p className="font-work-sans font-bold text-white text-xs tracking-widest text-center">
                  {program.title}
                </p>
              </div>

              {/* Age range */}
              {program.ageRange && (
                <div className="px-3 pt-2">
                  <p className="font-heebo text-xs text-slate-dark font-semibold">
                    {program.ageRange}
                  </p>
                </div>
              )}

              {/* Description */}
              <div className="px-3 pt-1 pb-3 flex-1">
                <p className="font-heebo text-xs text-body-dark leading-relaxed line-clamp-3">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
