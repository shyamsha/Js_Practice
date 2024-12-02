import { blankCard as defaultImage } from "./images";

export const CardItem = ({ isOpen, image, item, onClick }) => {
  const imagePath = isOpen ? image : defaultImage;
  // console.log(image);
  return (
    <div className="card-item" onClick={() => onClick(item)}>
      <img src={imagePath} alt="Image" />
    </div>
  );
};
