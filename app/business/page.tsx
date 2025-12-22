"use client";

import { DiamondPattern, StripePattern } from "../components/EthiopianPatterns";
import ParallaxSection from "../components/ParallaxSection";
import Image from "next/image";
import Link from "next/link";
import PatternDivider from "../components/pattern_devider";

export default function BusinessPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/assets/Grand Mesob Tower Timelaps.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Grand Mesob Tower concept video"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/30" />
        </div>
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-40 left-20 text-white w-full h-96">
            <StripePattern opacity={0.04} />
          </div>
        </ParallaxSection>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ParallaxSection speed={0.2}>
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-6">
              Investment & Partnership
            </p>
            <h1 className="font-playfair text-white mb-8 leading-tight">
              Business & Innovation
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Grand Mesob Tower represents a landmark investment opportunity— a
              premier business destination at the heart of Africa's
              fastest-growing economies.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Investment Overview Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Opportunity
            </p>
            <h2 className="font-playfair text-black mb-8">
              Investment Overview
            </h2>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              A once-in-a-generation opportunity to invest in Ethiopia's
              defining landmark and a cornerstone of Addis Ababa's economic
              future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#c8a882]/10 to-transparent border border-black/10">
              {/* <div className="text-4xl mb-4">📈</div> */}
              <h3 className="font-playfair text-2xl mb-4">
                Strategic Position
              </h3>
              <p className="text-black/70 leading-relaxed">
                Located in Addis Ababa, the diplomatic capital of Africa and
                headquarters of the African Union, at the center of one of the
                world's fastest-growing regions.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#c8a882]/10 to-transparent border border-black/10">
              {/* <div className="text-4xl mb-4">🏛️</div> */}
              <h3 className="font-playfair text-2xl mb-4">Mixed-Use Value</h3>
              <p className="text-black/70 leading-relaxed">
                Diversified revenue streams from office spaces, hospitality,
                retail, cultural venues, and premium observation experiences.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#c8a882]/10 to-transparent border border-black/10">
              {/* <div className="text-4xl mb-4">🌍</div> */}
              <h3 className="font-playfair text-2xl mb-4">
                National Significance
              </h3>
              <p className="text-black/70 leading-relaxed">
                A project of national importance with government support,
                international interest, and symbolic value for Ethiopia's
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Spaces Section */}
      <section className="relative  bg-[#0a0a0a] text-white">
        <PatternDivider variant="tibeb" />

        <div className="absolute inset-0 text-white opacity-5">
          <DiamondPattern />
        </div>

        <div className="max-w-6xl py-32 px-6 mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
                Grade-A Offices
              </p>
              <h2 className="font-playfair text-white mb-6">
                Premium Office Spaces
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Over 30 floors of Grade-A office space designed for
                international corporations, regional headquarters, financial
                institutions, and innovative startups.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Each floor offers flexible layouts, state-of-the-art technology
                infrastructure, and stunning views of Addis Ababa.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-[#c8a882] text-2xl">✓</div>
                  <div>
                    <h4 className="font-medium mb-1">Flexible Floor Plates</h4>
                    <p className="text-white/60 text-sm">
                      Customizable layouts from 500m² to full-floor spaces
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#c8a882] text-2xl">✓</div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Smart Building Technology
                    </h4>
                    <p className="text-white/60 text-sm">
                      Advanced HVAC, security, and connectivity systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#c8a882] text-2xl">✓</div>
                  <div>
                    <h4 className="font-medium mb-1">Premium Amenities</h4>
                    <p className="text-white/60 text-sm">
                      Conference facilities, dining, fitness, and concierge
                      services
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#c8a882] text-2xl">✓</div>
                  <div>
                    <h4 className="font-medium mb-1">Prestigious Address</h4>
                    <p className="text-white/60 text-sm">
                      Ethiopia's most iconic business address
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-wood bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center border border-white/10">
              <div className="relative w-full h-80 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src="/assets/GrandMesobTowerOfficeSection.png"
                  alt="Culture and Heritage"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
        <PatternDivider variant="tibeb" />
      </section>

      {/* Investment Opportunities Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Opportunities
            </p>
            <h2 className="font-playfair text-black mb-8">
              Partnership Models
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">Equity Investment</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                Direct equity participation in the development and operation of
                Grand Mesob Tower, with returns from all revenue streams.
              </p>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>• Long-term value appreciation</li>
                <li>• Diversified income streams</li>
                <li>• Prestige and brand association</li>
                <li>• Strategic advisory role</li>
              </ul>
            </div>

            <div className="p-10 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">Office Leasing</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                Secure premium office space for your organization with flexible
                lease terms and customization options.
              </p>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>• Flexible floor configurations</li>
                <li>• Long-term lease agreements</li>
                <li>• Corporate branding opportunities</li>
                <li>• Priority access to amenities</li>
              </ul>
            </div>

            <div className="p-10 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">
                Hospitality Partnership
              </h3>
              <p className="text-black/70 leading-relaxed mb-6">
                Partner with us to operate hotels, restaurants, or entertainment
                venues within the tower's hospitality zones.
              </p>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>• Flagship location opportunity</li>
                <li>• Established brand presence</li>
                <li>• Built-in foot traffic</li>
                <li>• Operational support</li>
              </ul>
            </div>

            <div className="p-10 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">Retail & Services</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                Premium retail and service spaces in high-traffic zones serving
                thousands of daily visitors, workers, and residents.
              </p>
              <ul className="space-y-2 text-black/70 text-sm">
                <li>• High-visibility locations</li>
                <li>• Affluent customer base</li>
                <li>• Integrated marketing support</li>
                <li>• Various space configurations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="relative py-32 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              The Case
            </p>
            <h2 className="font-playfair text-white mb-8">
              Why Invest in Grand Mesob Tower
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">Growing Economy</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Ethiopia's rapidly expanding economy and increasing foreign
                direct investment create strong demand.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">
                Limited Competition
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                First-mover advantage in ultra-premium real estate and
                hospitality in Addis Ababa.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">Iconic Status</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                A landmark building creates intrinsic value beyond standard real
                estate metrics.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">Diverse Revenue</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Multiple income streams reduce risk and maximize long-term
                returns.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">Tourism Growth</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Rising tourism creates demand for observation decks, hotels, and
                cultural experiences.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">Regional Hub</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Addis Ababa's role as Africa's diplomatic capital ensures
                sustained business activity.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">Cultural Value</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Museum and cultural floors create unique positioning and public
                goodwill.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10">
              <h4 className="font-playfair text-lg mb-3">Sustainable Design</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Green building features reduce operating costs and attract
                ESG-focused tenants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[#c8a882] to-[#d4a574] text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-playfair text-5xl mb-6">Let's Build Together</h2>
          <p className="text-black/80 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            We're seeking visionary investors, partners, and tenants who share
            our commitment to excellence and Ethiopia's future. Contact us to
            discuss investment opportunities, leasing options, or partnership
            models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Schedule a Meeting
            </Link>
            <a
              href="mailto:invest@grandmesobtower.com"
              className="px-10 py-4 bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Email Investment Team
            </a>
          </div>

          <p className="text-black/60 text-sm mt-8">
            For investment inquiries:{" "}
            <a href="mailto:invest@grandmesobtower.com" className="underline">
              invest@grandmesobtower.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
