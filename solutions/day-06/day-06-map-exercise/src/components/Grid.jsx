const Grid = ({ title, numbers, utilityFunc }) => {
  return (
    <section>
      <p className="numbers-title">{title}</p>
      <div className="numbers-grid">
        {numbers.map((number) => {
          return (
            <div
              key={number}
              className="number-cell"
              style={{
                backgroundColor: utilityFunc(number),
                fontSize: `${title}` === "Number Grid" ? "30px" : "20px",
              }}
            >
              {number}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Grid;
