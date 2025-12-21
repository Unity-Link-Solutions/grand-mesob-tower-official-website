"use client";

import { MesobPattern, DiamondPattern } from "../components/EthiopianPatterns";
// import TowerBuildAnimation from "../components/TowerBuildAnimation";
import Link from "next/link";
import Image from "next/image";
import PhotoFrame from "../components/PhotoFrame";

export default function TowerPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/assets/grandmesobtower.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Grand Mesob Tower concept video"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/65 to-black/100" />
        </div>
        <div className="absolute top-40 right-20 text-white w-96 h-96 opacity-5 pointer-events-none">
          <MesobPattern opacity={1.06} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#c8a882]/30 bg-[#c8a882]/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#c8a882] animate-pulse"></div>
            <span className="text-[#c8a882] text-xs md:text-sm uppercase tracking-widest font-medium">
              Design Concept
            </span>
          </div> */}

          <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-6">
            Architecture & Vision
          </p>
          <h1 className="font-playfair text-white mb-8 leading-tight">
            The Tower
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Inspired by Ethiopia's traditional mesob basket, Grand Mesob Tower
            <strong className="text-white"> will embody</strong> the spirit of
            community, sharing, and cultural pride in a striking architectural
            form <strong className="text-white">to be realized</strong>.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#0f0f0f] via-[#0a0a0a] to-[#121212] text-white overflow-hidden">
        <div className="absolute inset-0 text-white/5 pointer-events-none">
          <MesobPattern />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[320px,1fr] gap-12 items-center relative z-10">
          <PhotoFrame className="justify-self-center md:justify-self-start shadow-2xl">
            <Image
              src="/assets/tsegaye.JPG"
              alt="Tsegaye Teklu, Founder of Grand Mesob Tower"
              width={900}
              height={1200}
              className="object-cover w-[320px] h-[480px]"
              priority
            />
          </PhotoFrame>

          <div>
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Founder
            </p>
            <h2 className="font-playfair text-white text-3xl mb-6">
              Tsegaye Teklu
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-4">
              Tsegaye Teklu is the visionary founder behind Grand Mesob Tower.
              His passion for honoring Ethiopia&apos;s heritage while shaping
              its modern skyline drives the project&apos;s ambition and cultural
              integrity.
            </p>
            <p className="text-white/70 leading-relaxed">
              From concept to execution, he champions a landmark that brings
              together business, culture, and hospitality in a single vertical
              community - an enduring symbol of Ethiopian excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tower Building Animation */}
      {/* <TowerBuildAnimation /> */}

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
                The mesob is a traditional Ethiopian woven basket used for
                serving injera and communal meals. It represents gathering,
                sharing, and the bonds that unite people.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Grand Mesob Tower{" "}
                <strong className="text-black">will translate</strong> this
                cultural symbol into architecture, creating a vertical community
                where culture, business, and hospitality
                <strong className="text-black"> will converge</strong>, just as
                families and friends gather around the mesob.
              </p>
              <p className="text-black/70 text-lg leading-relaxed">
                The tower's design{" "}
                <strong className="text-black">will feature</strong> curved
                forms and interwoven elements that echo the traditional basket's
                circular shape and woven texture, while incorporating modern
                engineering and sustainable design principles.
              </p>
            </div>
            <div className="frame-wood ">
              <div className="frame-wood-inner h-80 bg-gradient-to-br from-[#8b3a3a]/10 to-[#c8a882]/20  flex items-center justify-center">
                <div className="text-center text-black/40 text-sm uppercase tracking-wider">
                  <Image
                    src="/assets/concept1.jpeg"
                    alt="Culture and Heritage"
                    fill
                    // width={400}
                    className="object-cover"
                    priority={false}
                  />
                </div>
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
              Planned Structure
            </p>
            <h2 className="font-playfair text-white mb-8">Floor Clusters</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Over 100 floors{" "}
              <strong className="text-white">will be organized</strong> into
              distinct zones, each designed for specific experiences and
              purposes.
            </p>
          </div>

          <div className="space-y-6">
            {/* Sky Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">
                  Sky Zone
                </h3>
                <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                  Floors 90-110+
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Observation decks with 360° panoramic views, sky lounges,
                signature restaurants, and event spaces at the pinnacle of the
                tower.
              </p>
            </div>

            {/* Hospitality Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">
                  Hospitality Zone
                </h3>
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
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">
                  Business Zone
                </h3>
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
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">
                  Cultural Zone
                </h3>
                <div className="text-[#c8a882] text-sm uppercase tracking-wider">
                  Floors 15-39
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Ethiopian heritage museum, regional galleries showcasing all
                Ethiopian regions, contemporary art exhibitions, and cultural
                event spaces.
              </p>
            </div>

            {/* Public Zone */}
            <div className="border border-white/10 p-8 hover:border-[#c8a882]/50 transition-colors bg-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-playfair text-2xl mb-2 md:mb-0">
                  Public Zone
                </h3>
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
            <h2 className="font-playfair text-black mb-8">Key Features</h2>
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
              <h4 className="font-playfair text-xl mb-3">
                Advanced Engineering
              </h4>
              <p className="text-black/70 text-sm leading-relaxed">
                State-of-the-art structural systems designed to withstand
                seismic activity and extreme conditions.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="font-playfair text-xl mb-3">Smart Building</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Integrated technology for building management, security, and
                enhanced user experience.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🚄</div>
              <h4 className="font-playfair text-xl mb-3">
                High-Speed Elevators
              </h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Ultra-fast elevator systems connecting all zones efficiently
                with panoramic views.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-playfair text-xl mb-3">
                Cultural Integration
              </h4>
              <p className="text-black/70 text-sm leading-relaxed">
                Ethiopian art, craftsmanship, and design elements woven
                throughout the building.
              </p>
            </div>

            <div className="p-8 border border-black/10 hover:border-[#c8a882]/50 transition-colors">
              <div className="text-4xl mb-4">🌟</div>
              <h4 className="font-playfair text-xl mb-3">Iconic Design</h4>
              <p className="text-black/70 text-sm leading-relaxed">
                A distinctive silhouette that will become a symbol of modern
                Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl mb-6">Experience the Vision</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Discover more about the experiences and opportunities within Grand
            Mesob Tower.
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
