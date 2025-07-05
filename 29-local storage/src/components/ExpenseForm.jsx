import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  setExpenses,
  expense,
  setExpense,
  editingRowId,
  setEditingRowId,
}) => {
  // const [expense, setExpense] = useState({
  //   title: "",
  //   category: "",
  //   amount: "",
  // });

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter the title" },
      { minLength: 2, message: "Title should be atleast 2 characters long" },
    ],

    category: [{ required: true, message: "Please select a category" }],

    amount: [
      { required: true, message: "Please enter an amount" },
      { pattern: /^\d+(\.\d{1,2})?$/, message: "Amount must be a number" },
    ],
  };

  const validate = (formData) => {
    const errors = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errors[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < 2) {
          errors[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errors[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errors);
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validate(expense);

    if (Object.keys(validateErrors).length) return;

    if (editingRowId) {
      setExpenses((prevExpense) =>
        prevExpense.map((exp) => {
          if (exp.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return exp;
        })
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setEditingRowId("");
      return;
    }

    setExpenses((prevExpense) => [
      ...prevExpense,
      {
        ...expense,
        amount: parseFloat(expense.amount),
        id: crypto.randomUUID(),
      },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        id="title"
        name="title"
        label="Title"
        value={expense.title}
        onChange={handleChange}
        errors={errors.title}
      />
      <Select
        id="category"
        name="category"
        value={expense.category}
        label="Category"
        defaultOption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        onChange={handleChange}
        errors={errors.category}
      />
      <Input
        id="amount"
        name="amount"
        label="Amount"
        value={expense.amount}
        onChange={handleChange}
        errors={errors.amount}
      />
      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
