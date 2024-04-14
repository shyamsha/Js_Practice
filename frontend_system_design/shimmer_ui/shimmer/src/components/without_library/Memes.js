import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
function Memes() {
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch("https://meme-api.com/gimme/24");
    const res = await data.json();
    setLoading(false);
    setMeme((memes) => [...memes, ...res.memes]);
  };
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    //scrollY - how much I have scrolled
    // innerHeight - heigh of the window(visible setion)
    // document.body.scrollHeight - total height of the web page
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchData();
    }
  };
  return (
    <div className="flex flex-wrap">
      {meme?.map((item, index) => (
        <MemeCard key={index} item={item} />
      ))}
      {loading && <Shimmer />}
    </div>
  );
}

export default Memes;
