import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const day = date.toLocaleString("en-GB", { day: "numeric" });
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
