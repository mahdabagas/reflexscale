const Button = ({ children, type, onClick, className, loading, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`p-2 flex items-center justify-center transition-colors duration-150 ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
