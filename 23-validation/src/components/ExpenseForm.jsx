import { useState } from "react";

const ExpenseForm = ({ setExpenses }) => {
  //using JS
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
  //   setExpenses((prevExpenses) => [...prevExpenses, expense]);
  //   e.target.reset();
  // };
  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};

  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  /*
  using different states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenses = { title, category, amount, id: crypto.randomUUID() };

    setExpenses((prevExpenses) => [...prevExpenses, expenses]);
    // e.target.reset(); this will not work
    setTitle("");
    setCategory("");
    setAmount("");
  };
  */

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const errors = {};

    if (!formData.title) {
      errors.title = "Title is required";
    }

    if (!formData.category) {
      errors.category = "Please select a category";
    }

    if (!formData.amount) {
      errors.amount = "Amount is required";
    }

    setErrors(errors);
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate(expense);

    if (Object.keys(validateErrors).length) return;

    setExpenses((prevExpense) => [
      ...prevExpense,
      { ...expense, id: crypto.randomUUID() },
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
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          value={expense.title}
          // onChange={(e) =>
          //   setExpense((prevExpense) => ({
          //     ...prevExpense,
          //     title: e.target.value,
          //   }))
          // }
          onChange={handleChange}
        />
        <p className="errors">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
          value={expense.category}
          // onChange={(e) =>
          //   setExpense((prevExpense) => ({
          //     ...prevExpense,
          //     category: e.target.value,
          //   }))
          // }
          onChange={handleChange}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        <p className="errors">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={amount}
          // onChange={(e) => setAmount(e.target.value)}
          value={expense.amount}
          // onChange={(e) =>
          //   setExpense((prevExpense) => ({
          //     ...prevExpense,
          //     amount: Number(e.target.value),
          //   }))
          // }
          onChange={handleChange}
        />
        <p className="errors">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
