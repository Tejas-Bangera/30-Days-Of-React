import "./world-population.css";
import { countriesData } from "../assets/country-data";

const WorldPopulation = () => {
  const worldTotal = countriesData.reduce((total, { population }) => {
    total += population;
    return total;
  }, 0);

  const sortedPopulation = countriesData.sort(
    (a, b) => b.population - a.population
  );

  const country_pop_list = sortedPopulation.reduce(
    (acc, { name, population }) => {
      acc.push({ name, population });
      return acc;
    },
    []
  );

  country_pop_list.length = 10;

  return (
    <>
      <p className="world-population-title">World Population</p>
      <p className="world-population-info">Ten most populated countries</p>
      <div className="world-population-grid">
        <p className="country-name">World</p>
        <p className="country-graph"></p>
        <p className="country-population">{worldTotal}</p>
        {country_pop_list.map((country) => {
          const widthPercent = (country.population / worldTotal) * 100;
          return (
            <>
              <p className="country-name">{country.name}</p>
              <p
                className="country-graph"
                style={{ width: `${widthPercent}%` }}
              ></p>
              <p className="country-population">{country.population}</p>
            </>
          );
        })}
      </div>
    </>
  );
};
export default WorldPopulation;
