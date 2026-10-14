import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import PageHeading from "../components/PageHeading.jsx";
import { profile } from "../data.js";

const contactDetails = [
  {
    label: "Address",
    value: profile.location,
    href: "https://maps.google.com/?q=Langata+Nairobi+Kenya",
    icon: MapPin,
  },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}`, icon: Phone },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
];

export default function ContactPage() {
  const [submission, setSubmission] = useState({ status: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmission({ status: "sending", message: "" });

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        },
      );
      const result = await response.json();

      if (!response.ok || !(result.success === true || result.success === "true")) {
        throw new Error(
          typeof result.message === "string"
            ? result.message
            : "Your message could not be sent. Please email me directly.",
        );
      }

      form.reset();
      setSubmission({
        status: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? `${error.message} You can also email ${profile.email} directly.`
            : `A network error prevented the message from sending. Please email ${profile.email} directly.`,
      });
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeading
        title="Get in touch"
        description="Let's talk about your website, language, design, or digital support needs."
      />

      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-4">
          {contactDetails.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Address" ? "_blank" : undefined}
              rel={label === "Address" ? "noreferrer" : undefined}
              className="glass-card flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-200">
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-slate-500">{label}</span>
                <span className="mt-1 block break-words text-sm font-medium text-slate-100">
                  {value}
                </span>
              </span>
            </a>
          ))}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <p className="text-sm font-medium text-slate-200">Prefer email?</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              You can also write directly to{" "}
              <a
                href={`mailto:${profile.email}`}
                className="break-all text-cyan-200 underline decoration-cyan-200/30 underline-offset-4"
              >
                {profile.email}
              </a>
              .
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 sm:p-8">
          <input
            type="hidden"
            name="_subject"
            value="New portfolio contact message"
          />
          <input type="hidden" name="_template" value="table" />
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-company">Leave this field empty</label>
            <input
              type="text"
              id="contact-company"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm text-slate-300">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="form-field"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm text-slate-300">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-field"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-subject" className="mb-2 block text-sm text-slate-300">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                className="form-field"
                placeholder="What would you like to discuss?"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                required
                className="form-field resize-y"
                placeholder="Tell me a little about what you need..."
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submission.status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
              >
                <Send size={16} />
                {submission.status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p
                className={`mt-4 text-sm ${
                  submission.status === "error"
                    ? "text-rose-300"
                    : submission.status === "success"
                      ? "text-emerald-300"
                      : "text-slate-500"
                }`}
                role="status"
                aria-live="polite"
              >
                {submission.message ||
                  "Messages are sent securely through FormSubmit to my Gmail. A first-time sender may need to confirm the FormSubmit activation email."}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
