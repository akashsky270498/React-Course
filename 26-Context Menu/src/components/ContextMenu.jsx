const ContextMenu = ({ menuPosition, setMenuPosition, setExpenses, rowId }) => {
 if (!("left" in menuPosition && "top" in menuPosition)) return null;
  return (
    <div className="context-menu"  style={{
        top: `${menuPosition.top}px`,
        left: `${menuPosition.left}px`,
        position: "absolute", // ensure absolute positioning
      }}>
      <div
        onClick={() => {
          console.log("Editiing");
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
