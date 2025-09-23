// components/FeatureGrid.tsx
import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";

interface FeatureGridBlok extends SbBlokData {
  heading?: string;
  description?: string;
  credentials?: SbBlokData[];
  heading_text_color: Color; // <-- ADD THIS
  description_text_color: Color; // <-- ADD THIS
  background_color:Color,
  border_color:Color
  
}

// 1. Define the shape of the Storyblok color object
interface Color{
  color: string;
}
interface FeatureGridProps {
  blok: FeatureGridBlok;
}

const FeatureGrid = ({ blok }: FeatureGridProps) => {
  // Define background and border colors based on your design system
  const backgroundColor = blok.background_color?.color || "#FFFFFF"; // Default to white
  const borderColor = blok.border_color?.color || "#000000"; 

  return (
    <section
      {...storyblokEditable(blok)}
      style={{ backgroundColor: backgroundColor,
        borderBottom: `24px solid ${borderColor}`,}}
    >
      {/* Max Width Container */}
      <div className="mx-auto  max-w-[1349px] px-[62px] py-[90px]">
        {/* Main Grid: Stacks on mobile, 2 columns on tablet and up */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-1 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 className="font-titillium font-bold text-3xl leading-tight text-white mb-4" style={{ color: blok.heading_text_color?.color }}>
              {blok.heading}
            </h2>
            <p className="font-sans font-normal text-lg leading-6 text-white"  style={{ color: blok.description_text_color?.color }}>
              {blok.description}
            </p>
          </div>

          {/* Right Column: Credential Cards Grid */}
          <div className="flex flex-row md:flex-row flex-wrap items-start gap-[54px] md:flex-nowrap ">
            {blok.credentials?.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
