const Button = ({ children, type, onClick, className, loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 flex items-center justify-center transition-colors duration-150 ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
