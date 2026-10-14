import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.16),_transparent_55%),linear-gradient(135deg,#111827,#0f172a)] p-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {project.category}
              </p>
              <p className="mt-3 text-xl font-semibold text-white">{project.title}</p>
              <p className="mt-2 text-sm text-slate-400">{project.status}</p>
            </div>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 text-xs text-slate-200 backdrop-blur-md">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">{project.title}</h2>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} live website`}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-200/40 hover:text-cyan-200"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 text-xs text-slate-500">
          <span>{project.status}</span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-cyan-200 transition hover:text-white"
            >
              Live website <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
