"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { programs } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

type ContactFormState = {
  parentName: string;
  studentName: string;
  classLevel: string;
  interestedProgram: string;
  phoneNumber: string;
  message: string;
};

const initialState: ContactFormState = {
  parentName: "",
  studentName: "",
  classLevel: "",
  interestedProgram: "",
  phoneNumber: "",
  message: ""
};

const inputClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ContactFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Assalamualaikum, I want to contact Iqra Angels Learning Academy.",
      "",
      `Parent Name: ${formData.parentName}`,
      `Student Name: ${formData.studentName}`,
      `Class/Level: ${formData.classLevel}`,
      `Interested Program: ${formData.interestedProgram}`,
      `Phone Number: ${formData.phoneNumber}`,
      `Message: ${formData.message || "No additional message"}`
    ].join("\n");

    setWhatsappUrl(createWhatsAppLink(message));
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-bold text-brand-navy">
            Parent Name
            <input
              required
              value={formData.parentName}
              onChange={(event) => updateField("parentName", event.target.value)}
              className={inputClass}
              placeholder="Parent or guardian name"
              autoComplete="name"
            />
          </label>
          <label className="text-sm font-bold text-brand-navy">
            Student Name
            <input
              required
              value={formData.studentName}
              onChange={(event) => updateField("studentName", event.target.value)}
              className={inputClass}
              placeholder="Student name"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-bold text-brand-navy">
            Class/Level
            <select
              required
              value={formData.classLevel}
              onChange={(event) => updateField("classLevel", event.target.value)}
              className={inputClass}
            >
              <option value="">Select class or level</option>
              <option>Junior Classes</option>
              <option>Class 1 to 5</option>
              <option>Class 6 to 8</option>
              <option>Class 9 & 10</option>
              <option>1st Year & 2nd Year</option>
            </select>
          </label>
          <label className="text-sm font-bold text-brand-navy">
            Interested Program
            <select
              required
              value={formData.interestedProgram}
              onChange={(event) => updateField("interestedProgram", event.target.value)}
              className={inputClass}
            >
              <option value="">Select a program</option>
              {programs.map((program) => (
                <option key={program.slug}>{program.title}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="text-sm font-bold text-brand-navy">
          Phone Number
          <input
            required
            value={formData.phoneNumber}
            onChange={(event) => updateField("phoneNumber", event.target.value)}
            className={inputClass}
            placeholder="+92..."
            autoComplete="tel"
          />
        </label>

        <label className="text-sm font-bold text-brand-navy">
          Message
          <textarea
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`${inputClass} min-h-32 resize-y`}
            placeholder="Share any details or questions"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
        >
          <Send aria-hidden="true" className="h-4 w-4" />
          Submit Contact Details
        </button>
      </form>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-brand-gold/50 bg-brand-goldSoft p-5">
          <p className="font-bold text-brand-navy">Your details are ready to send.</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Continue on WhatsApp to share the enrollment inquiry with Iqra Angels Learning Academy.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-extrabold text-white transition hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Continue on WhatsApp
          </a>
        </div>
      ) : null}
    </div>
  );
}
