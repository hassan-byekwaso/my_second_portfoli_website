import { ArrowUpRight, BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading.jsx";
import { profile, projects, skillGroups } from "../data.js";

const education = [
  {
    title: "Bachelor of Arts in French with Information Technology",
    organization: "Maseno University",
    date: "2020–2024",
    description: "Combined French language studies with information technology and digital skills.",
  },
  {
    title: "Web Design & Development Training",
    organization: "Finn Church Aid (FCA)",
    date: "2025",
    description:
      "Training in functional website development, UI/UX principles, responsive web design, and website deployment.",
  },
];

const experience = [
  {
    title: "French-English Translation & Language Placement",
    organization: "Language Connections Center · Nairobi, Kenya",
    date: "6 May – 26 July 2024",
    description: [
      "Completed a 12-week placement involving French-English translation and language support.",
      "Worked with commercial, legal, and academic materials, including translation, proofreading, and interpreting-related tasks.",
      "Gained exposure to computer-assisted translation tools, including SDL Trados and other translation-aided tools.",
    ],
  },
  {
    title: "Cyber Café & Digital Services Assistant",
    organization: "Cyber café / digital services · Kenya",
    date: "Approximately 4 years of experience",
    description: [
      "Supported customers with online applications, document preparation, digital forms, and general computer-related services.",
      "Assisted users with computer applications and routine digital tasks, providing practical guidance and customer support.",
      "Handled document and online-service requests with attention to accuracy, clear communication, and timely completion.",
    ],
  },
];

function TimelineCard({ item, icon: Icon, children }) {
  return (
    <article className="glass-card rounded-2xl p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-200">
            <Icon size={18} />
          </div>
          <div>
            <h3 className="font-semibold leading-6 text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
          </div>
        </div>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
          {item.date}
        </span>
      </div>
      {children}
    </article>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeading
        eyebrow="Experience, education & skills"
        title="Résumé"
        description="A multidisciplinary background spanning web development, French-English language work, and hands-on digital services."
      />

      <section className="grid items-start gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="space-y-5">
          <div className="glass-card rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Profile
            </p>
            <h2 className="mt-3 text-xl font-semibold text-white">{profile.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Multidisciplinary graduate in French with IT, with web design and
              development training and practical experience in cyber café and
              digital services. Interested in contributing to web development,
              ICT support, multilingual communication, and digital services.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin size={16} className="text-cyan-200" /> {profile.location}
              </p>
              <a
                href={`tel:${profile.phoneHref}`}
                className="block text-slate-300 transition hover:text-cyan-200"
              >
                {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="block break-all text-slate-300 transition hover:text-cyan-200"
              >
                {profile.email}
              </a>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
            >
              Contact me <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="mb-5 text-xl font-semibold text-white">Education &amp; training</h2>
            <div className="space-y-4">
              {education.map((item) => (
                <TimelineCard key={item.title} item={item} icon={GraduationCap}>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{item.description}</p>
                </TimelineCard>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-5">
          <section className="glass-card rounded-2xl p-6">
            <h2 className="mb-5 text-xl font-semibold text-white">Professional experience</h2>
            <div className="space-y-4">
              {experience.map((item) => (
                <TimelineCard key={item.title} item={item} icon={BriefcaseBusiness}>
                  <ul className="mt-4 space-y-2.5 pl-4 text-sm leading-6 text-slate-400 marker:text-cyan-200">
                    {item.description.map((point) => (
                      <li key={point} className="list-disc">
                        {point}
                      </li>
                    ))}
                  </ul>
                </TimelineCard>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="mb-5 text-xl font-semibold text-white">Technical skills &amp; tools</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className={`rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 ${
                    group.title === "Languages" ? "md:col-span-2" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold text-cyan-100">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.08] bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Language proficiency levels have not been specified.
            </p>
          </section>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Selected technical projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Personal projects &amp; concepts
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects
            .filter((project) => project.category !== "Websites")
            .map((project) => (
              <article key={project.title} className="glass-card rounded-2xl p-5">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-200">
                  <BriefcaseBusiness size={18} />
                </div>
                <h3 className="font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-500">{project.status}</p>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
