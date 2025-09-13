import { getStoryblokApi } from "@/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

// Generate all dynamic routes at build time
export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

// Fetch storyblok story by slug
const fetchTourPage = async (slug) => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

// Dynamic page
const TourPage = async ({ params }) => {
  const story = await fetchTourPage(params.slug);
  return <StoryblokStory story={story} />;
};

export default TourPage;
