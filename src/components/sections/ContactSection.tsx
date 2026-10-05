import { useState, FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Linkedin, Mail, Send } from "lucide-react";
import { PROFILE } from "../../data/profile";
import { MagneticButton } from "../motion/MagneticButton";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    topic: "Advanced Packaging Advisory",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Trigger direct mailto client with pre-filled parameters
    const subject = encodeURIComponent(`[Semiconductor Inquiry - ${formData.topic}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );

    // Provide friendly in-UI confirmation and trigger mailto
    setFormSubmitted(true);
    window.location.href = `mailto:contact@sharatkaul.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            20 // INITIATE DIALOGUE
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Text & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-6">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] via-[#FAFAF8] to-[#D88A52]">
                  WHAT COMES NEXT.
                </span>
              </h2>

              <p className="text-base text-[#A8B0BA] leading-relaxed mb-8">
                For conversations around semiconductor technology roadmaps, advanced packaging, OSAT readiness, national ecosystem strategy, university curricula, and industry advisory.
              </p>

              <div className="space-y-4 pt-6 border-t border-[#1F2633]">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0D1117] border border-[#1F2633] hover:border-[#6FA8FF] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#6FA8FF]" />
                    <div>
                      <div className="text-sm font-semibold text-[#FAFAF8]">
                        Connect on LinkedIn
                      </div>
                      <div className="text-xs font-mono text-[#66717D]">
                        linkedin.com/in/sharatkaul
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#6FA8FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-4 rounded-xl bg-[#0D1117] border border-[#1F2633] flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D88A52]" />
                  <div>
                    <div className="text-sm font-semibold text-[#FAFAF8]">
                      Global Advisory Hubs
                    </div>
                    <div className="text-xs font-mono text-[#66717D]">
                      Dallas, TX · Bengaluru, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-[#66717D]">
              DISCRETE &amp; EXECUTIVE STRATEGY CONSULTATIONS
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#0D1117] border border-[#1F2633]">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#69A88A]/20 border border-[#69A88A] text-[#69A88A] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8]">
                  Dialogue Initiated
                </h3>
                <p className="text-sm text-[#A8B0BA] max-w-md mx-auto leading-relaxed">
                  Your mail client has been opened with pre-filled parameters. If it did not open automatically, you can reach out directly via LinkedIn.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#151A22] border border-[#1F2633] text-xs font-mono text-[#FAFAF8] hover:text-[#6FA8FF]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B0BA] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Priya Sharma"
                      className="w-full px-4 py-3 rounded-lg bg-[#151A22] border border-[#1F2633] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#6FA8FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B0BA] mb-2">
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Foundry / Research Institute"
                      className="w-full px-4 py-3 rounded-lg bg-[#151A22] border border-[#1F2633] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#6FA8FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B0BA] mb-2">
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@enterprise.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#151A22] border border-[#1F2633] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#6FA8FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B0BA] mb-2">
                      Topic of Collaboration
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#151A22] border border-[#1F2633] text-sm text-[#FAFAF8] focus:outline-none focus:border-[#6FA8FF] transition-colors"
                    >
                      <option value="Advanced Packaging Advisory">Advanced Packaging / OSAT Advisory</option>
                      <option value="Semiconductor Strategy Roadmap">Semiconductor Strategy &amp; Policy</option>
                      <option value="Keynote / Speaking Engagement">Keynote / Speaking Engagement</option>
                      <option value="Curriculum & Workforce Development">Curriculum &amp; Academic Board</option>
                      <option value="Technology Partnership / Venture">Technology Partnership / Venture</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A8B0BA] mb-2">
                    Executive Summary / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the technology challenge, advisory requirement, or institutional initiative..."
                    className="w-full px-4 py-3 rounded-lg bg-[#151A22] border border-[#1F2633] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#6FA8FF] transition-colors resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FAFAF8] text-[#07090D] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#6FA8FF] transition-all shadow-lg shadow-white/5"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-3.5 h-3.5 text-[#07090D]" />
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
