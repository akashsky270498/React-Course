import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import ShimmerList from "./ShimmerList";
const CountryList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,borders,tld,nativeName,currencies,languages"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  //Shimmer
  if (countriesData.length === 0) return <ShimmerList />;

  return (
    <>
      <div className="countriesContainer">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
                data={country}
              />
            );
          })}
      </div>
    </>
  );
};

export default CountryList;
