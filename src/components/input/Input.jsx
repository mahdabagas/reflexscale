const Input = ({
  onChange,
  type,
  placeholder,
  disabled,
  required,
  name,
  classname,
  defaultValue,
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        defaultValue={defaultValue}
        className={`rounded-lg p-2 drop-shadow-md ${classname}`}
      />
    </>
  );
};

export default Input;
