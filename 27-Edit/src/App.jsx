import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [expenses, setExpenses] = useState(expenseData);
  const [editingRowId, setEditingRowId] = useState('')
  return (
    <main>
      <h2>Track your expences!!</h2>
      <div className="expense-tracker"></div>
      <ExpenseForm
        setExpenses={setExpenses}
        setExpense={setExpense}
        expense={expense}
        editingRowId= {editingRowId}
      />
      <ExpenseTable
        expenses={expenses}
        setExpense={setExpense}
        setExpenses={setExpenses}
        setEditingRowId={setEditingRowId}
      />
    </main>
  );
};

export default App;
