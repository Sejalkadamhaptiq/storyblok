import Link from 'next/link';
import type { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';

// Helper interface for the color object from Storyblok
interface Color {
  color: string;
}

// 1. UPDATE THE INTERFACE with the new text_color field
interface ButtonProps {
  blok: {
    _uid: string;
    text: string;
    link: {
      url: string;
    };
    text_color: Color; // <-- ADD THIS
  };
}

const Button: FC<ButtonProps> = ({ blok }) => {
  return (
    <Link 
      href={blok.link.url || '#'}
      {...storyblokEditable(blok)} // Add this for visual editor support
    >
      <button
        // 2. REMOVE the hardcoded text color class 'text-[#004E94]'
        className="
          inline-block
          bg-white
          font-bold 
          py-2 
          px-6 
          border 
          border-[#004E94] 
          rounded-sm 
          transition-colors
          hover:bg-gray-200
        "
        // 3. ADD the inline style to apply the color from Storyblok
        style={{ color: blok.text_color?.color }}
      >
        {blok.text}
      </button>
    </Link>
  );
};

export default Button;