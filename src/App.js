import Expenses from "./components/Expenses";

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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
