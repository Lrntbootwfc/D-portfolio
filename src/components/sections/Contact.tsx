import React, { useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  Phone,
  AlertCircle,
  Github,
  Linkedin,
  Info,
} from 'lucide-react';
import { profile } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';

const PROJECT_TYPE_OPTIONS = [
  'Business website',
  'E-commerce website',
  'Landing page',
  'Portfolio website',
  'Web application',
  'Website redesign',
  'Data analysis',
  'Power BI / Tableau dashboard',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
];

type FormData = {
  name: string;
  contactMethod: 'email' | 'phone';
  email: string;
  phone: string;
  projectType: string;
  description: string;
  budget: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactMethod: 'email',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'dev_notice' | 'submitted'
  >('idle');
  const [submittedPayload, setSubmittedPayload] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (formData.contactMethod === 'email') {
      if (!formData.email.trim()) {
        newErrors.email = 'Please provide your email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    } else if (formData.contactMethod === 'phone') {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Please provide your phone number.';
      } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid phone number (min 7 digits).';
      }
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select the type of project you want to build.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Submission handler abstraction:
   * Connect to Formspree, Resend, or custom backend API endpoint when ready.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Capture payload for abstraction
    setSubmittedPayload({ ...formData });

    // Show honest development-mode notice since no third-party email service is currently connected
    setSubmissionStatus('dev_notice');
  };

  return (
    <section id="contact" className="section-padding relative w-full max-w-full overflow-hidden border-t border-white/[0.07]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-0 bottom-[-10%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-accent-400/8 blur-[120px] max-w-full" aria-hidden />
      <div className="pointer-events-none absolute left-0 top-[20%] h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-accent-500/8 blur-[120px] max-w-full" aria-hidden />

      <div className="container-content relative w-full min-w-0">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ============================================================
              LEFT COLUMN: HEADLINE, COPY & DIRECT CHANNELS (5 cols)
              ============================================================ */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <Reveal className="flex flex-col gap-6">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-paper-200/60 px-3.5 py-1.5 backdrop-blur-md w-fit shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-aurora shadow-[0_0_6px_#4F6BFF]" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                  START A PROJECT
                </span>
              </div>

              <h2 className="font-display text-display-xl font-700 text-ink-900 leading-tight text-balance">
                Have something you want to build?
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-ink-600 text-pretty font-300">
                Tell me what you're working on. Let's figure out how to turn it into something useful.
              </p>

              {/* Quick direct CTA */}
              <div className="pt-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-aurora px-7 py-3.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-95 shadow-[0_4px_20px_rgba(79,107,255,0.35)] hover:shadow-[0_4px_28px_rgba(79,107,255,0.5)] cursor-pointer"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Contact Channels Card */}
              <div className="mt-8 flex flex-col gap-4 rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Direct Channels
                </span>

                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-paper-200/40 backdrop-blur-md p-4 transition-all hover:border-accent-400/40 hover:bg-paper-200/70"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-400/15 text-accent-400 border border-accent-400/30 shadow-xs">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono font-medium text-ink-500">Email</span>
                        <span className="text-sm font-semibold text-ink-900">Send an Email</span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-400" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/in/${profile.linkedinUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-paper-200/40 backdrop-blur-md p-4 transition-all hover:border-accent-500/40 hover:bg-paper-200/70"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500/15 text-accent-500 border border-accent-500/30">
                        <Linkedin className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono font-medium text-ink-500">LinkedIn</span>
                        <span className="text-sm font-semibold text-ink-900">
                          Connect on LinkedIn
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={`https://github.com/${profile.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-paper-200/40 backdrop-blur-md p-4 transition-all hover:border-accent-400/40 hover:bg-paper-200/70"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-paper-300/60 text-ink-800 border border-white/[0.09]">
                        <Github className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono font-medium text-ink-500">GitHub</span>
                        <span className="text-sm font-semibold text-ink-900">
                          View GitHub Profile
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-400" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ============================================================
              RIGHT COLUMN: INTERACTIVE ENQUIRY FORM (7 cols)
              ============================================================ */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <div className="border-b border-white/[0.07] pb-5 mb-6">
                  <h3 className="font-display text-display-md font-700 text-ink-900">
                    Project Enquiry
                  </h3>
                  <p className="mt-1 text-sm text-ink-600 font-300">
                    Fill out the fields below for project estimation and timeline scoping.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  {/* FIELD 1: Your name * */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-name"
                      className="font-mono text-xs font-semibold text-ink-800 uppercase tracking-wider"
                    >
                      Your name <span className="text-accent-400">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full rounded-2xl border bg-paper-200/40 px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-white/[0.08] focus:border-accent-400'
                      }`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* FIELD 2: How can I reach you? (Toggle + Conditional input) */}
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-xs font-semibold text-ink-800 uppercase tracking-wider">
                      How can I reach you? <span className="text-accent-400">*</span>
                    </label>

                    {/* Method Selector Pills */}
                    <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Contact method">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, contactMethod: 'email' });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-4 text-xs font-mono font-semibold transition-all ${
                          formData.contactMethod === 'email'
                            ? 'border-accent-400 bg-accent-400/15 text-accent-400 shadow-xs'
                            : 'border-white/[0.08] bg-paper-200/40 text-ink-700 hover:border-white/[0.18]'
                        }`}
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Email
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, contactMethod: 'phone' });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-4 text-xs font-mono font-semibold transition-all ${
                          formData.contactMethod === 'phone'
                            ? 'border-accent-400 bg-accent-400/15 text-accent-400 shadow-xs'
                            : 'border-white/[0.08] bg-paper-200/40 text-ink-700 hover:border-white/[0.18]'
                        }`}
                      >
                        <Phone className="h-3.5 w-3.5" />
                        Phone number
                      </button>
                    </div>

                    {/* Conditional Email / Phone Input */}
                    {formData.contactMethod === 'email' ? (
                      <div className="flex flex-col gap-1.5 pt-1">
                        <input
                          id="client-email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full rounded-2xl border bg-paper-200/40 px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-white/[0.08] focus:border-accent-400'
                          }`}
                        />
                        {errors.email && (
                          <span className="flex items-center gap-1 text-xs text-red-500 font-medium">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1.5 pt-1">
                        <input
                          id="client-phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          className={`w-full rounded-2xl border bg-paper-200/40 px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none transition-colors ${
                            errors.phone
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-white/[0.08] focus:border-accent-400'
                          }`}
                        />
                        {errors.phone && (
                          <span className="flex items-center gap-1 text-xs text-red-500 font-medium">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* FIELD 3: What do you want to build? (Dropdown) */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="project-type"
                      className="font-mono text-xs font-semibold text-ink-800 uppercase tracking-wider"
                    >
                      What do you want to build? <span className="text-accent-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="project-type"
                        required
                        value={formData.projectType}
                        onChange={(e) => {
                          setFormData({ ...formData, projectType: e.target.value });
                          if (errors.projectType) setErrors({ ...errors, projectType: undefined });
                        }}
                        className={`w-full appearance-none rounded-2xl border bg-paper-200/40 px-4 py-3.5 text-sm text-ink-900 focus:outline-none transition-colors ${
                          errors.projectType
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/[0.08] focus:border-accent-400'
                        } ${!formData.projectType ? 'text-ink-500' : ''}`}
                      >
                        <option value="" disabled>
                          Select project type...
                        </option>
                        {PROJECT_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="text-ink-900 bg-paper-100">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-ink-500 font-mono text-xs">
                        ▼
                      </div>
                    </div>
                    {errors.projectType && (
                      <span className="flex items-center gap-1 text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.projectType}
                      </span>
                    )}
                  </div>

                  {/* FIELD 4: Tell me a little about it (Large Textarea) */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="project-description"
                      className="font-mono text-xs font-semibold text-ink-800 uppercase tracking-wider"
                    >
                      Tell me a little about it
                    </label>
                    <textarea
                      id="project-description"
                      rows={4}
                      placeholder="Briefly describe your goals, required features, or reference links..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full rounded-2xl border border-white/[0.08] bg-paper-200/40 px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-500 focus:border-accent-400 focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* FIELD 5: What budget do you have in mind? (Dropdown) */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="project-budget"
                      className="font-mono text-xs font-semibold text-ink-800 uppercase tracking-wider"
                    >
                     What budget do you have in mind?
                    </label>
                    <div className="relative">
                      <select
                        id="project-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className={`w-full appearance-none rounded-2xl border border-white/[0.08] bg-paper-200/40 px-4 py-3.5 text-sm text-ink-900 focus:border-accent-400 focus:outline-none transition-colors ${
                          !formData.budget ? 'text-ink-500' : ''
                        }`}
                      >
                        <option value="">Select budget range (optional)...</option>
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="text-ink-900 bg-paper-100">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-ink-500 font-mono text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-aurora px-6 py-4 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-95 cursor-pointer"
                    >
                      <span>Submit enquiry</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  {/* HONEST DEVELOPMENT NOTICE / INTEGRATION HOOK */}
                  {submissionStatus === 'dev_notice' && (
                    <div className="rounded-2xl border border-white/[0.09] bg-paper-200/50 backdrop-blur-md p-5 text-ink-800 flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 shrink-0 text-accent-400 mt-0.5" />
                        <div className="flex flex-col gap-1">
                          <span className="font-mono text-xs font-semibold text-ink-900 uppercase tracking-wider">
                            Form Submission Ready (Dev Preview)
                          </span>
                          <p className="text-xs text-ink-600 leading-relaxed font-300">
                            Form validation succeeded. Because an external mail API or backend handler (such as Formspree or a server endpoint) is not yet connected to this repository, your enquiry was not dispatched over the network.
                          </p>
                        </div>
                      </div>

                      {/* Payload preview for developer */}
                      {submittedPayload && (
                        <div className="rounded-xl bg-paper-100/80 border border-white/[0.08] p-3.5 font-mono text-[11px] text-ink-700 flex flex-col gap-1">
                          <div><span className="text-ink-500">Name:</span> {submittedPayload.name}</div>
                          <div>
                            <span className="text-ink-500">Contact:</span>{' '}
                            {submittedPayload.contactMethod === 'email'
                              ? submittedPayload.email
                              : submittedPayload.phone}
                          </div>
                          <div><span className="text-ink-500">Type:</span> {submittedPayload.projectType}</div>
                          {submittedPayload.budget && (
                            <div><span className="text-ink-500">Budget:</span> {submittedPayload.budget}</div>
                          )}
                        </div>
                      )}

                      <a
                        href={`mailto:${profile.email}?subject=Project Enquiry: ${encodeURIComponent(
                          formData.projectType || 'New Project'
                        )}&body=${encodeURIComponent(
                          `Hi Divya,\n\nName: ${formData.name}\nContact: ${
                            formData.contactMethod === 'email' ? formData.email : formData.phone
                          }\nProject: ${formData.projectType}\nBudget: ${formData.budget}\n\nDetails:\n${formData.description}`
                        )}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-400 hover:underline pt-1"
                      >
                        Send via your default email client instead →
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
