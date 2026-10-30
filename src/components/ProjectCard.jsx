import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const fallbackImage = "/images/project-placeholder.svg";

export default function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSource = imageFailed
    ? fallbackImage
    : project.image || fallbackImage;

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={imageSource}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
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
              aria-label={
                project.linkLabel
                  ? `${project.linkLabel}: ${project.title}`
                  : `Open ${project.title} live website`
              }
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
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-200/40 hover:text-white"
            >
              <Github size={14} /> GitHub Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
