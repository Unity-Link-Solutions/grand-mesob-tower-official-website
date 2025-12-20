"use client";

import {
  MesobPattern,
  CrossPattern,
  TrianglePattern,
} from "../components/EthiopianPatterns";
import ParallaxSection from "../components/ParallaxSection";
import Link from "next/link";

export default function CulturePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/assets/Grand_Mesob_Tower_to_Day_to_Night_Museum_Video.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Grand Mesob Tower concept video"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/65 to-black/100" />
        </div>
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute top-32 right-16 text-white w-96 h-96">
            <CrossPattern opacity={0.06} />
          </div>
        </ParallaxSection>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ParallaxSection speed={0.2}>
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-6">
              Heritage & Identity
            </p>
            <h1 className="font-playfair text-white mb-8 leading-tight">
              Culture & Heritage
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Grand Mesob Tower celebrates Ethiopia's rich cultural tapestry,
              ancient history, and diverse regional traditions—preserving our
              heritage while inspiring the future.
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* The Mesob Story Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-black/5 w-64 h-64">
                <MesobPattern opacity={0.1} />
              </div>
              <div className="relative bg-gradient-to-br from-[#2d5a3d]/20 to-[#c8a882]/20 h-[500px] flex items-center justify-center">
                <div className="text-center text-black/40 text-sm uppercase tracking-wider">
                  Traditional Mesob
                  <br />
                  <span className="text-xs">(Image Placeholder)</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
                The Symbol
              </p>
              <h2 className="font-playfair text-black mb-6">
                The Story of the Mesob
              </h2>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                The mesob is far more than a woven basket—it is a symbol of
                Ethiopian hospitality, community, and the sacred act of sharing.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Traditionally handwoven from colorful straw, the mesob serves as
                the centerpiece of Ethiopian dining, holding the large injera
                platter around which family and friends gather. It represents
                unity, generosity, and the Ethiopian spirit of welcoming others.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                The circular form and intricate weaving patterns reflect
                centuries of craftsmanship passed down through generations. Each
                mesob tells a story through its colors and designs, often
                featuring the pan-African colors that represent Ethiopia's
                identity.
              </p>
              <p className="text-black/70 text-lg leading-relaxed">
                By naming and shaping our tower after the mesob, we honor this
                tradition—creating a modern gathering place where culture,
                ideas, and aspirations are shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Museum Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="absolute inset-0 text-white opacity-5">
          <TrianglePattern />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Museum Floors
            </p>
            <h2 className="font-playfair text-white mb-8">
              Ethiopian Heritage Museum
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              A world-class museum spanning multiple floors, telling the story
              of one of humanity's oldest civilizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">
                Ancient Civilizations
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Explore Ethiopia's ancient kingdoms—Axum, Lalibela,
                Gondar—through artifacts, reconstructions, and multimedia
                exhibits.
              </p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• Kingdom of Axum and the Obelisks</li>
                <li>• Rock-hewn churches of Lalibela</li>
                <li>• The Ark of the Covenant tradition</li>
                <li>• Ancient scripts and manuscripts</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">Human Origins</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Discover Ethiopia's unique role as the cradle of humanity,
                featuring paleontological finds and evolutionary history.
              </p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• Lucy (Dinkinesh) and human evolution</li>
                <li>• Fossil discoveries and research</li>
                <li>• Early human settlements</li>
                <li>• Interactive evolutionary timeline</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">
                Religious Heritage
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Ethiopia's unique Christian and Islamic traditions, ancient
                manuscripts, and religious art through the centuries.
              </p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• Ethiopian Orthodox Christianity</li>
                <li>• Islamic heritage and mosques</li>
                <li>• Illuminated manuscripts</li>
                <li>• Religious festivals and traditions</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 hover:border-[#c8a882]/50 transition-colors">
              <h3 className="font-playfair text-2xl mb-4">Modern Ethiopia</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                From resistance to colonialism to contemporary nation-building,
                exploring Ethiopia's unique path to modernity.
              </p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• Battle of Adwa and independence</li>
                <li>• Imperial era and modernization</li>
                <li>• Contemporary development</li>
                <li>• Ethiopian diaspora contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Galleries Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Unity in Diversity
            </p>
            <h2 className="font-playfair text-black mb-8">
              Regional Galleries
            </h2>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Dedicated spaces celebrating the unique culture, traditions, and
              contributions of each Ethiopian region.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Tigray",
              "Afar",
              "Amhara",
              "Oromia",
              "Somali",
              "Benishangul-Gumuz",
              "SNNPR",
              "Gambela",
              "Harari",
              "Dire Dawa",
              "Addis Ababa",
              "Sidama",
            ].map((region) => (
              <div
                key={region}
                className="p-6 border border-black/10 hover:border-[#c8a882]/50 transition-colors text-center group"
              >
                <h4 className="font-playfair text-lg mb-2 group-hover:text-[#c8a882] transition-colors">
                  {region}
                </h4>
                <p className="text-black/60 text-sm">
                  Cultural artifacts, traditional dress, music, and stories
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-black/70 leading-relaxed max-w-3xl mx-auto">
              Each gallery features authentic artifacts, traditional clothing
              and textiles, musical instruments, photographs, and video
              documentaries celebrating the region's unique identity and
              contributions to Ethiopia's rich cultural mosaic.
            </p>
          </div>
        </div>
      </section>

      {/* Contemporary Art Section */}
      <section className="relative py-32 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
                Living Culture
              </p>
              <h2 className="font-playfair text-white mb-6">
                Contemporary Art & Expression
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Ethiopian culture is not static—it's vibrant, evolving, and
                constantly creating. Our contemporary art spaces showcase the
                work of modern Ethiopian and African artists.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Rotating exhibitions feature painting, sculpture, photography,
                digital art, and multimedia installations that explore themes of
                identity, urbanization, tradition, and innovation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a882] text-xl">•</span>
                  <span className="text-white/80">
                    Quarterly rotating exhibitions
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a882] text-xl">•</span>
                  <span className="text-white/80">
                    Artist residency programs
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a882] text-xl">•</span>
                  <span className="text-white/80">
                    Educational workshops and talks
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c8a882] text-xl">•</span>
                  <span className="text-white/80">
                    Emerging artist showcases
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-transparent h-[500px] flex items-center justify-center border border-white/10">
              <div className="text-center text-white/40 text-sm uppercase tracking-wider">
                Gallery Space
                <br />
                <span className="text-xs">(Visualization Placeholder)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Culture Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-[#2d5a3d]/10 to-[#8b3a3a]/10 h-[500px] flex items-center justify-center">
              <div className="text-center text-black/40 text-sm uppercase tracking-wider">
                Coffee Ceremony
                <br />
                <span className="text-xs">(Image Placeholder)</span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
                Cultural Experience
              </p>
              <h2 className="font-playfair text-black mb-6">
                Ethiopian Coffee Culture
              </h2>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Ethiopia is the birthplace of coffee, and the traditional coffee
                ceremony is a cornerstone of Ethiopian culture and hospitality.
              </p>
              <p className="text-black/70 text-lg leading-relaxed mb-6">
                Grand Mesob Tower features an authentic coffee house where
                visitors can experience the full traditional ceremony—from
                roasting green beans over charcoal to the three rounds of coffee
                serving: abol, tona, and baraka.
              </p>
              <p className="text-black/70 text-lg leading-relaxed">
                This isn't just coffee—it's a social ritual, a moment of
                community, and a celebration of one of Ethiopia's greatest gifts
                to the world. The space also educates visitors about Ethiopia's
                diverse coffee regions and unique coffee varieties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#2d5a3d] to-[#1a3a2a] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl mb-6">
            Experience Ethiopia's Story
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Visit Grand Mesob Tower to immerse yourself in thousands of years of
            culture, heritage, and living traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/experiences"
              className="px-8 py-4 bg-white text-black hover:bg-[#c8a882] transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
