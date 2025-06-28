import { useEffect, useState } from "react";
import CountriesListShimmer from "./CountriesListShimmer";
import CountryCard from "./CountryCard";
const CountryList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,borders,tld,currencies,languages"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }
  return (
    <div className="countries-container">
      {countriesData
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        )
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              region={country.region}
              capital={country.capital?.[0]}
              population={country.population}
              flag={country.flags.svg}
              data={country}
            />
          );
        })}
    </div>
  );
};

export default CountryList;
