import React, { useState, useEffect } from "react";
import MemeLCard from "./MemeLCard";
import Wrapper from "./Wrapper";
import Skeleton from "react-loading-skeleton";
import { useTranslation } from "react-i18next";

function MemesL() {
  const [meme, setMeme] = useState(null);
  const { t } = useTranslation(["common"]);
  const fetchData = async () => {
    const data = await fetch("https://meme-api.com/gimme/24");
    const res = await data.json();
    setMeme(null);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {!meme ? (
        <>
          <h4 className="text-center text-2xl font-bold py-5  text-black">
            {t("WELCOME_MSG")}
          </h4>
          <Skeleton
            count={24}
            wrapper={Wrapper}
            width="100%"
            height="100%"
            highlightColor="#f2cb07"
            duration={0.9}
            style={{ display: "flex", flexWrap: "wrap" }}
          />
        </>
      ) : (
        <div className="flex flex-wrap">
          {meme?.map((item, index) => (
            <MemeLCard key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default MemesL;
