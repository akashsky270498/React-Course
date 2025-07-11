const Select = ({
  id,
  name,
  label,
  value,
  onChange,
  errors,
  defaultOption,
  options,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="errors">{errors}</p>
    </div>
  );
};

export default Select;
