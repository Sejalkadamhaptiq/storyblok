import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";
import Image from "next/image";

interface HeroBlok extends SbBlokData {
  headlines: string;
  image: {
    filename: string;
    alt?: string;
  };
}

const Hero = ({ blok }: { blok: HeroBlok }) => {
  return (
    <div {...storyblokEditable(blok)} className="text-center p-12">
      <h1 className="text-4xl font-bold mb-4">{blok.headlines}</h1>
      {blok.image.filename && (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || "Hero Image"}
          className="mx-auto max-w-full h-auto rounded-lg"
          width={800}
          height={400}
        />
      )}
    </div>
  );
};

export default Hero;
