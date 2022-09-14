import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";

const PostFeed = ({ blok }) => {
  const [posts, setPosts] = useState(null);
  const router = useRouter();

  const renderFeed = (stories) => {
    if (typeof router.query.search !== "undefined") {
      const posts = stories.filter((post) => {
        return (
          post.tag_list.includes(router.query.search) &&
          !post.is_startpage &&
          post.full_slug.split("/")[0] === "posts"
        );
      });
      setPosts(posts);
    } else {
      setPosts(
        stories.filter(
          (post) =>
            !post.is_startpage && post.full_slug.split("/")[0] === "posts"
        )
      );
    }
  };

  useEffect(() => {
    const storyblokApi = getStoryblokApi();
    storyblokApi
      .get(`cdn/stories`, {
        version: "draft",
      })
      .then(({ data }) => renderFeed(data.stories));
  }, []);

  return (
    <div {...storyblokEditable(blok)}>
      {posts && (
        <>
          <ul>
            {posts.map((post, index) => {
              return (
                <li key={index}>
                  <Link href={`/posts/${post.slug}`}>
                    <a>
                      <h3>{post.content.title}</h3>
                    </a>
                  </Link>
                  <img src={post.content.image.filename} alt={post.content.image.alt} style={{maxWidth: "200px"}}/>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default PostFeed;
