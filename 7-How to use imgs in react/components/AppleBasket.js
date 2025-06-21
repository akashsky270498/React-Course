const AppleBasket = ({ appleCount, basketName, basketClass }) => {
  return (
    <div className= {basketClass}>
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{basketName}</p>
    </div>
  );
};


export default AppleBasket;