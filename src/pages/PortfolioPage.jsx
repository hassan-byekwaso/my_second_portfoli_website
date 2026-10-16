import { useMemo, useState } from "react";
import PageHeading from "../components/PageHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data.js";

const filters = ["All", "Websites", "MERN Apps", "Design Concepts"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeading
        eyebrow="Selected work & explorations"
        title="Projects"
        description="Explore a completed full-stack e-commerce app and live website projects, alongside personal application concepts clearly marked as in development."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? "border-cyan-200/40 bg-cyan-200/10 text-cyan-100"
                : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visibleProjects.length} {activeFilter.toLowerCase()} projects
      </p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
