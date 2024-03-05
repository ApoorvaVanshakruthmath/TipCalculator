import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSetPerc={setPercentage1}>
        How satisfied are you?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSetPerc={setPercentage2}>
        How satisfied is your friend
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} total={tip} />
          <Reset onreset={handleReset} />
        </>
      )}
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </>
  );
}

function SelectPercentage({ children, percentage, onSetPerc }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPerc(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Awesome(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, total }) {
  return (
    <>
      <h3>
        You have to pay {bill + total} (${bill}+ ${total})
      </h3>
    </>
  );
}

function Reset({ onreset }) {
  return (
    <>
      <button onClick={onreset}>reset</button>
    </>
  );
}

export default App;
