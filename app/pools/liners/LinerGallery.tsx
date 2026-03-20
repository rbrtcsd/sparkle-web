'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LinerPattern {
  name: string;
  image: string;
  collection: string;
  tier?: string;
}

const COLLECTIONS = ['All', 'Tile & Floor', 'All Over', 'Solid', 'Specialty'];

const TIER_COLORS: Record<string, string> = {
  'Value Max': 'bg-emerald-500 text-white',
  'Super Value Max': 'bg-amber-500 text-white',
  'Aqua Intense': 'bg-blue-600 text-white',
  'Aqua Max': 'bg-cyan-600 text-white',
};

const patterns: LinerPattern[] = [
  // Tile & Floor combinations
  { name: 'Aster Tile / Ocean Breeze Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Aster-Ocean-Breeze.jpg', collection: 'Tile & Floor' },
  { name: 'Atlantic Stone / Sea Slate', image: 'https://merlinindustries.com/wp-content/uploads/2023/09/Atlantic-stone-2.jpg', collection: 'Tile & Floor' },
  { name: 'Blue Trinidad Tile / Jamaica Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Blue-Trinidad-Jamaica-2.jpg', collection: 'Tile & Floor' },
  { name: 'Cape Elizabeth Tile / Oceanside Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Cape-Elizabeth-Oceanside.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Caswell Beach Tile / Sandy Point Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Caswell-Beach-Sandy-Point-AquaIntense.jpg', collection: 'Tile & Floor', tier: 'Aqua Intense' },
  { name: 'Celestial Stone / Island Clouds', image: 'https://merlinindustries.com/wp-content/uploads/2025/12/Carlotta-6.5-White-Maui-PRINT.jpg', collection: 'Tile & Floor', tier: 'Aqua Max' },
  { name: 'Corolla Beach Tile / Outer Banks Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Corolla-Beach-Outer-Banks.jpg', collection: 'Tile & Floor' },
  { name: 'Diamond Cliff Tile / Blue Pointe Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Diamond-Cliff-Blue-Pointe.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Eagle Beach Tile / Gold Coast Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/Pedra-Fe-Del-Caribe-Tan-1.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Horizon Tide / Gold Coast Floor', image: 'https://merlinindustries.com/wp-content/uploads/2025/12/HorizonTide_Del-Caribe_Tan-1-scaled.jpg', collection: 'Tile & Floor' },
  { name: 'Jamaica Tile / Jamaica Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Jamaica-Jamaica-2.jpg', collection: 'Tile & Floor' },
  { name: 'Key Largo Tile / Blue Lagoon Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Key-Largo-Blue-Lagoon.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Luxe Gemstone Tile / Ocean Breeze Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Luxe-Gemstone-Ocean-Breeze.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Marco Island Tile / Morro Bay Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Marco-Island-Morro-Bay.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Milos Tile / Blue Pointe Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/Milos-Blue-Pointe.jpg', collection: 'Tile & Floor', tier: 'Aqua Intense' },
  { name: 'New Hampton Bays Tile / Sierra Floor', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/New-Hampton-Bays-Sierra-1.jpg', collection: 'Tile & Floor', tier: 'Super Value Max' },
  { name: 'New Key Largo Tile / Sierra Floor', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/New-Key-Largo-Sierra-1.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Pacific Tile / Sea Slate Floor', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/Pacific-Tile-Sea-Slate.jpg', collection: 'Tile & Floor' },
  { name: 'Palmetto Bay Tile / Brava Beach Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Palmetto-Bay-Brava-Beach-AquaMax.jpg', collection: 'Tile & Floor', tier: 'Aqua Max' },
  { name: 'Royal Island Tile / Sea Storm Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Royal-Island-Sea-Storm.jpg', collection: 'Tile & Floor' },
  { name: 'Sandy Cay Tile / Runaway Bay Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Sandy-Cay-Runaway-Bay.jpg', collection: 'Tile & Floor', tier: 'Value Max' },
  { name: 'Sanibel Tile / Highland Beach Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Sanibel-Highland-Beach.jpg', collection: 'Tile & Floor' },
  { name: 'Santa Maria Tile / Blue Cove Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Santa-Maria-Blue-Cove.jpg', collection: 'Tile & Floor', tier: 'Aqua Max' },
  { name: 'Sea Blossom Tile / Blue Pointe Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Sea-Blossom-Blue-Pointe.jpg', collection: 'Tile & Floor' },
  { name: 'Serene Tile / Honey Pearl Floor', image: 'https://merlinindustries.com/wp-content/uploads/2023/09/Serene-Honey-Pearl.png', collection: 'Tile & Floor' },
  { name: 'Thistle Bloom Tile / Highland Beach Floor', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/Sanna-Tile-Highland-Beach.jpg', collection: 'Tile & Floor' },
  { name: 'Valencia Tile / Ocean Mist Floor', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Valencia-Ocean-Mist.jpg', collection: 'Tile & Floor' },
  { name: 'Water Lily Tile / Ocean Mist Floor', image: 'https://merlinindustries.com/wp-content/uploads/2023/09/Water-Lily-Ocean-Mist.jpg', collection: 'Tile & Floor' },

  // All Over patterns
  { name: 'Blue Lapis', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/Blue-Lapis.jpg', collection: 'All Over', tier: 'Aqua Intense' },
  { name: 'Blue Quartz', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Blue-Quartz.jpg', collection: 'All Over', tier: 'Aqua Intense' },
  { name: 'Holden Beach', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Holden-Beach-All-Over-AquaIntense.jpg', collection: 'All Over', tier: 'Aqua Intense' },
  { name: 'Honeycomb Mosaic', image: 'https://merlinindustries.com/wp-content/uploads/2023/01/Honeycomb-Mosaic.jpg', collection: 'All Over', tier: 'Aqua Intense' },
  { name: 'Island Beaches', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Island-Beaches.jpg', collection: 'All Over' },
  { name: 'Island Granite', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/Updated-Island-Granite.jpg', collection: 'All Over' },
  { name: 'Island Nights', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/Island-Nights-1.jpg', collection: 'All Over' },
  { name: 'Island Onyx', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Island-Onyx.jpg', collection: 'All Over' },
  { name: 'Island Waves', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/Island-Waves-1.jpg', collection: 'All Over', tier: 'Aqua Max' },
  { name: 'Lake Como', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Lake-Como.jpg', collection: 'All Over' },
  { name: 'Shelter Cove', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Shelter-Cove-All-Over-AquaIntense.jpg', collection: 'All Over', tier: 'Aqua Intense' },
  { name: 'Stone Jewel', image: 'https://merlinindustries.com/wp-content/uploads/2022/08/ns_Stone-Jewel_small.jpg', collection: 'All Over', tier: 'Super Value Max' },
  { name: 'Terracina', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/Terracina-1.jpg', collection: 'All Over', tier: 'Aqua Intense' },

  // Specialty
  { name: 'Lavender Haze', image: 'https://merlinindustries.com/wp-content/uploads/2025/12/Lavendar-Haze-without-bluesilver-strong.jpg', collection: 'Specialty' },
  { name: 'Mediterranean Mist', image: 'https://merlinindustries.com/wp-content/uploads/2025/12/Gladstone-AquaMax-PRINT.jpg', collection: 'Specialty', tier: 'Aqua Max' },
  { name: 'Midnight Opal', image: 'https://merlinindustries.com/wp-content/uploads/2025/12/thumbnail_Midnight-Opal-scaled.jpg', collection: 'Specialty', tier: 'Aqua Intense' },
  { name: 'Moonstone Bay', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/moonstone-bay_th.jpg', collection: 'Specialty', tier: 'Aqua Intense' },
  { name: 'Starlight Swirl', image: 'https://merlinindustries.com/wp-content/uploads/2025/06/starlight-swirl-2.jpg', collection: 'Specialty', tier: 'Aqua Intense' },

  // Solids
  { name: 'Solid Black', image: 'https://merlinindustries.com/wp-content/uploads/2022/11/solid-black.jpg', collection: 'Solid' },
  { name: 'Solid Blue', image: 'https://merlinindustries.com/wp-content/uploads/2022/11/solid-blue.jpg', collection: 'Solid' },
  { name: 'Solid Dark Blue', image: 'https://merlinindustries.com/wp-content/uploads/2022/11/solid-dark-blue.jpg', collection: 'Solid' },
  { name: 'Solid Dark Gray', image: 'https://merlinindustries.com/wp-content/uploads/2022/11/solid-dark-gray.jpg', collection: 'Solid' },
  { name: 'Solid Light Blue', image: 'https://merlinindustries.com/wp-content/uploads/2022/11/solid-dark-light.jpg', collection: 'Solid' },
  { name: 'Solid Light Gray', image: 'https://merlinindustries.com/wp-content/uploads/2022/11/solid-light-gray.jpg', collection: 'Solid' },
  { name: 'Solid White', image: 'https://merlinindustries.com/wp-content/uploads/2022/11/solid-white.jpg', collection: 'Solid' },
];

export default function LinerGallery() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<LinerPattern | null>(null);

  const filtered = filter === 'All' ? patterns : patterns.filter(p => p.collection === filter);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {COLLECTIONS.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              filter === c
                ? 'bg-[#1b5fa8] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {c}
            <span className="ml-1.5 text-xs opacity-70">
              ({c === 'All' ? patterns.length : patterns.filter(p => p.collection === c).length})
            </span>
          </button>
        ))}
      </div>

      {/* Pattern grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((pattern) => (
          <button
            key={pattern.name}
            onClick={() => setSelected(pattern)}
            className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 text-left"
          >
            <div className="relative aspect-square">
              <img
                src={pattern.image}
                alt={pattern.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {pattern.tier && (
                <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${TIER_COLORS[pattern.tier] || 'bg-slate-600 text-white'}`}>
                  {pattern.tier}
                </span>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{pattern.name}</h3>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{pattern.collection}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{selected.name}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm text-slate-500">{selected.collection}</span>
                  {selected.tier && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${TIER_COLORS[selected.tier] || 'bg-slate-600 text-white'}`}>
                      {selected.tier}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
