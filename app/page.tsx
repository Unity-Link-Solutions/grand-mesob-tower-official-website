'use client';

import ParallaxSection from './components/ParallaxSection';
import { MesobPattern, DiamondPattern, TrianglePattern } from './components/EthiopianPatterns';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background Patterns - Decorative */}
        <div className="absolute top-40 right-10 text-white w-96 h-96 opacity-5 pointer-events-none">
          <MesobPattern opacity={0.08} />
        </div>
        <div className="absolute bottom-20 left-10 text-white w-64 h-64 opacity-5 pointer-events-none">
          <DiamondPattern opacity={0.05} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <p className="text-[#c8a882] text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-light">
            A Landmark for Addis Ababa
          </p>

          <h1 className="font-playfair text-white mb-8 leading-tight font-light">
            Grand Mesob<br />Tower
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            A visionary 100+ floor mixed-use tower rising in Addis Ababa. 
            A vertical city celebrating Ethiopian culture, business innovation, 
            and world-class hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tower"
              className="px-8 py-4 bg-white text-black hover:bg-[#c8a882] hover:text-white transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Explore the Tower
            </Link>
            <Link
              href="/business"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Business Opportunities
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Vision Pillars Section */}
      <section className="relative py-32 px-6 bg-white text-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full text-black/5">
          <TrianglePattern opacity={0.03} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Our Vision
            </p>
            <h2 className="font-playfair text-black">
              Three Pillars of Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Culture & Heritage */}
            <div className="group">
              <div className="mb-6 overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-[#2d5a3d]/10 to-[#c8a882]/10 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="font-playfair text-2xl mb-4">Culture & Heritage</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                Museum and gallery floors that tell Ethiopia's stories, celebrate 
                its diverse regions, showcase traditional and contemporary art, 
                and preserve our rich historical legacy.
              </p>
              <Link
                href="/culture"
                className="text-black font-medium text-sm uppercase tracking-wider hover:text-[#c8a882] transition-colors inline-flex items-center gap-2"
              >
                Learn More
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Business & Innovation */}
            <div className="group">
              <div className="mb-6 overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-[#c8a882]/10 to-black/10 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="font-playfair text-2xl mb-4">Business & Innovation</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                Grade-A office spaces, financial hubs, and conference facilities 
                designed for African and global business leaders. A beacon for 
                innovation and economic growth.
              </p>
              <Link
                href="/business"
                className="text-black font-medium text-sm uppercase tracking-wider hover:text-[#c8a882] transition-colors inline-flex items-center gap-2"
              >
                Learn More
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Hospitality & Experiences */}
            <div className="group">
              <div className="mb-6 overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-[#8b3a3a]/10 to-[#c8a882]/10 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="font-playfair text-2xl mb-4">Hospitality & Experiences</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                Observation decks with panoramic views, sky lounges, world-class 
                restaurants, luxury hotels, and special event spaces that create 
                unforgettable moments.
              </p>
              <Link
                href="/experiences"
                className="text-black font-medium text-sm uppercase tracking-wider hover:text-[#c8a882] transition-colors inline-flex items-center gap-2"
              >
                Learn More
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tower at a Glance Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              The Tower
            </p>
            <h2 className="font-playfair text-white mb-8">
              At a Glance
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Grand Mesob Tower reimagines vertical living, working, and experiencing. 
              Inspired by Ethiopia's traditional mesob basket, the tower embodies 
              community, sharing, and cultural pride.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-5xl font-playfair text-[#c8a882] mb-4">100+</div>
              <div className="text-sm uppercase tracking-wider text-white/60">Floors</div>
              <p className="text-white/80 mt-3 text-sm">
                Rising above the city skyline
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-5xl font-playfair text-[#c8a882] mb-4">Mixed</div>
              <div className="text-sm uppercase tracking-wider text-white/60">Use</div>
              <p className="text-white/80 mt-3 text-sm">
                Culture, business & hospitality
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-5xl font-playfair text-[#c8a882] mb-4">AA</div>
              <div className="text-sm uppercase tracking-wider text-white/60">Location</div>
              <p className="text-white/80 mt-3 text-sm">
                Heart of Addis Ababa, Ethiopia
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-5xl font-playfair text-[#c8a882] mb-4">2025</div>
              <div className="text-sm uppercase tracking-wider text-white/60">Vision</div>
              <p className="text-white/80 mt-3 text-sm">
                Shaping the future of Addis
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/tower"
              className="inline-block px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Discover the Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Investors & Partners Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 text-white opacity-5">
          <MesobPattern className="w-full h-full" opacity={0.05} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-6">
            Join Us
          </p>
          <h2 className="font-playfair text-white mb-8">
            Building Ethiopia's Future
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Grand Mesob Tower represents a unique opportunity for investors, 
            business partners, and operators to be part of a landmark project 
            that will define Addis Ababa's skyline and economic future.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="text-3xl mb-4">🏢</div>
              <h4 className="font-playfair text-xl mb-3">Investors</h4>
              <p className="text-white/70 text-sm">
                Strategic investment opportunities in a landmark development
              </p>
            </div>

            <div className="p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="font-playfair text-xl mb-3">Partners</h4>
              <p className="text-white/70 text-sm">
                Collaborative partnerships for development and operation
              </p>
            </div>

            <div className="p-6">
              <div className="text-3xl mb-4">✨</div>
              <h4 className="font-playfair text-xl mb-3">Operators</h4>
              <p className="text-white/70 text-sm">
                Premium spaces for hospitality, retail, and services
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/business"
              className="px-8 py-4 bg-[#c8a882] text-black hover:bg-white transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Investment Overview
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline/Status Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Our Journey
            </p>
            <h2 className="font-playfair text-black">
              Project Timeline
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/20 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Concept Phase */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h4 className="font-playfair text-2xl mb-3">Concept & Vision</h4>
                  <p className="text-black/70">
                    Development of the architectural vision inspired by the mesob, 
                    establishing the mixed-use concept and cultural significance.
                  </p>
                </div>
                <div className="md:pl-8 flex items-center gap-4">
                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#c8a882] ring-4 ring-white shadow-lg"></div>
                  <div className="text-sm uppercase tracking-wider text-[#c8a882] font-medium">
                    Completed
                  </div>
                </div>
              </div>

              {/* Design Phase */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h4 className="font-playfair text-2xl mb-3">Design & Planning</h4>
                  <p className="text-black/70">
                    Architectural design, engineering studies, stakeholder engagement, 
                    and securing necessary approvals and partnerships.
                  </p>
                </div>
                <div className="md:pr-8 md:text-right flex md:flex-row-reverse items-center gap-4">
                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#c8a882] ring-4 ring-white shadow-lg"></div>
                  <div className="text-sm uppercase tracking-wider text-[#c8a882] font-medium">
                    In Progress
                  </div>
                </div>
              </div>

              {/* Construction Phase */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h4 className="font-playfair text-2xl mb-3">Construction</h4>
                  <p className="text-black/70">
                    Foundation work, tower construction, and systems installation. 
                    Bringing the vision to life with precision and care.
                  </p>
                </div>
                <div className="md:pl-8 flex items-center gap-4">
                  <div className="hidden md:block w-4 h-4 rounded-full bg-black/20 ring-4 ring-white shadow-lg"></div>
                  <div className="text-sm uppercase tracking-wider text-black/40 font-medium">
                    Future
                  </div>
                </div>
              </div>

              {/* Opening Phase */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <h4 className="font-playfair text-2xl mb-3">Grand Opening</h4>
                  <p className="text-black/70">
                    Completion and inauguration of Grand Mesob Tower, welcoming 
                    businesses, residents, and visitors to Ethiopia's new landmark.
                  </p>
                </div>
                <div className="md:pr-8 md:text-right flex md:flex-row-reverse items-center gap-4">
                  <div className="hidden md:block w-4 h-4 rounded-full bg-black/20 ring-4 ring-white shadow-lg"></div>
                  <div className="text-sm uppercase tracking-wider text-black/40 font-medium">
                    Future
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">
            Be Part of History
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're interested in visiting, investing, or partnering with us, 
            we invite you to join us in creating this landmark for Ethiopia.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black hover:bg-[#c8a882] transition-all duration-300 text-sm uppercase tracking-widest font-medium"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
