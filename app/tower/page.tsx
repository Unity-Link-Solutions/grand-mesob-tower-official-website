'use client';

import { MesobPattern, DiamondPattern } from '../components/EthiopianPatterns';
import ParallaxSection from '../components/ParallaxSection';
import Link from 'next/link';

export default function TowerPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Pattern */}
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-40 right-20 text-white w-96 h-96">
            <MesobPattern opacity={0.06} />
          </div>
        </ParallaxSection>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ParallaxSection speed={0.2}>
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-6">
              Architecture & Design
            </p>
            <h1 className="font-playfair text-white mb-8 leading-tight">
              The Tower
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Inspired by Ethiopia's traditional mesob basket, Grand Mesob Tower 
              embodies the spirit of community, sharing, and cultural pride in 
              a striking architectural form.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Mesob Inspiration Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
                Cultural Inspiration
              </p>
              <h2 className="font-playfair text-black mb-6">
                The Mesob Concept
              </h2>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                The mesob is a traditional Ethiopian woven basket used for serving 
                injera and communal meals. It represents gathering, sharing, and 
                the bonds that unite people.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Grand Mesob Tower translates this cultural symbol into architecture, 
                creating a vertical community where culture, business, and hospitality 
                converge—just as families and friends gather around the mesob.
              </p>
              <p className="text-black/70 text-lg leading-relaxed">
                The tower's design features curved forms and interwoven elements 
                that echo the traditional basket's circular shape and woven texture, 
                while incorporating modern engineering and sustainable design principles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#c8a882]/20 to-[#2d5a3d]/10 h-[500px] flex items-center justify-center">
              <div className="text-center text-black/40 text-sm uppercase tracking-wider">
                Mesob Visualization<br />
                <span className="text-xs">(Architectural Render Placeholder)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Clusters Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 text-white opacity-5">
          <DiamondPattern />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Structure
            </p>
            <h2 className="font-playfair text-white mb-8">
              Floor Clusters
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Over 100 floors organized into distinct zones, each designed 
              for specific experiences and purposes.
            </p>
          </div>

          <div className="space-y-6">
            {/* Sky Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">Sky Zone</h3>
                <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                  Floors 90-110+
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Observation decks with 360° panoramic views, sky lounges, 
                signature restaurants, and event spaces at the pinnacle of the tower.
              </p>
            </div>

            {/* Hospitality Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">Hospitality Zone</h3>
                <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                  Floors 70-89
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Luxury hotel suites, spa and wellness facilities, fine dining 
                restaurants, and conference rooms for international guests.
              </p>
            </div>

            {/* Business Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">Business Zone</h3>
                <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                  Floors 40-69
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Grade-A office spaces for international and local companies, 
                financial services, co-working spaces, and business amenities.
              </p>
            </div>

            {/* Cultural Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">Cultural Zone</h3>
                <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                  Floors 15-39
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Ethiopian heritage museum, regional galleries showcasing all Ethiopian 
                regions, contemporary art exhibitions, and cultural event spaces.
              </p>
            </div>

            {/* Public Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">Public Zone</h3>
                <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                  Floors 1-14
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Grand entrance lobby, retail spaces, cafes and restaurants, 
                visitor center, and public gathering areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Innovation
            </p>
            <h2 className="font-playfair text-black mb-8">
              Key Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="font-playfair text-xl mb-3">Sustainable Design</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Energy-efficient systems, green building materials, and 
                environmentally conscious architecture.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🏗️</div>
              <h4 className="font-playfair text-xl mb-3">Advanced Engineering</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                State-of-the-art structural systems designed to withstand 
                seismic activity and extreme conditions.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="font-playfair text-xl mb-3">Smart Building</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Integrated technology for building management, security, 
                and enhanced user experience.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🚄</div>
              <h4 className="font-playfair text-xl mb-3">High-Speed Elevators</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Ultra-fast elevator systems connecting all zones efficiently 
                with panoramic views.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-playfair text-xl mb-3">Cultural Integration</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Ethiopian art, craftsmanship, and design elements 
                woven throughout the building.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🌟</div>
              <h4 className="font-playfair text-xl mb-3">Iconic Design</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                A distinctive silhouette that will become a symbol 
                of modern Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl mb-6">
            Experience the Vision
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Discover more about the experiences and opportunities within Grand Mesob Tower.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/experiences"
              className="px-8 py-4 bg-white text-black hover:bg-[#c8a882] transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Explore Experiences
            </Link>
            <Link
              href="/business"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Business Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

