export default function PageHeading({ eyebrow = "HASSAN BYEKWASO", title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
        {eyebrow}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
