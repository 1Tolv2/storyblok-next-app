import React from "react";
import Link from "next/link";

const FeaturedPosts = ({ blok }) => {
  console.log(blok.posts);

  return (
    <div>
        
      <h2>Featured Posts</h2>
      <ul>
        {blok.posts.map((post, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              <h3 style={{textDecoration: "underline", color: "blue"}}><Link href={`/posts/${post.slug}`}><a>{post.content.title}</a></Link></h3>
              <p>{post.content.content}</p>
              <img src={post.content.image.filename} alt={post.content.image.alt}/>
              <hr/>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturedPosts;
