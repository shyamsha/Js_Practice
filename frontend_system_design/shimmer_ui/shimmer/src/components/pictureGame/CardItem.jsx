import { blankCard as defaultImage } from "./images";

export const CardItem = ({ isOpen, image, item, onClick }) => {
  const imagePath = isOpen ? image : defaultImage;
  return (
    <div className="card-item" onClick={() => onClick(item)}>
      <img src={imagePath} alt="ImageURL" />
    </div>
  );
};
