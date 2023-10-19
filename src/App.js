import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "House Insurance",
      amount: 293.99,
      date: new Date(2023, 2, 23),
    },
    {
      id: "e2",
      title: "Office Desk",
      amount: 450,
      date: new Date(2023, 3, 15),
    },
    {
      id: "e3",
      title: "Office Chair",
      amount: 74.99,
      date: new Date(2023, 3, 15),
    },
    {
      id: "e4",
      title: "Cat Insurance",
      amount: 110,
      date: new Date(2023, 4, 7),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
