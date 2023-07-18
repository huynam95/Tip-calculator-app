import { Right } from "./components/Right";
import Left from "./components/Left";
import Splitter from "./components/Splitter";

import "./index.css";

import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [tipInput, setTipInput] = useState(null);

  let tipAmountPerson;
  let totalAmountPerson;

  if (!tipInput) {
    tipAmountPerson = (bill * tip) / 100 / people;
    totalAmountPerson = (bill + (bill * tip) / 100) / people;
  } else {
    tipAmountPerson = (bill * tipInput) / 100 / people;
    totalAmountPerson = (bill + (bill * tipInput) / 100) / people;
  }

  function handleBill(value) {
    setBill(value);
  }

  function handleTip(value) {
    setTip(value);
  }

  function handlePeople(value) {
    setPeople(value);
    if (people < 1) setPeople(1);
  }

  return (
    <main>
      <Splitter />
      <Content
        bill={bill}
        onSetBill={handleBill}
        tip={tip}
        onSetTip={handleTip}
        people={people}
        handlePeople={handlePeople}
        tipAmountPerson={tipAmountPerson}
        totalAmountPerson={totalAmountPerson}
        tipInput={tipInput}
        setTipInput={setTipInput}
      />
    </main>
  );
}

function Content({
  bill,
  onSetBill,
  tip,
  onSetTip,
  people,
  handlePeople,
  tipAmountPerson,
  totalAmountPerson,
  tipInput,
  setTipInput,
}) {
  return (
    <div className="main-content grid-2-cols">
      <Left
        bill={bill}
        onSetBill={onSetBill}
        tip={tip}
        onSetTip={onSetTip}
        people={people}
        handlePeople={handlePeople}
        tipInput={tipInput}
        setTipInput={setTipInput}
      />
      <Right
        tipAmountPerson={tipAmountPerson}
        totalAmountPerson={totalAmountPerson}
        onSetBill={onSetBill}
        onSetTip={onSetTip}
        handlePeople={handlePeople}
        setTipInput={setTipInput}
        bill={bill}
        tip={tip}
        people={people}
        tipInput={tipInput}
      />
    </div>
  );
}

export default App;
