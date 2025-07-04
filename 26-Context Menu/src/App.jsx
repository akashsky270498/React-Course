import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);
  return (
    <main>
      <h2>Track your expences!!</h2>
      <div className="expense-tracker"></div>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
    </main>
  );
};

export default App;
