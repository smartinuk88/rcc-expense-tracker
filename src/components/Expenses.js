import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={filterYearHandler}
        />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
