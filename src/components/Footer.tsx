import { Building2, Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const LINKS = {
  Company: ['About Us', 'Our Team', 'Careers', 'Press'],
  Services: ['Buy a Home', 'Sell a Home', 'Rent a Home', 'Property Management'],
  Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
};

const SOCIAL = [Facebook, Twitter, Instagram, Linkedin];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink-900 text-ink-300">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-800/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Newsletter */}
        <div className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              Subscribe To Our Newsletter
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-400">
              For exclusive properties, deals and offers — delivered straight to your inbox. No
              spam, just the homes worth knowing about.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 backdrop-blur transition-colors focus-within:border-brand-400 lg:max-w-md">
              <Mail className="h-5 w-5 shrink-0 text-ink-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-sm text-white placeholder:text-ink-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-200 hover:bg-brand-700 hover:scale-[1.03] active:scale-95"
            >
              Subscribe Now
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.6fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <Building2 className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Sky<span className="text-brand-400">Estate</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Premium real estate for people who care about design, location, and a home that feels
              unmistakably theirs.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIAL.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-300 transition-all duration-200 hover:border-brand-400 hover:bg-brand-600 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-ink-400 transition-colors duration-200 hover:text-brand-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + dark map block */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-400">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-400" />
                +1 (555) 012-3456
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-400" />
                hello@skyestate.com
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                1280 Market Street, Semarang, Indonesia
              </li>
            </ul>

            <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-ink-950 p-4">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="relative flex h-28 items-center justify-center gap-6">
                {[
                  { top: '20%', left: '25%', delay: '0s' },
                  { top: '55%', left: '55%', delay: '0.6s' },
                  { top: '30%', left: '75%', delay: '1.2s' },
                ].map((pin, i) => (
                  <span
                    key={i}
                    className="absolute flex h-3 w-3"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60"
                      style={{ animationDelay: pin.delay }}
                    />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-500 ring-2 ring-brand-300/40" />
                  </span>
                ))}
                <span className="text-xs font-medium text-ink-400">Find us on the map</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright baseline */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-ink-500 sm:text-sm">
            © 2023 Sky Estate. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
