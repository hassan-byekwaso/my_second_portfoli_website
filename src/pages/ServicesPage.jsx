import {
  ArrowRight,
  Code2,
  Languages,
  Laptop,
  Megaphone,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading.jsx";
import { services } from "../data.js";

const icons = {
  code: Code2,
  languages: Languages,
  wrench: Wrench,
  panels: PanelsTopLeft,
  laptop: Laptop,
  megaphone: Megaphone,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeading
        title="Services"
        description="Thoughtful digital services for people and small businesses — from responsive websites to language and everyday ICT support."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon];
          return (
            <article
              key={service.title}
              className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-200 transition group-hover:border-cyan-200/30">
                  <Icon size={21} />
                </div>
                <span className="text-xs font-medium tracking-[0.15em] text-slate-600">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-6 text-lg font-semibold text-white">{service.title}</h2>
              <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-white"
              >
                Discuss this service <ArrowRight size={15} />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="glass-card mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="text-xl font-semibold text-white">Need a tailored solution?</h2>
          <p className="mt-2 text-sm text-slate-400">
            Share a little about what you need and we can take it from there.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Get in touch <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
