// file: src/app/components/Badge.tsx

import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import type { SbBlokData } from "@storyblok/react/rsc";

// Define a basic type for the blok, assuming fields exist
interface BadgeBlok extends SbBlokData {
  icon: { filename: string; alt: string };
  title: string;
  description: string;
  link: { cached_url: string; linktype: string; url: string };
}

const Badge = ({ blok }: { blok: BadgeBlok }) => {
  const linkUrl = blok.link?.cached_url || blok.link?.url || "#";

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transition-transform hover:scale-105"
    >
      {blok.icon?.filename && (
        <div className="mb-4 bg-gray-100 p-4 rounded-full"> 
          {/* Note: The hexagon shape in the image uses advanced CSS (clip-path) or an SVG mask. 
              For simplicity, we'll use a rounded container. You can use a hexagonal image directly. */}
          <img src={blok.icon.filename} alt={blok.icon.alt || ''} className="w-16 h-16"/>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{blok.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{blok.description}</p>
      <Link href={linkUrl} className="text-blue-600 font-semibold hover:underline">
        Learn more
      </Link>
    </div>
  );
};

export default Badge;