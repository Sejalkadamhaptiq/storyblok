import { storyblokEditable } from "@storyblok/react/rsc";

export const Feature = ({ blok }) => {
  // Use the color from blok.text_color.color, or fallback to red
  const textColor = blok.text_color?.color ;

  return (
    <div {...storyblokEditable(blok)} className="p-4 text-center">
      <h2
        className="text-2xl font-bold"
        style={{ color: textColor }}  
      >
        {blok.headline}
      </h2>
      <p style={{ color: textColor }}>
        {blok.content}
      </p>
    </div>
  );
};
