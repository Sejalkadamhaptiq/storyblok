import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// This function now specifically fetches the 'home' story.
const fetchHomePageStory = async () => {
  const client = getStoryblokApi();
  // Fetches the story with the slug 'home' from the root of your stories.
  const response = await client.getStory(`home`, {
    version: "draft",
    resolve_relations:"recommended_tours.tours"
  });

  return response.data.story;
};

// The main page component that calls the fetch function and renders the story.
const HomePage = async () => {
  const story = await fetchHomePageStory();
  return <StoryblokStory story={story} />;
};

export default HomePage;