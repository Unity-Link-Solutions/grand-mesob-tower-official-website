"use client";

import { useState } from "react";
import { MesobPattern } from "../components/EthiopianPatterns";
import ParallaxSection from "../components/ParallaxSection";

export default function ContactPage() {
  const [formType, setFormType] = useState<"general" | "business">("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
        inquiryType: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-20 right-20 text-white w-96 h-96">
            <MesobPattern opacity={0.05} />
          </div>
        </ParallaxSection>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ParallaxSection speed={0.2}>
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-6">
              Get in Touch
            </p>
            <h1 className="font-playfair text-white mb-8 leading-tight">
              Contact Us
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Whether you're interested in visiting, investing, partnering, or
              learning more about Grand Mesob Tower, we'd love to hear from you.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-playfair text-xl mb-3">Location</h3>
              <p className="text-black/70">
                Addis Ababa
                <br />
                Ethiopia
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-playfair text-xl mb-3">Email</h3>
              <p className="text-black/70">
                <a
                  href="mailto:info@grandmesobtower.com"
                  className="hover:text-[#c8a882] transition-colors"
                >
                  info@grandmesobtower.com
                </a>
              </p>
              <p className="text-black/70 mt-2">
                <a
                  href="mailto:invest@grandmesobtower.com"
                  className="hover:text-[#c8a882] transition-colors"
                >
                  invest@grandmesobtower.com
                </a>
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-playfair text-xl mb-3">Phone</h3>
              <p className="text-black/70">+251 9112 076 43</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto">
          {/* Form Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex border border-white/20 rounded-sm overflow-hidden">
              <button
                onClick={() => setFormType("general")}
                className={`px-8 py-3 text-sm uppercase tracking-wider transition-all ${
                  formType === "general"
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => setFormType("business")}
                className={`px-8 py-3 text-sm uppercase tracking-wider transition-all ${
                  formType === "business"
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
              >
                Business Inquiry
              </button>
            </div>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-8 p-6 bg-[#2d5a3d] border border-[#c8a882] text-white rounded-sm">
              <p className="text-center">
                Thank you for your message! We'll get back to you as soon as
                possible.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm uppercase tracking-wider text-white/80 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[#c8a882] focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm uppercase tracking-wider text-white/80 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[#c8a882] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm uppercase tracking-wider text-white/80 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[#c8a882] focus:outline-none transition-colors"
                  placeholder="+251 (0)11 XXX XXXX"
                />
              </div>
            </div>

            {/* Organization (Business form only) */}
            {formType === "business" && (
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm uppercase tracking-wider text-white/80 mb-2"
                >
                  Organization / Company
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[#c8a882] focus:outline-none transition-colors"
                  placeholder="Your organization name"
                />
              </div>
            )}

            {/* Inquiry Type (Business form only) */}
            {formType === "business" && (
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm uppercase tracking-wider text-white/80 mb-2"
                >
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required={formType === "business"}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#c8a882] focus:outline-none transition-colors"
                >
                  <option value="">Select inquiry type</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="office-lease">Office Space Leasing</option>
                  <option value="hospitality">Hospitality Partnership</option>
                  <option value="retail">Retail & Services</option>
                  <option value="other">Other Business Inquiry</option>
                </select>
              </div>
            )}

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm uppercase tracking-wider text-white/80 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[#c8a882] focus:outline-none transition-colors"
                placeholder="Brief subject of your inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-wider text-white/80 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:border-[#c8a882] focus:outline-none transition-colors resize-none"
                placeholder="Please provide details about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 text-sm uppercase tracking-widest font-medium transition-all ${
                  isSubmitting
                    ? "bg-white/20 text-white/40 cursor-not-allowed"
                    : "bg-white text-black hover:bg-[#c8a882] hover:text-white"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            <p className="text-white/50 text-xs text-center mt-4">
              * Required fields
            </p>
          </form>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="relative py-20 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-black/10">
              <h4 className="font-playfair text-lg mb-3">
                When will the tower open?
              </h4>
              <p className="text-black/70 text-sm leading-relaxed">
                We're currently in the design and planning phase. Construction
                timelines will be announced as we secure partnerships and
                finalize development plans. Stay tuned for updates.
              </p>
            </div>

            <div className="p-6 border border-black/10">
              <h4 className="font-playfair text-lg mb-3">
                Can I visit the tower now?
              </h4>
              <p className="text-black/70 text-sm leading-relaxed">
                The tower is not yet built. We'll announce visitor information
                and booking details as we approach completion. Sign up for our
                updates to be notified.
              </p>
            </div>

            <div className="p-6 border border-black/10">
              <h4 className="font-playfair text-lg mb-3">
                How can I invest in the project?
              </h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Please use the Business Inquiry form above and select
                "Investment Opportunity" to connect with our investment team.
                We'll provide detailed information about investment models.
              </p>
            </div>

            <div className="p-6 border border-black/10">
              <h4 className="font-playfair text-lg mb-3">
                Are office spaces available for lease?
              </h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Yes, we're accepting expressions of interest for Grade-A office
                spaces. Contact us via the Business Inquiry form with "Office
                Space Leasing" selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="relative h-96 bg-[#1a1a1a]">
        <div className="absolute inset-0 flex items-center justify-center text-white/40">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider">Location Map</p>
            <p className="text-xs mt-2">(Interactive Map Placeholder)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
