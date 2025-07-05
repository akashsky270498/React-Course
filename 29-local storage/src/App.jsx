import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import "./App.css";
// import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });

  // const [expenses, setExpenses] = useState(expenseData);
  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId","");

  return (
    <main>
      <h2>Track your expences!!</h2>
      <div className="expense-tracker"></div>
      <ExpenseForm
        setExpenses={setExpenses}
        setExpense={setExpense}
        expense={expense}
        editingRowId={editingRowId}
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
