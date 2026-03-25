import type { Metadata } from "next";
import { SITE_NAME, BLOG_POSTS } from "@/lib/constants";
import type { BlogPost } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Aerial advertising tips, proposal planning guides, and event marketing insights for Southern Ontario from Sky Banners.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post }: { post: BlogPost }) {
  const categoryColors: Record<string, string> = {
    Personal: "bg-red/10 text-red",
    Business: "bg-blue/10 text-blue",
    Locations: "bg-green-600/10 text-green-700",
    Education: "bg-purple-600/10 text-purple-700",
  };
  const colorClass = categoryColors[post.category] ?? "bg-red/10 text-red";

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-card-border bg-white hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
            {post.category}
          </span>
          <span className="text-xs text-muted">{post.readTime}</span>
        </div>
        <h2 className="text-xl font-bold text-heading leading-snug mb-3 group-hover:text-red transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-muted leading-relaxed flex-1">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted">{formatDate(post.publishDate)}</span>
          <span className="text-sm font-medium text-red group-hover:underline">Read →</span>
        </div>
      </div>
    </a>
  );
}

// Only show posts with a publishDate on or before today
function getPublishedPosts() {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return BLOG_POSTS.filter((p) => new Date(p.publishDate) <= today).sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70 mb-5">
            {SITE_NAME} Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            Aerial advertising,{" "}
            <span className="text-red">straight from the source</span>
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-xl">
            Guides, data, and ideas for proposals, brand campaigns, and events across Southern Ontario.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted text-lg">Posts coming soon. Check back before season opens.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
