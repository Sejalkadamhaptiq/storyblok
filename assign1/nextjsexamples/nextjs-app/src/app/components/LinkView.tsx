// components/LinkView.tsx
"use client";

import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import type { SbBlokData } from "@storyblok/react";


interface Color {
  color: string;
}

// Interface for Storyblok's link object
interface LinkField {
  id: string;
  url: string;
  linktype: "url" | "story";
  cached_url: string;
  target?: "_self" | "_blank";
  link_color: Color; 
}

// Interface for the LinkView's data
interface LinkViewBlok extends SbBlokData {
  text: string;
  link_target: LinkField;
}

const LinkView = ({ blok }: { blok: LinkViewBlok }) => {
  if (!blok.link_target?.cached_url) {
    return null;
  }

  return (
    <Link
      href={blok.link_target.cached_url}
      {...storyblokEditable(blok)}
      target={blok.link_target.target}
      rel={blok.link_target.target === "_blank" ? "noopener noreferrer" : ""}
      // --- STYLES UPDATED HERE ---
      className="
        font-sans
        font-bold
        text-lg
        leading-6
        underline
        text-white
        transition
      "
      style={{ color: blok.link_target.link_color?.color }}
    >
      {blok.text}
    </Link>
  );
};

export default LinkView;