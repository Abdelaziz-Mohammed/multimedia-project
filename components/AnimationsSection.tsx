export default function AnimationsSection() {
  return (
    <section id="animations" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/75 backdrop-blur-xl">
            Animations
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-calistoga)] text-3xl text-white sm:text-4xl">
            Animations
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-2xl lg:col-span-5">
            <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl animate-glow-pulse" />
            <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                  Floating card
                </p>
                <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 text-white shadow-xl shadow-slate-950/20 animate-float-slow">
                  <p className="text-lg font-medium leading-8 text-white/90">
                    Motion can be subtle and still feel modern when it supports
                    the structure of the page.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
                >
                  Bouncing Button
                </button>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 animate-bounce-soft">
                  Hover to see depth
                </span>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/75 to-slate-900/60 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.28)] backdrop-blur-2xl lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-[280px] items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="relative h-56 w-56 rounded-full border border-white/10 bg-[conic-gradient(from_180deg,_#22d3ee,_#6366f1,_#f472b6,_#22d3ee)] p-3 animate-spin-slow">
                  <div className="absolute inset-10 rounded-full bg-slate-950/95 shadow-inner shadow-cyan-500/10" />
                  <div className="absolute inset-[4.5rem] rounded-full border border-cyan-300/30 bg-cyan-400/20 animate-pulse-soft" />
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200/75">
                    Rotating gradient circle
                  </p>
                  <p className="mt-3 text-lg font-medium text-white/90">
                    A bright, looping motion element gives the page visual
                    rhythm.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/75">
                      Pulsing element
                    </p>
                    <div className="mt-4 h-14 w-14 rounded-full bg-emerald-400/60 shadow-lg shadow-emerald-500/30 animate-pulse-soft" />
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-200/75">
                      Hover scaling cards
                    </p>
                    <div className="mt-4 grid gap-3">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-sm text-white/75 transition-transform duration-300 hover:scale-105">
                        Soft motion
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 text-sm text-white/75 transition-transform duration-300 hover:scale-105">
                        Clear feedback
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
