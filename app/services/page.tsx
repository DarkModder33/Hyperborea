import Nav from '../components/Nav';
import Footer from '../components/Footer';

const offers = [
  {
    title: 'Website rebuild',
    price: 'From $499',
    detail: 'Clean Next.js or static site, mobile-first, contact flow, deployed on Cloudflare.'
  },
  {
    title: 'Device + software repair',
    price: 'From $89',
    detail: 'Phones, PCs, OS rescue, custom installs. Local Greater Philadelphia or remote when possible.'
  },
  {
    title: 'Custom software / automation',
    price: 'From $299',
    detail: 'Scripts, dashboards, internal tools, and workflow automation scoped before work starts.'
  },
  {
    title: 'Retainer',
    price: '$250 / month',
    detail: 'Priority fixes, small updates, and a monthly health check so the site stays live.'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <p className="mb-4 font-mono text-sm text-[#00ff9f]">TECH EXECUTION</p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
          Work that ships.
        </h1>
        <p className="mb-16 max-w-2xl text-xl text-gray-400">
          Elite IT and web execution for people who need a working product, not a pile of demos.
          Clear scope. Clear price. Remote-first.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
              <p className="text-sm text-[#00ff9f]">{item.price}</p>
              <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-gray-400">{item.detail}</p>
            </article>
          ))}
        </div>
        <a
          href="/contact"
          className="mt-12 inline-flex rounded-2xl bg-[#00ff9f] px-8 py-4 font-semibold text-black"
        >
          Request a scope
        </a>
      </section>
      <Footer />
    </main>
  );
}
