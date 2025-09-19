import Link from 'next/link';
import type { FC } from 'react';

// Define the shape of the 'blok' prop using a TypeScript interface
interface ButtonProps {
  blok: {
    text: string;
    link: {
      url: string;
    };
  };
}

// Type the component with React.FC (Functional Component) and the props interface
const Button: FC<ButtonProps> = ({ blok }) => {
  // Assuming blok.link.url gives you the destination path like '/about' or '/contact'
  return (
    <Link href={blok.link.url || '#'}>
      <button className="
        inline-block
        bg-white
        text-[#004E94] 
        font-bold 
        py-2 
        px-6 
        border 
        border-[#004E94] 
        rounded-sm 
        transition-colors
        hover:bg-gray-200
      ">
        {blok.text}
      </button>
    </Link>
  );
};

export default Button;


