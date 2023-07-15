import Grid from "./Grid";
import "./numbers.css";

const Numbers = () => {
  const numbers = [];
  for (let i = 0; i < 32; i++) {
    numbers.push(i);
  }

  function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }

    return true;
  }

  function getColor(number) {
    if (isPrime(number)) return "rgb(255, 81, 81)";

    return number % 2 === 0 ? "rgb(21, 196, 88)" : "rgb(255, 238, 0)";
  }

  return (
    <Grid title={"Number Grid"} numbers={numbers} utilityFunc={getColor} />
  );
};
export default Numbers;
