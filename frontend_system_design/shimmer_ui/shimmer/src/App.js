import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
function App() {
  const [meme, setMeme] = useState(null);
  const fetchData = async () => {
    const data = await fetch("https://meme-api.com/gimme/24");
    const res = await data.json();
    setMeme(res.memes);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap">
      {!meme ? (
        <Shimmer />
      ) : (
        meme?.map((item, index) => <MemeCard key={index} item={item} />)
      )}
    </div>
  );
}

export default App;
