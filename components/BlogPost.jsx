import React from "react";

const BlogPost = ({ blok }) => {
  return (
    <div>
      <article>
        <img src={blok.image.filename} alt={blok.image.alt} />
        <p style={{maxWidth: "500px"}}>{blok.content}</p>
      </article>
    </div>
  );
};

export default BlogPost;
