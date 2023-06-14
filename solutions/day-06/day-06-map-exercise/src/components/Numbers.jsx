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
    <section>
      <p className="numbers-title">Numbers</p>
      <div className="numbers-grid">
        {numbers.map((number) => {
          return (
            <div
              key={number}
              className="number-cell"
              style={{ backgroundColor: getColor(number) }}
            >
              {number}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Numbers;
