import "./numbers.css";
import "./hexanumbers.css";

const HexaNumbers = () => {
  function getRandomHex() {
    const hexaNumbers = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexaNumbers.length);
      color += hexaNumbers[index];
    }

    return color;
  }

  function getNumbers() {
    const arr = [];
    for (let i = 0; i < 32; i++) {
      arr.push(getRandomHex());
    }
    return arr;
  }

  const numbers = getNumbers();

  return (
    <section className="hexa-numbers-container">
      <p className="numbers-title">Hexidecimal colors</p>
      <div className="numbers-grid">
        {numbers.map((number) => {
          return (
            <div
              key={number}
              className="hexa-number-cell"
              style={{ backgroundColor: getRandomHex() }}
            >
              {number}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default HexaNumbers;
