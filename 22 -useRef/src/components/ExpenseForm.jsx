

import { useRef } from "react";

const ExpenseForm = ({ setExpenses }) => {
  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newExpense = {
  //     title: titleRef.current.value,
  //     category: categoryRef.current.value,
  //     amount: Number(amountRef.current.value),
  //     id: crypto.randomUUID(),
  //   };

  //   setExpenses((prev) => [...prev, newExpense]);

  //   // Clear input values manually
  //   titleRef.current.value = "";
  //   categoryRef.current.value = "";
  //   amountRef.current.value = "";
  // };
  const myRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  console.log("Ref:", titleRef);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      id: crypto.randomUUID(),
    };

    setExpenses((prev) => [...prev, newExpense]);

    //clear input values manually
    (titleRef.current.value = ""),
      (categoryRef.current.value = ""),
      (amountRef.current.value = "");
  };

  return (
    <form ref={myRef} className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" ref={titleRef} />
      </div>

      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select name="category" id="category" ref={categoryRef}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>

      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" ref={amountRef} />
      </div>

      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;