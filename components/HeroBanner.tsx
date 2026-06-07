import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/images/banner.webp"
        alt="Image of Pinnacle Montessori of St. Paul | Wylie Montessori School | Montessori Childcare in Wylie Texas"
        width={1500}
        height={500}
        className="w-full object-cover h-[200px] sm:h-[280px] lg:h-[340px]"
        priority
      />
      {/* Amber overlay strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-pinnacle-amber/90 py-2 px-4">
        <p className="text-center text-pinnacle-navy font-work-sans font-bold text-sm sm:text-base tracking-widest uppercase">
          Providing the Best Training and Values
        </p>
      </div>
    </div>
  );
}
