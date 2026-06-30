import { BedDouble, Bath, DoorOpen, MapPin, ArrowRight } from 'lucide-react';

const PROPERTIES = [
  {
    title: 'Best Property One',
    desc: 'A serene minimalist retreat framed by floor-to-ceiling glass and warm oak interiors.',
    price: '$95,000',
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900',
    meta: [
      { icon: DoorOpen, label: '3 Rooms' },
      { icon: Bath, label: '2 Bathrooms' },
      { icon: BedDouble, label: '3 Bedrooms' },
      { icon: MapPin, label: 'Morenco, LA' },
    ],
  },
  {
    title: 'Best Property Two',
    desc: 'Contemporary architecture with open-plan living and a sun-drenched private terrace.',
    price: '$120,000',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900',
    meta: [
      { icon: DoorOpen, label: '4 Rooms' },
      { icon: Bath, label: '3 Bathrooms' },
      { icon: BedDouble, label: '4 Bedrooms' },
      { icon: MapPin, label: 'Verona, LA' },
    ],
  },
  {
    title: 'Best Property Three',
    desc: 'An architectural statement — clean lines, double-height ceilings, and curated landscape.',
    price: '$185,000',
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=900',
    meta: [
      { icon: DoorOpen, label: '5 Rooms' },
      { icon: Bath, label: '3 Bathrooms' },
      { icon: BedDouble, label: '4 Bedrooms' },
      { icon: MapPin, label: 'Hillcrest, LA' },
    ],
  },
];

export default function Properties() {
  return (
    <section id="product" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            Featured Listings
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Best Properties Available
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Hand-picked homes that represent the very best of modern living — each one vetted for
            design, location, and lasting value.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600 backdrop-blur">
                  For Sale
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.desc}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-ink-100 pt-5">
                  {p.meta.map((m) => (
                    <div key={m.label} className="flex items-center gap-2 text-sm text-ink-600">
                      <m.icon className="h-4 w-4 text-brand-600" />
                      <span className="font-medium">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] font-medium uppercase tracking-wide text-ink-400">
                      Price
                    </span>
                    <span className="text-xl font-extrabold text-ink-900">{p.price}</span>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-brand-700 hover:scale-105 active:scale-95">
                    See more
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
