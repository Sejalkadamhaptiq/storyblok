"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import type { SbBlokData } from "@storyblok/react";

// Helper interface for the color object from Storyblok's color picker
interface Color {
  color: string;
}

interface Asset {
  filename: string;
  alt: string;
}

// Interface (as provided in your request)
interface SecondaryBannerPageBlok extends SbBlokData {
  headline: string;
  description: string;
  background_desktop: Asset;
  background_tablet: Asset;
  background_mobile: Asset;
  button_blok: SbBlokData[];
  heading_text_color: Color;
  description_text_color: Color;
}

const SecondaryBannerPage = ({ blok }: { blok: SecondaryBannerPageBlok }) => {
  return (
    <section
      // REMOVED: max-w-[1349px]
      className="relative mx-auto overflow-hidden" // The 'mx-auto' will center it if there's available space, but it won't limit the max-width anymore.
      {...storyblokEditable(blok)}
    >
      {/* Background Images Layer (UPDATED with Next.js Image) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        {blok.background_mobile?.filename && (
          <Image
            src={blok.background_mobile.filename}
            alt={blok.background_mobile.alt || "Background"}
            fill
            className="block object-cover md:hidden"
          />
        )}
        {/* Tablet Background */}
        {blok.background_tablet?.filename && (
          <Image
            src={blok.background_tablet.filename}
            alt={blok.background_tablet.alt || "Background"}
            fill
            className="hidden object-cover md:block lg:hidden"
          />
        )}
        {/* Desktop Background */}
        {blok.background_desktop?.filename && (
          <Image
            src={blok.background_desktop.filename}
            alt={blok.background_desktop.alt || "Background"}
            fill
            className="hidden object-cover lg:block"
            priority // Prioritize loading this image for better LCP
          />
        )}
      </div>

      {/* Blue Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-[#0D2C6B]/80"></div>

      {/* Content Layer */}
      <div className="relative z-20 flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
        {/* Headline */}
        <span
          className="font-titillium font-bold text-[40px] leading-[48px] mb-4 text-center"
          style={{ color: blok.heading_text_color?.color }}
        >
          {blok.headline}
        </span>

        {/* Description */}
        <p
          className="font-arial font-normal text-[18px] mb-6 leading-[24px] text-center"
          style={{ color: blok.description_text_color?.color }}
        >
          {blok.description}
        </p>

        {/* Button Container */}
        <div>
          {blok.button_blok?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryBannerPage;