// file: components/Feature.tsx
import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface FeatureBlok extends SbBlokData {
  icon: {
    filename: string;
    alt?: string;
  };
  description: string;
}

const Feature = ({ blok }: { blok: FeatureBlok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex items-center gap-4 p-4 border rounded-md">
      {blok.icon.filename && (
        <img
          src={blok.icon.filename}
          alt={blok.icon.alt || "Feature Icon"}
          className="w-12 h-12"
        />
      )}
      <p>{blok.description}</p>
    </div>
  );
};

export default Feature;
