import { Link } from "react-router-dom";

const CountryCard = ({ flag, name, population, region, capital, data }) => {
  return (
    <Link className="countryCard" to={`/${name}`} state={data}>
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
    </Link>
  );
};

export default CountryCard;
