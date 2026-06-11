"use client";

import { useSyncExternalStore } from "react";

type QuoteRequestFormProps = {
  email: string;
  services: readonly string[];
};

const cardClassName =
  "rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 shadow-2xl shadow-black/20 sm:p-7";

const fieldClassName =
  "min-h-12 rounded-lg border border-slate-300 bg-[#eef2f6] px-4 text-base font-normal text-navy-950 outline-none transition focus:border-plumbing-blue focus:ring-4 focus:ring-blue-100";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function QuoteRequestForm({ email, services }: QuoteRequestFormProps) {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!isHydrated) {
    return <div className={`${cardClassName} min-h-[560px]`} aria-hidden="true" />;
  }

  return (
    <form
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      autoComplete="off"
      className={cardClassName}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-navy-950">Request a quote</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Share the basics and JK Plumbing Solutions can follow up with a practical next step.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2 text-sm font-semibold text-navy-950">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            className={fieldClassName}
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2 text-sm font-semibold text-navy-950">
          <label htmlFor="contact-phone">Phone</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClassName}
            placeholder="Your phone number"
          />
        </div>
        <div className="grid gap-2 text-sm font-semibold text-navy-950">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="off"
            data-1p-ignore="true"
            data-form-type="other"
            data-lpignore="true"
            className={fieldClassName}
            placeholder="you@example.com"
          />
        </div>
        <div className="grid gap-2 text-sm font-semibold text-navy-950">
          <label htmlFor="contact-suburb">Suburb</label>
          <input
            id="contact-suburb"
            name="suburb"
            autoComplete="address-level2"
            className={fieldClassName}
            placeholder="Job suburb"
          />
        </div>
        <div className="grid gap-2 text-sm font-semibold text-navy-950 sm:col-span-2">
          <label htmlFor="contact-service">Service needed</label>
          <select
            id="contact-service"
            name="service"
            className={fieldClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 grid gap-2 text-sm font-semibold text-navy-950">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="rounded-lg border border-slate-300 bg-[#eef2f6] px-4 py-3 text-base font-normal text-navy-950 outline-none transition focus:border-plumbing-blue focus:ring-4 focus:ring-blue-100"
          placeholder="Tell us what is happening, where the job is located, and when you need help."
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-navy-950 px-5 py-3 text-base font-semibold text-white transition hover:bg-charcoal-900 sm:w-auto"
      >
        Send job details
      </button>
    </form>
  );
}
