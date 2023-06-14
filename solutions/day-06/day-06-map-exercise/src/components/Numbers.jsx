import "./numbers.css";

const Numbers = () => {
  const numbers = [];
  for (let i = 0; i < 32; i++) {
    numbers.push(i);
  }

  function getColor() {
    return "grey";
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
