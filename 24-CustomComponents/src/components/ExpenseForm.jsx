import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter the title" },
      { minLength: 5, message: "Title should be atleast 5 characters long" },
    ],

    category: [{ required: true, message: "Please select a category" }],

    amount: [{ required: true, message: "Please enter an amount" }],

    email: [
      {required: true, message: "Please enter an email"},
      {pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Please enter a valid email"}
    ]
  };

  const validate = (formData) => {
    const errors = {};

    // if (!formData.title) {
    //   errors.title = "Title is required";
    // }

    // if (!formData.category) {
    //   errors.category = "Please Select a Category";
    // }

    // if (!formData.amount) {
    //   errors.amount = "Amount is required";
    // }

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errors[key] = rule.message
          return true;
        }

        if (rule.minLength && value.length < 5) {
          errors[key] = rule.message
          return true
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errors[key] = rule.message
          return true;
        } 
      })
    })

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
      email: ""
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
      {/* <div className="input-container">
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
      </div> */}
      <Input
        id="title"
        name="title"
        label="Title"
        value={expense.title}
        onChange={handleChange}
        errors={errors.title}
      />
      {/* <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={expense.category}
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
      </div> */}
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
      {/* <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
        <p className="errors">{errors.amount}</p>
      </div> */}
      <Input
        id="amount"
        name="amount"
        label="Amount"
        value={expense.amount}
        onChange={handleChange}
        errors={errors.amount}
      />
      <Input
        id="email"
        name="email"
        label="Email"
        value={expense.email}
        onChange={handleChange}
        errors={errors.email}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
