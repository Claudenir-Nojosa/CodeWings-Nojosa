"use client";

import { Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { MDXProvider } from "@mdx-js/react";
import MDXContent from "@/components/mdx-content";
import { MDXComponents } from "@/components/mdx-components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Blog() {
  const posts = allPosts;
  return (
    <MaxWidthWrapper>
      <h1>Blog posts</h1>
      <div>
        <MDXProvider components={MDXComponents}>
          {posts.map((post) => (
            <div key={post._id}>
              <MDXContent code={post.body.code} />
            </div>
          ))}
        </MDXProvider>
      </div>
    </MaxWidthWrapper>
  );
}
