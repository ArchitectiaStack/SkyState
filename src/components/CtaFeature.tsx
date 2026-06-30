import { ArrowRight, CheckCircle2 } from 'lucide-react';

const POINTS = ['Trusted by 5,000+ families', 'Award-winning design team', 'End-to-end concierge'];

export default function CtaFeature() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              Our Promise
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem]">
              We are ready to make your <span className="text-brand-600">Dream</span> come true
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500">
              From the first conversation to the moment you turn the key, our team handles every
              detail with care. Tell us what home means to you — we'll take care of the rest.
            </p>

            <ul className="mt-7 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium text-ink-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                  {p}
                </li>
              ))}
            </ul>

            <button className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-glow transition-all duration-200 hover:bg-brand-700 hover:scale-[1.03] active:scale-95">
              See more
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right — overlapping images */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-ink-200/60 shadow-card">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Tall modern apartment building"
                  className="h-[440px] w-full object-cover sm:h-[520px]"
                  loading="lazy"
                />
              </div>

              {/* Overlapping polaroid card */}
              <div className="absolute -bottom-8 -left-4 w-44 rounded-2xl border-4 border-white bg-white p-2 shadow-card sm:-left-8 sm:w-52 animate-float">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blue-accented building balcony detail"
                    className="h-32 w-full object-cover sm:h-36"
                    loading="lazy"
                  />
                </div>
                <div className="px-1 pt-2 pb-1 text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-ink-700">
                    Sky Residence
                  </span>
                </div>
              </div>

              {/* Floating stat chip */}
              <div className="absolute -right-3 top-8 rounded-2xl border border-ink-200/70 bg-white/95 px-5 py-3 shadow-card backdrop-blur animate-float [animation-delay:1.2s]">
                <div className="text-2xl font-extrabold text-brand-600">15+</div>
                <div className="text-[11px] font-medium uppercase tracking-wide text-ink-500">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
