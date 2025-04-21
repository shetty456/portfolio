import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Posts | Product Management Insights",
  description:
    "Collection of my LinkedIn posts on product management, user experience, and product strategy.",
};

// This would typically come from LinkedIn API or a CMS
const linkedinPosts = [
  {
    id: 1,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7319045617597431808?collapsed=1",
    height: 604,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7319390038218153984?collapsed=1",
    height: 265,
  },
];

export default function LinkedInPosts() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          LinkedIn Posts
        </h1>
        <p className="text-gray-600 mb-8">
          Insights and thoughts shared on LinkedIn about product management,
          user experience, and product strategy.
        </p>

        <div className="space-y-6">
          <div className="flex flex-col items-center gap-6">
            {linkedinPosts.map((post) => (
              <div
                key={post.id}
                className="w-full max-w-[504px] overflow-hidden rounded-lg shadow-sm"
                style={{ height: post.height }}
              >
                <iframe
                  src={post.url}
                  height={post.height}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Embedded post"
                  className="w-full h-full"
                  scrolling="no"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
