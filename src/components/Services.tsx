import { MessageSquare, ShieldCheck, Award, Users, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: MessageSquare,
    title: 'Communication',
    desc: 'Clear, honest conversations at every step so you always know where your journey stands.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    desc: 'Trusted processes and verified listings that protect your investment from end to end.',
  },
  {
    icon: Award,
    title: 'Quality First',
    desc: 'Every property is curated against a strict standard — we never compromise on craft.',
  },
  {
    icon: Users,
    title: 'Families',
    desc: 'Homes designed for real life, with spaces that grow alongside the people you love.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            What we do
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            What we do?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            We blend design sensibility with deep market knowledge to guide you through every
            decision — from first viewing to final keys.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="relative mt-6 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
              <div className="relative mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
