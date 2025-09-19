// src/app/page.tsx

// 1. REMOVE the old imports
// import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";
// import "./lib/storyblok";

// 2. ADD a direct import from your local setup file
import { getStoryblokApi } from "@/lib/storyblok"; // Use correct path if needed
import StoryblokStory from "./components/StoryblokStory";
import type { ISbStoriesParams } from "@storyblok/react/rsc";


export default async function Home() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

export async function fetchData() {
  // This now uses the pre-configured client you exported
  const storyblokApi = getStoryblokApi(); 

  const params: ISbStoriesParams = {
    version: "draft",
  };

  return storyblokApi.get(`cdn/stories/home`, params, { cache: "no-store" });
}