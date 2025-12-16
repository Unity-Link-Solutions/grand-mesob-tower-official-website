'use client';

import { useEffect, useState, useRef } from 'react';

interface FloorCluster {
  id: string;
  name: string;
  floors: string;
  description: string;
  height: number; // percentage of total tower height
  color: string;
}

const floorClusters: FloorCluster[] = [
  {
    id: 'foundation',
    name: 'Foundation & Base',
    floors: 'Ground Level',
    description: 'The foundation that will support this architectural marvel, with deep structural systems designed for seismic resilience.',
    height: 5,
    color: '#333333',
  },
  {
    id: 'public',
    name: 'Public Zone',
    floors: 'Floors 1-14',
    description: 'Grand entrance lobby, retail spaces, cafes and restaurants, visitor center, and public gathering areas.',
    height: 15,
    color: '#c8a882',
  },
  {
    id: 'cultural',
    name: 'Cultural Zone',
    floors: 'Floors 15-39',
    description: 'Ethiopian heritage museum, regional galleries showcasing all Ethiopian regions, contemporary art exhibitions, and cultural event spaces.',
    height: 25,
    color: '#2d5a3d',
  },
  {
    id: 'business',
    name: 'Business Zone',
    floors: 'Floors 40-69',
    description: 'Grade-A office spaces for international and local companies, financial services, co-working spaces, and business amenities.',
    height: 30,
    color: '#d4a574',
  },
  {
    id: 'hospitality',
    name: 'Hospitality Zone',
    floors: 'Floors 70-89',
    description: 'Luxury hotel suites, spa and wellness facilities, fine dining restaurants, and conference rooms for international guests.',
    height: 20,
    color: '#8b3a3a',
  },
  {
    id: 'sky',
    name: 'Sky Zone',
    floors: 'Floors 90-110+',
    description: 'Observation decks with 360° panoramic views, sky lounges, signature restaurants, and event spaces at the pinnacle of the tower.',
    height: 5,
    color: '#c8a882',
  },
];

export default function TowerBuildAnimation() {
  const [buildProgress, setBuildProgress] = useState(0);
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through this section (0 to 1)
      const scrollStart = rect.top + viewportHeight;
      const scrollEnd = rect.bottom;
      const scrollableDistance = scrollEnd - scrollStart;
      const scrolled = scrollStart - viewportHeight;
      
      let progress = 0;
      if (scrolled < 0) {
        progress = 0;
      } else if (scrolled > scrollableDistance) {
        progress = 1;
      } else {
        progress = scrolled / scrollableDistance;
      }

      setBuildProgress(Math.max(0, Math.min(1, progress)));

      // Determine which cluster is active based on progress
      let cumulativeHeight = 0;
      for (const cluster of floorClusters) {
        cumulativeHeight += cluster.height;
        if (progress * 100 <= cumulativeHeight) {
          setActiveCluster(cluster.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[300vh] bg-black text-white overflow-hidden"
    >
      {/* Fixed viewport for animation */}
      <div className="sticky top-0 h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#c8a882] text-sm uppercase tracking-[0.3em] mb-4">
              Scroll to Build
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl mb-6">
              The Tower Takes Shape
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Scroll down to see how Grand Mesob Tower will rise, layer by layer, 
              each zone designed with purpose and precision.
            </p>
          </div>

          {/* Tower and Labels Container */}
          <div className="relative h-[600px] flex items-end justify-center">
            {/* Ground Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"></div>

            {/* Tower Container - Centered */}
            <div className="relative w-64 h-full flex flex-col justify-end mx-auto">
              {/* Build each floor cluster */}
              {floorClusters.map((cluster, index) => {
                // Calculate cumulative height before this cluster
                const cumulativeHeightBefore = floorClusters
                  .slice(0, index)
                  .reduce((sum, c) => sum + c.height, 0);
                
                // Percentage of this cluster that's built
                let clusterBuildProgress = 0;
                if (buildProgress > cumulativeHeightBefore / 100) {
                  clusterBuildProgress = Math.min(
                    1,
                    (buildProgress - cumulativeHeightBefore / 100) / (cluster.height / 100)
                  );
                }

                const isActive = activeCluster === cluster.id;
                const isLeft = index % 2 === 0; // Alternate left/right
                
                return (
                  <div
                    key={cluster.id}
                    className="relative transition-all duration-500"
                    style={{
                      height: `${cluster.height}%`,
                      opacity: clusterBuildProgress > 0 ? 1 : 0.3,
                      transform: `scaleY(${Math.max(0.01, clusterBuildProgress)})`,
                      transformOrigin: 'bottom',
                    }}
                  >
                    <div
                      className={`h-full border-2 transition-all duration-500 ${
                        isActive 
                          ? 'border-[#c8a882] shadow-lg shadow-[#c8a882]/50 scale-105' 
                          : 'border-white/20'
                      }`}
                      style={{
                        background: `linear-gradient(to top, ${cluster.color}60, ${cluster.color}30)`,
                      }}
                    >
                      {/* Floor lines */}
                      <div className="h-full flex flex-col justify-around px-2">
                        {Array.from({ length: Math.ceil(cluster.height / 5) }).map((_, i) => (
                          <div key={i} className="h-px bg-white/15"></div>
                        ))}
                      </div>
                    </div>

                    {/* Label pointing to this cluster */}
                    {clusterBuildProgress > 0.3 && (
                      <div
                        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
                          isLeft ? '-left-80 xl:-left-96' : '-right-80 xl:-right-96'
                        } ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}
                      >
                        <div className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                          {/* Label Content */}
                          <div className={`${isLeft ? 'text-right' : 'text-left'} max-w-xs`}>
                            <div
                              className="w-12 h-1 mb-2"
                              style={{ 
                                background: cluster.color,
                                marginLeft: isLeft ? 'auto' : '0'
                              }}
                            ></div>
                            <h3 className={`font-playfair text-lg md:text-xl mb-1 ${
                              isActive ? 'text-white' : 'text-white/70'
                            }`}>
                              {cluster.name}
                            </h3>
                            <p className="text-[#c8a882] text-xs uppercase tracking-wider mb-2">
                              {cluster.floors}
                            </p>
                            <p className={`text-sm leading-relaxed ${
                              isActive ? 'text-white/90' : 'text-white/50'
                            }`}>
                              {cluster.description}
                            </p>
                          </div>

                          {/* Connecting Line */}
                          <div 
                            className={`h-px transition-all duration-500 ${
                              isActive ? 'w-16 bg-[#c8a882]' : 'w-12 bg-white/30'
                            }`}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Spire/Top */}
              {buildProgress >= 0.95 && (
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-700"
                  style={{
                    opacity: Math.min(1, (buildProgress - 0.95) / 0.05),
                  }}
                >
                  <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#c8a882]"></div>
                  <div className="w-1 h-8 bg-[#c8a882] mx-auto"></div>
                </div>
              )}

              {/* Progress Indicator - In the middle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="bg-black/90 backdrop-blur-sm border border-[#c8a882]/30 px-6 py-4 rounded-sm">
                  <div className="text-[#c8a882] text-xs uppercase tracking-wider mb-1 text-center">
                    Building Progress
                  </div>
                  <div className="text-white text-5xl font-playfair text-center tabular-nums">
                    {Math.round(buildProgress * 100)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Active Cluster Info Below */}
            <div className="lg:hidden mt-8">
              {floorClusters.map((cluster) => (
                <div
                  key={cluster.id}
                  className={`transition-all duration-500 ${
                    activeCluster === cluster.id
                      ? 'opacity-100 block'
                      : 'opacity-0 absolute pointer-events-none'
                  }`}
                >
                  <div className="text-center max-w-md mx-auto">
                    <div
                      className="w-16 h-1 mb-3 mx-auto"
                      style={{ background: cluster.color }}
                    ></div>
                    <h3 className="font-playfair text-2xl mb-2 text-white">
                      {cluster.name}
                    </h3>
                    <p className="text-[#c8a882] text-xs uppercase tracking-wider mb-3">
                      {cluster.floors}
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      {cluster.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

