import React, { useState } from "react";
import { useRouter } from "next/router";

const PostSearch = ({ blok }) => {
  const [search, setSearch] = useState(null);
  const router = useRouter()

  const handleOnClick = (e) => {
    e.preventDefault()
    router.push({pathname: "/posts", query: {search}})
  }
  return (
    <div>
      <h2>Search a post</h2>
      <form>
        <input type="text" placeholder={blok.placeholder + "..."} onChange={(e)=> setSearch(e.target.value)} value={search}/>
        <button onClick={handleOnClick}>{blok.button_text}</button>
      </form>
    </div>
  );
};

export default PostSearch;
