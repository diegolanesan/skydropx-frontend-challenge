const Button = ({children, type, ...props}) => {
  return (
    <button
      className="py-2 px-4 my-4 w-full text-white hover:text-black  bg-black hover:bg-white rounded border border-black shadow-md disabled:cursor-not-allowed"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
