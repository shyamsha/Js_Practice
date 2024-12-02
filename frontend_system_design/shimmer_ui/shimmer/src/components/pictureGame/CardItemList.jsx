import { Fragment, useState } from "react";
import { CardItem } from "./CardItem";
import GameData from "./app.mock";
import "./styles.css";

export const CardItemList = () => {
  const [cardList, setCardList] = useState([...GameData]);
  const [imageObjArray, setImageObjArray] = useState([]);
  const [images, setImages] = useState(new Set());

  const onClickHandler = (item) => {
    const newData = cardList.map((ele) => {
      if (item.id === ele.id) {
        return { ...ele, isOpen: true };
      }
      return ele;
    });
    setCardList([...newData]);
    if (imageObjArray.length === 0) {
      setImageObjArray([item]);
      return;
    }

    if (imageObjArray[0].name !== item.name) {
      setTimeout(() => {
        const newImageData = cardList.map((ele) => {
          if (ele.isOpen && !images.has(ele.name)) {
            return { ...ele, isOpen: false };
          }

          return ele;
        });
        setImageObjArray([]);
        setCardList([...newImageData]);
      }, 500);
    } else {
      setImages((pervs) => pervs.add(item.name));
      setImageObjArray([]);
    }
  };

  return (
    <div className="picture-container">
      <div className="card-item-list">
        {cardList.map((item) => {
          return (
            <Fragment key={item.id}>
              <CardItem
                item={item}
                image={item.pic}
                onClick={onClickHandler}
                isOpen={item.isOpen}
              />
            </Fragment>
          );
        })}
        {/* {JSON.stringify( picName)} */}
      </div>
    </div>
  );
};
