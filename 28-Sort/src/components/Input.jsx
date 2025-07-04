const Input = ({ id, value, name, onChange, errors, label }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="errors">{errors}</p>
    </div>
  );
};


export default Input;