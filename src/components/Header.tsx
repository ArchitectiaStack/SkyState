import { useEffect, useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';

const NAV_LINKS = ['Home', 'Product', 'Services', 'Contact', 'About Us', 'Support'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-soft border-b border-ink-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
            <Building2 className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-ink-900">
            Sky<span className="text-brand-600">Estate</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
                i === 0 ? 'text-brand-600' : 'text-ink-600 hover:text-brand-600'
              }`}
            >
              {link}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-600 transition-transform duration-300 ${
                  i === 0 ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors duration-200 hover:text-brand-600">
            Sign In
          </button>
          <button className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-brand-700 hover:scale-[1.03] active:scale-95">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 text-ink-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink-200/60 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                i === 0 ? 'bg-brand-50 text-brand-600' : 'text-ink-600 hover:bg-ink-50'
              }`}
            >
              {link}
            </a>
          ))}
          <div className="mt-2 flex gap-3">
            <button className="flex-1 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700">
              Sign In
            </button>
            <button className="flex-1 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
