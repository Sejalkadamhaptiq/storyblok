// src/app/page.tsx

// 1. REMOVE the old imports
// import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";
// import "./lib/storyblok";

// 2. ADD a direct import from your local setup file
// src/app/page.tsx

import { getStoryblokApi } from "@/lib/storyblok";
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
    resolve_relations: "feature_grid.article"
  };

  return storyblokApi.get(`cdn/stories/home`, params, { cache: "no-store" },);
}