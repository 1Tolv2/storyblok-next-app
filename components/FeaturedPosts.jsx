import React from "react";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

const FeaturedPosts = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>Featured Posts</h2>
      <ul style={{ display: "flex" }}>
        {blok.posts.map((post, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              <h3>
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.content.title}</a>
                </Link>
              </h3>
              <img
                src={post.content.image.filename}
                alt={post.content.image.alt}
                style={{ maxHeight: "200px" }}
              />
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturedPosts;
