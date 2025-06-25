import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style2.css";

const CountryDetails = () => {
  const navigate = useNavigate();
  const countryName = new URLSearchParams(location.search).get("name");

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log("data: ", data);
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          flag: data.flags.svg,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          population: data.population,
          tid: data.tId,
          languages: Object.values(data.languages).join(","),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(","),
        });
      });
  }, []);
  return countryData === null ? (
    "loading..."
  ) : (
    <main>
      <div className="countryDetailsContainer">
        <span className="backButton" onClick={() => {navigate(-1)}}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="countryDetails">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="detailsTextContainer">
            <h2>{countryData.name}</h2>
            <div className="detailsText">
              <p>
                <b>Native name: {countryData.nativeName}</b>
                <span className="nativeName"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub-region: {countryData.subregion}</b>
                <span className="sunregion"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tId}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
