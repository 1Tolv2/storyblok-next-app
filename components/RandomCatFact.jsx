import React, { useState, useEffect } from "react";
import { storyblokEditable } from "@storyblok/react";

const RandomCatFacts = ({ blok }) => {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setCatFacts(data.slice(0, blok.number_of_facts)));
  }, []);

  return (
    <div {...storyblokEditable(blok)}>
      <h2>Random Cat Facts</h2>
      {catFacts.length > 0 && (
        <>
          <ul>
            {catFacts.map((fact, index) => (
              <li key={index}>{fact.text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RandomCatFacts;
