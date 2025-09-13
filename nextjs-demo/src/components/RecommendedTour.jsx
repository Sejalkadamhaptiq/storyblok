import Link from "next/link";

export const RecommendedTour = (props) => {
  return (
    // Added larger rounded corners, a hover effect, and overflow-hidden
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="aspect-video object-cover w-full"
        src={`${props.story.content.main_image.filename}/m/736x414/filters:quality(70)`}
        width={736}
        height={414}
        alt={props.story.content.main_image.alt}
        loading={"lazy"}
      />
      {/* Made the content a flex column for better alignment */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex gap-4 justify-between text-lg font-bold">
          {/* Darkened the title text for emphasis */}
          <h3 className="text-gray-800">{props.story.content.name}</h3>
          <p>
            {Number(props.story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "TWD",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        {/* Softened the location text style */}
        <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
          {props.story.content.location}, Taiwan
        </p>
        {/* Styled the link as a button with a background color */}
        <Link
          className="mt-auto self-start bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-6"
          href={`/${props.story.full_slug}`}
        >
          View Tour
        </Link>
      </div>
    </div>
  );
};