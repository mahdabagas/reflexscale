const Input = ({
  onChange,
  type,
  placeholder,
  disabled,
  required,
  name,
  classname,
  defaultValue,
  id,
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        defaultValue={defaultValue}
        className={`rounded-lg p-2 drop-shadow-md bg-white w-full focus:outline-primary ${classname}`}
      />
    </>
  );
};

export default Input;
