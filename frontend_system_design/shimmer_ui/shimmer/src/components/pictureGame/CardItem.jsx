import { blankCard as defaultImage } from "./images";

export const CardItem = ({ isOpen, image, id, onClick }) => {
  const imagePath = isOpen ? image : defaultImage;
  return (
    <div className="card-item" onClick={() => onClick(id)}>
      <img src={imagePath} alt="Image" />
    </div>
  );
};
