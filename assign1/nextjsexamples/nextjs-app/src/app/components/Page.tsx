"use client";

import {
  storyblokEditable,
  StoryblokComponent,
  type SbBlokData,
} from "@storyblok/react";

// This interface expects a 'body' field containing an array of blocks
interface getStoryblokApi extends SbBlokData {
  body: SbBlokData[];
}

const Page = ({ blok }: { blok: getStoryblokApi }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {/* This maps over the 'body' array and renders any components inside it */}
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;