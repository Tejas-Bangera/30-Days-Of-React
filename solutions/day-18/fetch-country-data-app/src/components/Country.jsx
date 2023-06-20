import { useState } from "react";
import "../styles/country.css";

const Country = () => {
  const [countryData, setCountryData] = useState([]);

  const getCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const countries = data.reduce((acc, countryObject) => {
      acc.push({
        countryName: countryObject.name.common,
        countryFlag: countryObject.flags.svg,
      });
      return acc;
    }, []);

    // console.log(countryNames);
    setCountryData(countries);
  };

  getCountryData();

  return (
    <div className="country-data-grid">
      {countryData.map(({ countryName, countryFlag }, index) => {
        return (
          <>
            <img src={countryFlag} className="country-flag" alt="Flag" />
            <h3 key={index}>{countryName}</h3>
          </>
        );
      })}
    </div>
  );
};
export default Country;
