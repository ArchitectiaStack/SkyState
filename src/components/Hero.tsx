import { useState } from 'react';
import { MapPin, Ruler, Search, ChevronDown, Star } from 'lucide-react';

const TABS = ['Buy', 'Sell', 'Rent'] as const;

const METRICS = [
  { value: '9K+', label: 'Premium Properties', highlight: false },
  { value: '5K+', label: 'Happy Customers', highlight: true },
  { value: '58+', label: 'Awards Winning', highlight: false },
];

function RotatingBadge() {
  const text = "THIS DON'T MISS TO APPRECIATE • ";
  const chars = text.split('');
  return (
    <div className="relative h-32 w-32 sm:h-36 sm:w-36">
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <path id="circlePath" d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
          </defs>
          <text className="fill-ink-700 text-[15px] font-semibold uppercase tracking-[0.18em]">
            <textPath href="#circlePath" startOffset="0">
              {chars.join('')}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow">
          <Star className="h-6 w-6 fill-white" />
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Buy');

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute -right-40 -top-20 h-[480px] w-[480px] rounded-full bg-brand-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Left column */}
          <div className="relative animate-fade-up">
            <div className="absolute -left-4 -top-24 sm:-left-10 sm:-top-28">
              <RotatingBadge />
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              Let's Find a Home That's <span className="text-brand-600">Perfect</span> for you
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Each property design has its own meaning and we are ready to help you to get a property
              according to your taste. Let's discuss soon.
            </p>

            {/* Search widget */}
            <div className="mt-8 rounded-3xl border border-ink-200/70 bg-white p-2 shadow-card">
              <div className="flex gap-1 px-2 pt-2">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-brand-600 text-white shadow-glow'
                        : 'text-ink-500 hover:text-brand-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="mt-2 grid gap-3 p-3 sm:grid-cols-[1fr_1fr_auto]">
                <label className="group flex items-center gap-3 rounded-2xl border border-ink-200 bg-ink-50/60 px-4 py-3 transition-colors duration-200 hover:border-brand-300">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-600" />
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                      Location
                    </span>
                    <span className="block truncate text-sm font-semibold text-ink-800">
                      Semarang, Indonesia
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-y-0.5" />
                </label>

                <label className="group flex items-center gap-3 rounded-2xl border border-ink-200 bg-ink-50/60 px-4 py-3 transition-colors duration-200 hover:border-brand-300">
                  <Ruler className="h-5 w-5 shrink-0 text-brand-600" />
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                      Size
                    </span>
                    <span className="block truncate text-sm font-semibold text-ink-800">
                      Medium, Minimalist
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-y-0.5" />
                </label>

                <button className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-200 hover:bg-brand-700 hover:scale-[1.02] active:scale-95 sm:col-span-1">
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className={`rounded-2xl border p-4 text-center transition-all duration-200 hover:-translate-y-0.5 ${
                    m.highlight
                      ? 'border-brand-200 bg-brand-50 shadow-soft'
                      : 'border-ink-200/70 bg-white shadow-soft'
                  }`}
                >
                  <div
                    className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${
                      m.highlight ? 'text-brand-700' : 'text-ink-900'
                    }`}
                  >
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-ink-500 sm:text-[13px]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — arched hero image */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-t-[12rem] border border-ink-200/60 shadow-card">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern minimalist luxury white house with glass railings"
                  className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[580px]"
                  loading="eager"
                />
              </div>

              {/* Floating rating card */}
              <div className="absolute -left-4 bottom-8 hidden rounded-2xl border border-ink-200/70 bg-white/95 p-4 shadow-card backdrop-blur sm:flex sm:items-center sm:gap-3 animate-float">
                <div className="flex -space-x-2">
                  {[
                    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80',
                    'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80',
                    'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=80',
                  ].map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-ink-700">2,500+ Reviews</div>
                </div>
              </div>

              {/* Floating price tag */}
              <div className="absolute -right-3 top-10 rounded-2xl bg-ink-900 px-5 py-3 text-white shadow-card animate-float [animation-delay:1.5s]">
                <div className="text-[11px] font-medium uppercase tracking-wide text-ink-300">
                  Starting from
                </div>
                <div className="text-lg font-extrabold">$95,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
