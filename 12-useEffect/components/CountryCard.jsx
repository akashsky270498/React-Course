import "../css/style.css"

const CountryCard = ({ name, flag, population, region, capital }) => {
  return (
    <a href={`/country.html?name=${name.common}`} className="countryCard">
      <img src={flag} alt={`${name} flag`} />
      <div className="cardText">
        <h3 className="cardTitle">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </a>
  );
};

export default CountryCard;
