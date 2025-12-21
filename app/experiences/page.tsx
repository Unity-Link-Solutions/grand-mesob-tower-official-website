"use client";

import { TrianglePattern, MesobPattern } from "../components/EthiopianPatterns";
import ParallaxSection from "../components/ParallaxSection";
import Link from "next/link";
import Image from "next/image";

export default function ExperiencesPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/assets/grandmesobtowerexperiences.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Grand Mesob Tower concept video"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/65 to-black/100" />
        </div>
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute bottom-20 left-10 text-white w-80 h-80">
            <TrianglePattern opacity={0.06} />
          </div>
        </ParallaxSection>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ParallaxSection speed={0.2}>
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-6">
              Hospitality & Experiences
            </p>
            <h1 className="font-playfair text-white mb-8 leading-tight">
              Unforgettable Moments
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              From sky-high observation decks to world-class dining and luxury
              accommodations, Grand Mesob Tower offers experiences that will
              create lasting memories.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Observation Decks Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="frame-wood h-full">
                <div className="frame-wood-inner bg-gradient-to-br from-[#c8a882]/20 to-[#2d5a3d]/10 h-[500px] flex items-center justify-center">
                  <div className="text-center text-black/40 text-sm uppercase tracking-wider">
                    <Image
                      src="/assets/observation_decks.png"
                      alt="Culture and Heritage"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
                Sky Experience
              </p>
              <h2 className="font-playfair text-black mb-6">
                Observation Decks
              </h2>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Ascend to the highest points of Addis Ababa and experience
                breathtaking 360° panoramic views of the city and surrounding
                Ethiopian highlands.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Multiple observation levels offer unique perspectives—from
                open-air terraces to climate-controlled indoor viewing galleries
                with floor-to-ceiling glass walls.
              </p>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>360° panoramic views of Addis Ababa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>Multiple viewing levels and experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>Interactive exhibits about Ethiopian geography</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>Sunset viewing experiences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experiences Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 text-white opacity-5">
          <MesobPattern />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Culinary Excellence
            </p>
            <h2 className="font-playfair text-white mb-8">
              Dining Experiences
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              A collection of restaurants, cafes, and lounges celebrating
              Ethiopian cuisine and international flavors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">Sky Lounge & Bar</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Sophisticated cocktail lounge on the upper floors with stunning
                views, signature drinks, and live entertainment.
              </p>
              <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                Floors 95-98
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">
                Fine Dining Restaurant
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Michelin-caliber dining experience featuring modern Ethiopian
                cuisine and international gastronomy.
              </p>
              <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                Floor 92
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">
                Traditional Coffee House
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Authentic Ethiopian coffee ceremony experience in an elegant
                setting celebrating coffee's birthplace.
              </p>
              <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                Cultural Zone
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">
                Casual Dining & Cafes
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Variety of cafes, bistros, and casual restaurants throughout the
                public and hospitality zones.
              </p>
              <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                Multiple Locations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel & Accommodations Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
                Luxury Stays
              </p>
              <h2 className="font-playfair text-black mb-6">Hotel & Suites</h2>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                The tower's hospitality zone features a world-class hotel with
                suites offering unparalleled luxury, service, and views.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Each room and suite is designed with contemporary elegance while
                incorporating Ethiopian design elements and craftsmanship.
              </p>
              <ul className="space-y-3 text-black/70 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>Premium rooms and luxury suites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>Spa and wellness facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>Infinity pool with skyline views</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>Concierge and premium services</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="frame-wood h-full">
                <div className="frame-wood-inner bg-gradient-to-br from-[#8b3a3a]/10 to-[#c8a882]/20 h-[500px] flex items-center justify-center">
                  <div className="text-center text-black/40 text-sm uppercase tracking-wider">
                    <Image
                      src="/assets/luxury_stays.png"
                      alt="Culture and Heritage"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Special Occasions Section */}
      <section className="relative py-32 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Special Occasions
            </p>
            <h2 className="font-playfair text-white mb-8">
              Events & Celebrations
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Host unforgettable events in spectacular venues with world-class
              service and breathtaking backdrops.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">💍</div>
              <h4 className="font-playfair text-xl mb-3">Weddings</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Celebrate your special day in elegant venues with panoramic city
                views and exceptional service.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-5xl mb-4">🎭</div>
              <h4 className="font-playfair text-xl mb-3">Cultural Events</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Host performances, exhibitions, and cultural celebrations in our
                dedicated event spaces.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="text-5xl mb-4">🎉</div>
              <h4 className="font-playfair text-xl mb-3">Private Functions</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Exclusive venues for corporate events, galas, and private
                celebrations of any scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Museum Experience Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Cultural Journey
            </p>
            <h2 className="font-playfair text-black mb-6">Museum Floors</h2>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Journey through Ethiopia's rich history, diverse regions, and
              cultural heritage across dedicated museum and gallery floors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h4 className="font-playfair text-lg mb-2">Heritage Museum</h4>
              <p className="text-black/60 text-sm">
                Ancient civilizations, historical artifacts, and Ethiopia's
                place in human history.
              </p>
            </div>

            <div className="p-6 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h4 className="font-playfair text-lg mb-2">Regional Galleries</h4>
              <p className="text-black/60 text-sm">
                Dedicated spaces celebrating each Ethiopian region's unique
                culture and traditions.
              </p>
            </div>

            <div className="p-6 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h4 className="font-playfair text-lg mb-2">Contemporary Art</h4>
              <p className="text-black/60 text-sm">
                Rotating exhibitions of modern Ethiopian and African artists.
              </p>
            </div>

            <div className="p-6 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <h4 className="font-playfair text-lg mb-2">
                Interactive Exhibits
              </h4>
              <p className="text-black/60 text-sm">
                Engaging multimedia experiences exploring Ethiopian culture and
                innovation.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/culture"
              className="inline-block px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Explore Culture & Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl mb-6">Plan Your Visit</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Stay updated on opening dates and special experiences at Grand Mesob
            Tower.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black hover:bg-[#c8a882] transition-all duration-300 text-sm uppercase tracking-widest font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
