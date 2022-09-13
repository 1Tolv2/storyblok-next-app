import React, { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setCatFact(data[Math.floor(Math.random() * 5)].text));
  }, []);

  return (
    <div className="column feature" {...storyblokEditable(blok)}>
      {catFact}
    </div>
  );
};
export default Feature;
