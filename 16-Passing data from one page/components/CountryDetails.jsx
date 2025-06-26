import { useState, useEffect } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import "../css/style2.css";
import Shimmer from "./shimmer";

const CountryDetails = () => {
  const navigate = useNavigate();
  // const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages).join(", "),
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // setCountryData({
        //   name: data.name.common,
        //   nativeName: Object.values(data.name.nativeName)[0].common,
        //   flag: data.flags.svg,
        //   region: data.region,
        //   subregion: data.subregion,
        //   capital: data.capital,
        //   population: data.population,
        //   tid: data.tId,
        //   languages: Object.values(data.languages).join(","),
        //   currencies: Object.values(data.currencies)
        //     .map((currency) => currency.name)
        //     .join(","),
        //   borders: [],
        // });
        // if (!data.borders) {
        //   data.borders = [];
        // }

        // Promise.all(
        //   data.borders.map((border) => {
        //     return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        //       .then((res) => res.json())
        //       .then(([borderCountry]) => borderCountry.name.common);
        //   })
        // ).then((borders) => {
        //   setCountryData((prevState) => ({ ...prevState, borders }));
        // });
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country not found.</div>;
  }

  return !countryData ? (
    <Shimmer />
  ) : (
    <main>
      <div className="countryDetailsContainer">
        <span
          className="backButton"
          onClick={() => {
            navigate(-1);
          }}
        >
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
                <b>Top Level Domain: {countryData.tld}</b>
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
            {countryData.borders.length !== 0 && (
              <p className="borderCountries">
                Border Countries:
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
