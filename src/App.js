import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "House Insurance",
    amount: "293.99",
    date: new Date(2020, 2, 23),
    id: "e1",
  },
  {
    title: "Office Desk",
    amount: "450",
    date: new Date(2019, 3, 15),
    id: "e2",
  },
  {
    title: "Office Chair",
    amount: "74.99",
    date: new Date(2021, 3, 15),
    id: "e3",
  },
  {
    title: "Cat Insurance",
    amount: "110",
    date: new Date(2022, 4, 7),
    id: "e4",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
