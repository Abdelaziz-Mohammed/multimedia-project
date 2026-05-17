export default function VideoSection() {
  return (
    <section id="video" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/75 backdrop-blur-xl">
            Video Element
          </span>
          <h2 className="mt-4 font-(family-name:--font-calistoga) text-3xl text-white sm:text-4xl">
            Video Element
          </h2>
        </div>

        <div className="rounded-4xl border border-white/10 bg-white/7 p-3 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-2xl">
          <video
            className="aspect-video w-full rounded-3xl bg-black object-cover shadow-2xl shadow-slate-950/35"
            controls
            preload="metadata"
          >
            <source src="/assets/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="px-2 pb-3 pt-5 text-sm leading-7 text-white/65 sm:text-base">
            The HTML5 video element keeps playback native, responsive, and easy
            to use across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
