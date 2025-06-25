import "../css/shimmer.css";

const Shimmer = () => {
  return (
    <main>
      <div className="countryDetailsContainer">
        <span className="backButton shimmer-box"></span>
        <div className="countryDetails">
          <div className="shimmer-flag shimmer-box"></div>
          <div className="detailsTextContainer">
            <div className="shimmer-title shimmer-box"></div>
            <div className="shimmer-lines">
              {[...Array(8)].map((_, index) => {
                <div key={index} className="shimmer-line shimmer-box"></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shimmer;
