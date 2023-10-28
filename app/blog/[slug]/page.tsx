import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import MDXContent from "@/components/mdx-content";
import { Metadata } from "next";

export function generateMetadata({ params: { slug } }: IProps): Metadata {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    return {};
  }

  const { excerpt, title, date } = post;

  const description = excerpt;

  const ogImage = {
    url: `${process.env.HOST}/blog/${slug}/og.png`,
  };

  return {
    title,
    description,
    openGraph: {
      type: "article",
      url: `${process.env.HOST}/blog/${slug}`,
      title,
      description,
      publishedTime: date,
      images: [ogImage],
    },
    twitter: {
      title,
      description,
      images: ogImage,
      card: "summary_large_image",
    },
  };
}
interface IProps {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default async function Page({ params: { slug } }: IProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();
  console.log(post);
  return (
    <>
      <div>
        <article>
          <div>
            <time
              dateTime={post?.date}
              className="uppercase font-bold text-blue-600 text-xs"
            >
              {format(parseISO(post?.date), "MMM dd, yyyy")}
            </time>
            <p>{post.readTime} min read</p>
          </div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div></div>
          <MDXContent code={post.body.code} />
        </article>
      </div>
    </>
  );
}
