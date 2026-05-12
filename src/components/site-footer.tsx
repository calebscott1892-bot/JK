import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-950 px-4 pb-24 pt-12 text-slate-300 sm:px-6 md:pb-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold text-white">{site.legalName}</p>
          <p className="mt-4 max-w-xl text-sm leading-6">
            Campbelltown based plumbing for repairs, maintenance, gas, hot water, renovations, new builds and commercial work across Sydney.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Business Details</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="inline text-slate-400">Director: </dt>
              <dd className="inline">{site.director}</dd>
            </div>
            <div>
              <dt className="inline text-slate-400">ABN: </dt>
              <dd className="inline">{site.abn}</dd>
            </div>
            <div>
              <dt className="inline text-slate-400">Plumbing Licence: </dt>
              <dd className="inline">{site.plumbingLicence}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <div className="mt-4 space-y-3 text-sm">
            <a href={site.phone.href} className="block transition hover:text-white">
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="block transition hover:text-white">
              {site.email}
            </a>
            <p>
              {site.serviceArea}
            </p>
            <p>
              {site.social.facebook}
            </p>
            <a
              href={site.social.instagramUrl}
              className="block transition hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {site.social.instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
