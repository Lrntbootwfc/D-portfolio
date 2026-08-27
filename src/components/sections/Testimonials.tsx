import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  CheckCircle2, 
  MessageSquarePlus, 
  X, 
  Send, 
  Sparkles, 
  Star, 
  Users, 
  Mail, 
  Clock,
  HeartHandshake
} from 'lucide-react';
import { testimonials as initialTestimonials, profile, TestimonialItem } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const LOCAL_STORAGE_KEY = 'divya_portfolio_custom_testimonials_v1';

// Helper to format text with *bold* formatting into React elements
function formatQuoteText(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      const boldContent = part.slice(1, -1);
      return (
        <strong key={index} className="font-semibold text-ink-900 bg-accent-400/10 px-1 py-0.5 rounded text-accent-300">
          {boldContent}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function Testimonials() {
  const [items, setItems] = useState<TestimonialItem[]>(initialTestimonials);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    relationship: 'Worked together on a project',
    skills: [] as string[],
    feedback: '',
    rating: 5,
    email: '',
  });

  const availableSkillTags = [
    'Technical Problem Solving',
    'Clear Communication',
    'Teamwork & Collaboration',
    'Responsibility & Ownership',
    'Fast Learner',
    'Web Development',
    'Data & Python',
  ];

  // Load custom reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as TestimonialItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems([...initialTestimonials, ...parsed]);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleToggleSkill = (skill: string) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill);
      return {
        ...prev,
        skills: exists ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.feedback.trim()) return;

    // Create initials
    const initials = formData.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('') || 'PE';

    const newItem: TestimonialItem = {
      id: `custom-${Date.now()}`,
      name: formData.name.trim(),
      role: formData.role.trim() || 'Project Collaborator',
      relationship: formData.relationship,
      avatarText: initials,
      verified: false,
      highlightWords: [],
      paragraphs: [formData.feedback.trim()],
      skillsHighlighted: formData.skills.length > 0 ? formData.skills : ['Team Collaboration', 'Technical Problem Solving'],
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };

    const updated = [...items, newItem];
    setItems(updated);

    // Save custom ones to localStorage
    try {
      const customOnly = updated.filter((item) => item.id.startsWith('custom-'));
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customOnly));
    } catch {
      // Ignore
    }

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setModalOpen(false);
      setFormData({
        name: '',
        role: '',
        relationship: 'Worked together on a project',
        skills: [],
        feedback: '',
        rating: 5,
        email: '',
      });
    }, 2000);
  };

  return (
    <section id="testimonials" className="section-padding relative w-full max-w-full overflow-hidden">
      <div className="container-content relative w-full min-w-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <SectionHeading
            eyebrow="COLLABORATOR FEEDBACK"
            title={<>Feedback & Endorsements</>}
            description="Real feedback and recommendations from peers, project teammates, and collaborators."
          />

          <Reveal delay={150}>
            <button
              id="open-feedback-modal-btn"
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-accent-400/40 bg-accent-400/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent-400 backdrop-blur-md transition-all duration-300 hover:bg-accent-400 hover:text-paper-base hover:shadow-[0_0_20px_var(--glass-glow)] cursor-pointer"
            >
              <MessageSquarePlus className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Leave a Recommendation</span>
            </button>
          </Reveal>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 120}
              className="relative flex flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-7 sm:p-9 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Decorative top quote mark */}
              <div className="absolute top-7 right-8 text-white/[0.06] pointer-events-none select-none">
                <Quote className="h-16 w-16 rotate-180" />
              </div>

              <div>
                {/* Person Header */}
                <div className="flex items-start gap-4 border-b border-white/[0.07] pb-6">
                  {/* Avatar Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400/20 to-accent-500/10 border border-accent-400/30 font-mono text-sm font-bold text-accent-400 shadow-inner">
                    {item.avatarText}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-ink-900 truncate">
                        {item.name}
                      </h3>
                      {item.verified ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" />
                          Verified Colleague
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full border border-accent-400/30 bg-accent-400/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent-400">
                          <Sparkles className="h-3 w-3" />
                          Recent Endorsement
                        </span>
                      )}
                    </div>

                    <p className="font-mono text-xs text-ink-500 mt-0.5">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-ink-400 mt-0.5 flex items-center gap-1.5">
                      <Users className="h-3 w-3 text-accent-400/70" />
                      {item.relationship}
                    </p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mt-5 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-3.5 w-3.5 fill-accent-400 text-accent-400"
                    />
                  ))}
                  <span className="ml-2 font-mono text-[11px] text-ink-400 font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Testimonial Paragraphs with highlighted keywords */}
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-ink-700 font-300">
                  {item.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>
                      {formatQuoteText(para)}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlighted Core Competencies */}
              {item.skillsHighlighted && item.skillsHighlighted.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/[0.07]">
                  <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-500 mb-2.5">
                    Recognized Strengths
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.skillsHighlighted.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.08] bg-paper-200/50 px-3 py-1 font-mono text-[11px] font-medium text-ink-700 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          ))}

          {/* Invitation Card for Collaborators */}
          {items.length === 1 && (
            <Reveal
              delay={200}
              className="flex flex-col justify-between rounded-[2.25rem] border border-dashed border-white/[0.15] bg-paper-100/30 p-7 sm:p-9 backdrop-blur-md transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/50"
            >
              <div className="flex flex-col items-center text-center my-auto py-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-paper-200/80 border border-white/[0.1] text-accent-400 mb-4 shadow-sm">
                  <HeartHandshake className="h-7 w-7" />
                </div>

                <h4 className="font-display text-lg font-bold text-ink-900 mb-2">
                  Have we worked together?
                </h4>
                <p className="text-sm text-ink-500 max-w-md font-300 leading-relaxed mb-6">
                  If you’ve collaborated with Divya on projects, hackathons, open-source code, or coursework, your feedback and endorsement are warmly welcomed.
                </p>

                <button
                  id="collaborator-card-cta-btn"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-accent-400 bg-accent-400/10 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-400 transition-all duration-200 hover:bg-accent-400 hover:text-paper-base cursor-pointer"
                >
                  <MessageSquarePlus className="h-4 w-4" />
                  <span>Share Your Experience</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-ink-500">
                <Clock className="h-3.5 w-3.5 text-accent-400" />
                <span>Second teammate review slot reserved</span>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Leave Feedback Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.12] bg-paper-100 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                id="close-feedback-modal-btn"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 rounded-full p-2 text-ink-500 hover:bg-paper-200 hover:text-ink-900 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {submittedSuccess ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-2">
                    Thank You for Your Endorsement!
                  </h3>
                  <p className="text-sm text-ink-600 max-w-sm leading-relaxed">
                    Your feedback has been recorded and is now featured in the collaborator endorsements section.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-accent-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      Collaborator Recommendation
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-900">
                      Share Feedback for Divya
                    </h3>
                    <p className="text-xs text-ink-500 mt-1">
                      Help future collaborators understand what it's like working together.
                    </p>
                  </div>

                  {/* Name & Role */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-mono font-medium text-ink-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="feedback-author-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/[0.1] bg-paper-200/60 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-ink-600 mb-1.5">
                        Role & Organization
                      </label>
                      <input
                        id="feedback-author-role"
                        type="text"
                        placeholder="e.g. Project Teammate / OIST"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full rounded-xl border border-white/[0.1] bg-paper-200/60 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Relationship */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-ink-600 mb-1.5">
                      Working Relationship
                    </label>
                    <select
                      id="feedback-relationship"
                      value={formData.relationship}
                      onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-paper-200/60 px-3.5 py-2.5 text-sm text-ink-900 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-all"
                    >
                      <option value="Worked together on a project">Worked together on multiple projects</option>
                      <option value="College / Coursework Peer">College / Coursework Peer</option>
                      <option value="Hackathon Teammate">Hackathon Teammate</option>
                      <option value="Internship Colleague">Internship Colleague</option>
                      <option value="Client / Organization Partner">Client / Organization Partner</option>
                      <option value="Mentor / Project Guide">Mentor / Project Guide</option>
                    </select>
                  </div>

                  {/* Strengths tags */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-ink-600 mb-2">
                      Key Strengths Observed (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableSkillTags.map((tag) => {
                        const isSelected = formData.skills.includes(tag);
                        return (
                          <button
                            type="button"
                            key={tag}
                            onClick={() => handleToggleSkill(tag)}
                            className={`rounded-full px-3 py-1 text-xs font-mono transition-all duration-150 cursor-pointer ${
                              isSelected
                                ? 'bg-accent-400 text-paper-base font-semibold border border-accent-400'
                                : 'bg-paper-200/60 text-ink-600 border border-white/[0.08] hover:border-accent-400/40'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-mono font-medium text-ink-600">
                        Your Feedback / Testimonial *
                      </label>
                      <span className="text-[11px] text-ink-400 font-mono">
                        Tip: use *word* to emphasize
                      </span>
                    </div>
                    <textarea
                      id="feedback-message"
                      required
                      rows={4}
                      placeholder="Share your experience working with Divya (e.g., technical problem solving, teamwork, communication, reliability)..."
                      value={formData.feedback}
                      onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                      className="w-full rounded-xl border border-white/[0.1] bg-paper-200/60 px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <a
                      href={`mailto:${profile.email}?subject=Portfolio%20Recommendation%20for%20Divya&body=${encodeURIComponent(
                        `Hi Divya,\n\nHere is my feedback/recommendation for your portfolio:\n\n"${formData.feedback}"\n\n- ${formData.name} (${formData.role})`
                      )}`}
                      className="inline-flex items-center gap-1.5 text-xs text-ink-500 hover:text-accent-400 transition-colors font-mono"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Or send directly via email</span>
                    </a>

                    <button
                      id="submit-feedback-btn"
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent-400 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-paper-base shadow-md transition-all hover:bg-accent-300 active:scale-95 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Post Recommendation</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
