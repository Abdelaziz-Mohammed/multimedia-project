export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.18),_transparent_24%),radial-gradient(circle_at_80%_25%,_rgba(34,197,94,0.14),_transparent_22%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl animate-glow-pulse" />
      <div className="absolute right-8 top-32 -z-10 h-56 w-56 rounded-full bg-fuchsia-400/15 blur-3xl animate-drift" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-cyan-100/80 backdrop-blur-xl">
            App Router multimedia showcase
          </div>
          <h1 className="font-[family-name:var(--font-calistoga)] text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Welcome to Our Multimedia Project
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Exploring Text, Images, Animations, and Video Elements
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#text"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Explore Sections
            </a>
            <a
              href="#video"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Watch Video
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-8 top-12 h-28 w-28 rounded-full bg-sky-400/20 blur-2xl animate-pulse-soft" />
          <div className="absolute right-2 top-0 h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl animate-float" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5 text-white/80 shadow-xl shadow-slate-950/30">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/75">
                  Text
                </p>
                <p className="mt-4 text-lg font-medium leading-7">
                  Styled, structured content with emphasis, hierarchy, and
                  clarity.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 p-5 text-white shadow-xl shadow-cyan-950/20">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Motion
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="h-10 w-2 rounded-full bg-white/70 animate-bounce-soft" />
                  <span className="h-16 w-2 rounded-full bg-white/50 animate-bounce-soft" />
                  <span className="h-12 w-2 rounded-full bg-white/65 animate-bounce-soft" />
                  <span className="h-20 w-2 rounded-full bg-white/55 animate-bounce-soft" />
                </div>
              </div>
              <div className="sm:col-span-2 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 text-white/80">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200/75">
                      Images
                    </p>
                    <p className="mt-3 max-w-md text-base leading-7">
                      Responsive media cards, auto-playing slider behavior, and
                      clean glassmorphism treatment.
                    </p>
                  </div>
                  <div className="h-16 w-16 rounded-full border border-cyan-300/30 bg-[conic-gradient(from_90deg,_#22d3ee,_#6366f1,_#ec4899,_#22d3ee)] p-1 animate-spin-slow">
                    <div className="h-full w-full rounded-full bg-slate-950/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
