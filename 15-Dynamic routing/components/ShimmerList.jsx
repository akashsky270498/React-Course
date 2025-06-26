import "../css/shimmer.css";

const ShimmerList = () => {
  return (
    <div className="countriesContainer">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="shimmer-box"
            style={{
              width: "250px",
              height: "300px",
              borderRadius: "10px",
            }}
          ></div>
        ))}
    </div>
  );
};

export default ShimmerList;
