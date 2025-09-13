import { StoryblokStory } from "@storyblok/react/rsc";
import { RecommendedTour } from "@/components/RecommendedTour";
import { draftMode } from "next/headers";
import { getStoryblokApi } from "@/storyblok";

const fetchToursPage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    // Added bg-slate-100 for a light gray background color
    <main className="py-12 bg-slate-100">
      <div className="container mx-auto bg-sky-50 px-4 text-center">
        <StoryblokStory story={story} />
      </div>

      <div className="grid md:grid-cols-2 bg-sky-50  gap-8 container mx-auto px-4 w-full pt-16">
        {tours.map((tour) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </main>
  );
};
export default ToursPage;