export default function MonitoringSection() {
  return (
    <div className="flex flex-col w-full md:flex-row justify-center items-stretch">
      {/* Text content */}
      <div className="flex-1 bg-white px-8 py-10 lg:px-12 flex flex-col gap-4 justify-center max-w-2xl">
        <h3 className="font-work-sans font-bold text-pinnacle-amber text-2xl lg:text-3xl leading-tight">
          OUR EXCLUSIVE LIVE CLASSROOM VIDEO MONITORING
        </h3>

        <div>
          <h3 className="font-work-sans font-bold text-pinnacle-amber text-xl mb-2">
            REASSURANCE:
          </h3>
          <p className="font-heebo text-body-dark text-sm leading-relaxed">
            Discover the joy of seeing your child&apos;s daily adventures in
            activities, making friends, and developing skills through vivid
            visual experiences.
          </p>
        </div>

        <div>
          <h3 className="font-work-sans font-bold text-pinnacle-amber text-xl mb-2">
            REINFORCEMENT:
          </h3>
          <p className="font-heebo text-body-dark text-sm leading-relaxed">
            Pre-schoolers adore the spotlight! Keeping up with daily activities
            on your adventures together is a wonderful way to dive into your
            little one&apos;s expanding world of learning.
          </p>
        </div>
      </div>

      {/* Iframe / virtual tour */}
      <div className="flex-1 min-h-[320px] bg-slate-bg flex items-center justify-center">
        <iframe
          src="https://www.pinnaclemontessori360.com/stpaul/"
          className="w-full h-full min-h-[320px]"
          title="360 Virtual Tour of Pinnacle Montessori"
          loading="lazy"
        />
      </div>
    </div>
  );
}
