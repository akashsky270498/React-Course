const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setExpense,
  expenses,
  setEditingRowId
}) => {
  if (!("left" in menuPosition && "top" in menuPosition)) return null;
  // if (!menuPosition.left) return
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          setEditingRowId(rowId);
          // console.log(foundExpense);
          // setExpense(foundExpense);
          setExpense({ title, category, amount });
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          console.log("Deleting");
          setExpenses((prevExpense) =>
            prevExpense.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
