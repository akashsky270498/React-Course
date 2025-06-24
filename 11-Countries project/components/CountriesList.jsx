import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import "../css/style.css";
const CountriesList = ({ query }) => {
  console.log(countriesData);

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
                capital={country.capital?.[0]}
              />
            );
          })}
      </div>
    </>
  );
};

export default CountriesList;
