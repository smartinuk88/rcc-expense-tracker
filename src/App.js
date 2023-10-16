import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "House Insurance",
      amount: 293.99,
      date: new Date(2023, 2, 23),
    },
    {
      title: "Office Desk",
      amount: 450,
      date: new Date(2023, 3, 15),
    },
    {
      title: "Office Chair",
      amount: 74.99,
      date: new Date(2023, 3, 15),
    },
    {
      title: "Cat Insurance",
      amount: 110,
      date: new Date(2023, 4, 7),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
