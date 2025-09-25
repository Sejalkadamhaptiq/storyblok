"use client";

import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import type { FeatureBlok } from "@/types/storyblok";

const Feature = ({ blok }: { blok: FeatureBlok }) => {
  const { icon, description, heading_text_color, background_color, padding } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className={`flex items-center gap-4 border rounded-md ${padding || "p-4"}`}
      style={{ backgroundColor: background_color?.color }}
    >
      {icon?.filename && (
        <img
          src={icon.filename}
          alt={icon.alt || "Feature Icon"}
          className="w-12 h-12"
        />
      )}

      <div>
        {description && (
          <div
            style={{ color: heading_text_color?.color || "inherit" }}
            className="text-base"
          >
            {render(description)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature;
