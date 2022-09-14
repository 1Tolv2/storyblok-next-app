import React from "react";
import {storyblokEditable} from '@storyblok/react'

const BlogPost = ({ blok }) => {
  return (
      <article {...storyblokEditable(blok)}>
        <h2>{blok.title}</h2>
        <img src={blok.image.filename} alt={blok.image.alt} />
        <p style={{maxWidth: "500px"}}>{blok.content}</p>
      </article>
  );
};

export default BlogPost;
