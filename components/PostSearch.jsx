import React, { useState } from "react";
import { useRouter } from "next/router";
import Link  from "next/link";
import { storyblokEditable } from "@storyblok/react";

const PostSearch = ({ blok }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push({ pathname: "/posts", query: { search } });
  };
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{'Search a Post by Tag --> '} <Link href={`/posts/`}>
        <a>{`or see all posts`}</a>
      </Link></h2>

      <form>
        <input
          type="text"
          placeholder={blok.placeholder + "..."}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={handleOnClick}>{blok.button_text}</button>
      </form>
    </div>
  );
};

export default PostSearch;
