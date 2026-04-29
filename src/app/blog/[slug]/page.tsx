import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SITE_NAME } from "@/lib/constants";
import type { BlogSection } from "@/lib/constants";

// Pre-render all slugs at build time
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="text-2xl font-bold text-heading mt-10 mb-4">
          {section.content}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="text-xl font-semibold text-heading mt-8 mb-3">
          {section.content}
        </h3>
      );
    case "p":
      return (
        <p key={index} className="text-foreground/80 leading-relaxed mb-5">
          {section.content}
        </p>
      );
    case "ul":
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 mb-5 text-foreground/80">
          {section.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="list-decimal pl-6 space-y-2 mb-5 text-foreground/80">
          {section.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={index} className="my-6 rounded-xl border-l-4 border-red bg-red/5 p-5">
          <p className="text-sm font-semibold text-heading mb-1">{section.title}</p>
          <p className="text-sm text-foreground/75 leading-relaxed">{section.content}</p>
        </div>
      );
    case "stat":
      return (
        <div key={index} className="my-6 rounded-xl bg-charcoal text-white px-6 py-5 flex items-start gap-4">
          <span className="text-4xl font-black text-red shrink-0">{section.value}</span>
          <div>
            <p className="font-semibold leading-snug">{section.label}</p>
            {section.note && (
              <p className="text-sm text-white/50 mt-1">{section.note}</p>
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const categoryColors: Record<string, string> = {
    Personal: "bg-red/15 text-red",
    Business: "bg-blue/15 text-blue",
    Locations: "bg-green-600/15 text-green-700",
    Education: "bg-purple-600/15 text-purple-700",
  };
  const colorClass = categoryColors[post.category] ?? "bg-red/15 text-red";

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-charcoal text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <a
              href="/blog"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              ← Blog
            </a>
            <span className="text-white/20">/</span>
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-white/60 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
            <span>{SITE_NAME}</span>
            <span>·</span>
            <span>{formatDate(post.publishDate)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.sections.map((section, i) => renderSection(section, i))}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to book a flight?</h2>
          <p className="text-white/60 mb-8">
            Custom quotes are free. We respond within one business day.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-light transition-colors"
          >
            Get a Free Quote →
          </a>
          <p className="mt-4 text-sm text-white/40">
            Season runs May–October · Southern Ontario coverage
          </p>
        </div>
      </section>
    </>
  );
}
