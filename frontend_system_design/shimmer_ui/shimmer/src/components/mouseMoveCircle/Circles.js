import "./styles.css";

const Circle = ({ x, y, bgColor, id }) => {
  return (
    <div
      className="circle"
      style={{
        top: `${y - 12}px`,
        left: `${x - 12}px`,
        backgroundColor: bgColor,
      }}
    />
  );
};

const Circles = ({ circles }) => {
  return circles.map((circle) => <Circle key={circle.id} {...circle} />);
};
export default Circles;
