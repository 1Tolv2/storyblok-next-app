import React, { useEffect, useState } from "react";

const DadJoke = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  }, []);
  return (
    <div>
      {joke && (
        <>
          <h2>Dad Joke</h2>
          <p>{joke}</p>
        </>
      )}
    </div>
  );
};

export default DadJoke;
