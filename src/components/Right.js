export function Right({
  tipAmountPerson,
  totalAmountPerson,
  onSetBill,
  onSetTip,
  handlePeople,
  setTipInput,
  bill,
  tip,
  people,
  tipInput,
}) {
  function handleClick() {
    onSetBill(0);
    onSetTip(0);
    handlePeople(1);
    setTipInput(null);
  }

  return (
    <div className="right-content">
      <div className="rows">
        <Row content="Tip Amount" money={tipAmountPerson} />
        <Row content="Total" money={totalAmountPerson} />

        <div className="div-btn">
          <button
            className={
              bill !== 0 || tip !== 0 || people !== 1 || tipInput !== null
                ? "btn active"
                : "btn"
            }
            onClick={() => handleClick()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ content, money }) {
  console.log(money);
  if (!money || money === Infinity || money < 0) money = 0;

  return (
    <div className="row">
      <div className="tip-amount">
        <p>{content}</p>
        <p>/ person</p>
      </div>

      <p className="dollar">${Math.round(money)}.00</p>
    </div>
  );
}
