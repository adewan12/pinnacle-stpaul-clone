import Image from "next/image";
import Link from "next/link";
import { schoolInfo } from "@/lib/data";

export default function HeroContent() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      {/* Left – slideshow/hero image */}
      <div className="relative w-full min-h-[320px] lg:min-h-[480px]">
        <Image
          src="/images/hero-slideshow.webp"
          alt="Slideshow Image"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Right – text content */}
      <div className="bg-white px-6 py-8 lg:px-10 flex flex-col justify-center gap-4">
        <p className="font-work-sans font-bold text-pinnacle-navy text-lg leading-snug tracking-wide">
          WELCOME TO PINNACLE MONTESSORI OF ST. PAUL IN WYLIE, TEXAS!
        </p>

        <p className="font-heebo text-body-dark text-sm leading-relaxed">
          Discover a nurturing haven for your little ones at our Wylie Day Care
          School, where safety and cultural respect form the heart of our
          community.
        </p>

        <div className="space-y-1">
          <p className="font-heebo text-sm text-body-dark">
            ✅ Perfect for busy parents seeking a secure, all-day nurturing
            environment!
          </p>
          <p className="font-heebo text-sm text-body-dark">
            ✅ We Offer Exclusive Live Classroom Video Monitoring!
          </p>
        </div>

        <p className="font-work-sans font-bold text-pinnacle-navy text-sm tracking-wide">
          WITH US YOUR PRECIOUS LITTLE ONE WILL FIND:
        </p>

        <ul className="list-disc list-inside space-y-1 text-sm font-heebo text-body-dark">
          <li>All-day care with a safe, secure &amp; loving environment</li>
          <li>Culturally diverse curriculum promoting inclusivity</li>
          <li>Warm, experienced staff dedicated to fostering growth</li>
          <li>Engaging activities designed to spark curiosity and learning</li>
        </ul>

        <p className="font-heebo text-body-dark text-sm font-semibold">
          JOIN OUR FAMILY, WHERE EVERY CHILD IS CHERISHED AND CELEBRATED 💖
        </p>

        {/* Enrollment box */}
        <div className="border-2 border-pinnacle-amber bg-pinnacle-navy/5 rounded p-5 mt-2">
          <h1 className="font-work-sans font-bold text-pinnacle-amber text-xl lg:text-2xl tracking-widest text-center mb-3">
            ENROLLMENTS OPEN FOR 2025
          </h1>
          <div className="text-center space-y-1 mb-4">
            <p className="font-heebo text-sm text-body-dark">
              <Link
                href={`tel:${schoolInfo.phoneTel}`}
                className="hover:text-pinnacle-blue transition-colors"
              >
                For More Information Call Us
              </Link>
            </p>
            <p className="font-heebo font-bold text-pinnacle-navy text-base">
              <Link
                href={`tel:${schoolInfo.phoneTel}`}
                className="hover:text-pinnacle-blue transition-colors"
              >
                📞 {schoolInfo.phoneFormatted}
              </Link>
            </p>
            <p className="font-heebo text-sm text-body-dark">Or Signup Below</p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/student-registration"
              className="bg-pinnacle-navy text-white font-work-sans font-bold text-xs tracking-widest px-8 py-3 hover:bg-pinnacle-blue transition-colors"
            >
              SIGNUP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
