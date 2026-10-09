import { useState, FormEvent } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe, Linkedin, Mail, Send } from "lucide-react";
import { PROFILE } from "../../data/profile";
import { MagneticButton } from "../motion/MagneticButton";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    topic: "Semiconductor Strategy & Architecture",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Trigger direct mailto client with pre-filled parameters
    const subject = encodeURIComponent(`[RKS Consulting - Advisory Inquiry: ${formData.topic}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );

    setFormSubmitted(true);
    window.location.href = `mailto:contact@sharatkaul.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-12 lg:py-16 px-6 lg:px-12 bg-[#08090B]">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
            CONFIDENTIAL INQUIRY · EXECUTIVE DIALOGUE
          </span>
          <div className="h-[1px] w-12 bg-[#242933]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Text & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-6">
                LET'S TALK ABOUT <br />
                <span className="font-serif italic font-normal text-[#C9A46C]">
                  WHAT COMES NEXT.
                </span>
              </h1>

              <p className="text-base text-[#969BA3] leading-relaxed mb-8">
                Whether you are exploring a new technology opportunity, building a manufacturing capability, developing strategic partnerships or navigating a complex industry challenge, let's start a conversation.
              </p>

              <div className="space-y-4 pt-6 border-t border-[#242933]">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#C9A46C]" />
                    <div>
                      <div className="text-sm font-semibold text-[#FAFAF8]">
                        Connect on LinkedIn
                      </div>
                      <div className="text-xs font-mono text-[#66717D]">
                        linkedin.com/in/sharatkaul
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-4 rounded-xl bg-[#111317] border border-[#242933] flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#C9A46C]" />
                  <div>
                    <div className="text-sm font-semibold text-[#FAFAF8]">
                      Global Advisory Corridors
                    </div>
                    <div className="text-xs font-mono text-[#66717D]">
                      Dallas, TX · Bengaluru, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-[#66717D]">
              DISCRETE &amp; CONFIDENTIAL C-SUITE ENGAGEMENTS
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] shadow-2xl">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A46C]/20 border border-[#C9A46C] text-[#C9A46C] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8]">
                  Dialogue Initiated
                </h3>
                <p className="text-sm text-[#969BA3] max-w-md mx-auto leading-relaxed">
                  We are in receipt of your email. We will come back to you soon.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-[#1B1E24] border border-[#242933] text-xs font-mono text-[#FAFAF8] hover:text-[#C9A46C] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Priya Sharma"
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Foundry / Technology Group"
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@enterprise.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                      What would you like to discuss?
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] focus:outline-none focus:border-[#C9A46C] transition-colors"
                    >
                      <option value="Semiconductor Strategy &amp; Capex">Semiconductor Strategy &amp; Capex</option>
                      <option value="Advanced Packaging &amp; OSAT Advisory">Advanced Packaging &amp; OSAT Advisory</option>
                      <option value="Technology &amp; Business Development">Technology &amp; Business Development</option>
                      <option value="Ecosystem &amp; National Roadmaps">Ecosystem &amp; National Roadmaps</option>
                      <option value="Manufacturing &amp; Cleanroom Scale-Up">Manufacturing &amp; Cleanroom Scale-Up</option>
                      <option value="Executive Advisory &amp; Board Briefings">Executive Advisory &amp; Board Briefings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#969BA3] mb-2">
                    Executive Message / Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the strategic opportunity, manufacturing requirement, or technology challenge..."
                    className="w-full px-4 py-3 rounded-lg bg-[#1B1E24] border border-[#242933] text-sm text-[#FAFAF8] placeholder-[#66717D] focus:outline-none focus:border-[#C9A46C] transition-colors resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10"
                >
                  <span>Start a Conversation →</span>
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
