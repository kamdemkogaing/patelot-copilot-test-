const Button = ({
  onClick,
  loading = false,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      onClick={loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`button ${loading ? "loading" : ""}`}
      {...props}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
