// file: src/app/components/BadgesGrid.tsx
"use client";

import { storyblokEditable,StoryblokComponent } from "@storyblok/react";
import type { SbBlokData } from "@storyblok/react/rsc";

interface BadgesGridBlok extends SbBlokData {
  headline: string;
  badges: SbBlokData[];
  cta_button: SbBlokData[];
}

const BadgesGrid = ({ blok }: { blok: BadgesGridBlok }) => {
  return (
    <section 
      {...storyblokEditable(blok)} 
      className="py-16 bg-gray-50 text-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          {blok.headline}
        </h2>

        {/* Responsive Grid for Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {blok.badges?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        {/* Main CTA Button */}
        {blok.cta_button?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
};

export default BadgesGrid;