// components/CredentialCard.tsx
import { storyblokEditable,SbBlokData,StoryblokComponent } from "@storyblok/react";
import Image from "next/image";

interface Color {
  color: string;
}


export interface CredentialCardBlok extends SbBlokData {
  image?: {
    filename: string;
    alt?: string;
  };
  Title?: string;
  subtitle?: string;
  linkview: SbBlokData[];
  title_color:Color;
  subtitle_color:Color;
}

interface CredentialCardProps {
  blok: CredentialCardBlok;
}
const CredentialCard = ({ blok }: CredentialCardProps) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-col max-w-[1349px] items-start gap-[16px] text-center text-white"
    >
      {/* Credential Image */}
      {blok.image?.filename && (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || "Credential Logo"}
          width={120} // Adjust size as needed
          height={60}  // Adjust size as needed
          className="object-contain"
        />
      )}

      {/* Title and Subtitle */}
      <div className="flex flex-col items-start gap-[2px]">
<h3 className="mt-2 font-bold text-lg leading-6" style={{ color: blok.title_color?.color }}>{blok.Title}</h3>
      <p className="text-md leading-6" style={{ color: blok.subtitle_color?.color }}>{blok.subtitle}</p>
      </div>
      

      {/* Link */}
 <div className="mt-4">
        {blok.linkview?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default CredentialCard;