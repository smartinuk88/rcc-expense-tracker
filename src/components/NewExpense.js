import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense({ onAddExpense }) {
  const [formActive, setFormActive] = useState(false);

  const saveExpenseDataHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
      id: Date.now().toString(),
    };

    onAddExpense(formData);
  };

  const activateFormHandler = () => {
    setFormActive(true);
  };

  const deactivateFormHandler = () => {
    setFormActive(false);
  };

  return (
    <div className="new-expense">
      {!formActive && (
        <button onClick={activateFormHandler}>Add New Expense</button>
      )}
      {formActive && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={deactivateFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
