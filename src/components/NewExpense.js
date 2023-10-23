import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
      id: Date.now().toString(),
    };

    onAddExpense(formData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
