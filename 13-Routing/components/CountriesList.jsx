// import { useState } from "react";
// import countriesData from "../countriesData";
// import CountryCard from "./CountryCard";
// import "../css/style.css";
// const CountriesList = ({ query }) => {
//   console.log(countriesData);

//   return (
//     <>
//       <div className="countriesContainer">
//         {countriesData
//           .filter((country) =>
//             country.name.common.toLowerCase().includes(query)
//           )
//           .map((country) => {
//             return (
//               <CountryCard
//                 key={country.name.common}
//                 name={country.name.common}
//                 flag={country.flags.svg}
//                 population={country.population}
//                 region={country.region}
//                 capital={country.capital?.[0]}
//               />
//             );
//           })}
//       </div>
//     </>
//   );
// };

// export default CountriesList;

import React, { useEffect, useState } from "react";
// import countriesData from '../countriesData'
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);



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
}
