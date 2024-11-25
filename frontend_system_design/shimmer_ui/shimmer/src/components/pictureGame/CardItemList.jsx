import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import GameData from "./app.mock";
import "./styles.css";

export const CardItemList = () => {
  const [cardList, setCardList] = useState([...GameData]);
  const [imageObjArray, setImageObjArray] = useState([]);

  const onClickHandler = (currentId) => {
    let newData = cardList.map((item) => {
      if (currentId === item.id) {
        setImageObjArray((pervs) => [...pervs, item]);
        return { ...item, isOpen: true };
      }
      return item;
    });
    setCardList(newData);
  };
  useEffect(() => {
    if (imageObjArray.length > 1) {
      let newData = cardList.filter((item) => {
        if (!item.isOpen) {
          return item;
        }
      });
      if (imageObjArray[1].name !== imageObjArray[0].name) {
        setTimeout(() => {
          setCardList([...imageObjArray, ...newData]);
          setImageObjArray([]);
        }, 500);
      }
    }
  }, [imageObjArray]);
  // console.log(cardList, imageObjArray);
  return (
    <div className="picture-container">
      <div className="card-item-list">
        {cardList.map((item) => {
          return (
            <CardItem
              key={item.id}
              id={item.id}
              image={item.pic}
              onClick={onClickHandler}
              isOpen={item.isOpen}
            ></CardItem>
          );
        })}
        {/* {JSON.stringify( picName)} */}
      </div>
    </div>
  );
};
