import { site } from '../../lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-sm text-white/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <p className="text-white">{site.brand}</p>
          <p className="mt-2">{site.region}</p>
        </div>
        <div className="space-y-2">
          <a className="block hover:text-[#00ff9f]" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="block hover:text-[#00ff9f]" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {site.socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-[#00ff9f]">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
