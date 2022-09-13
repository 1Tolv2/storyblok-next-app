import React, {useState, useEffect} from 'react'

const RandomCatFact = () => {
      const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setCatFact(data[Math.floor(Math.random() * 5)].text));
  }, []);

  return (
    <p>{catFact}</p>
  )
}

export default RandomCatFact