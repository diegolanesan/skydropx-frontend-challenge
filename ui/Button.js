const Button = ({ children, type, ...props }) => {
  return (
    <button
      className="w-full py-2 px-4 my-4 bg-black text-white  border border-black hover:bg-white hover:text-black rounded disabled:cursor-not-allowed"
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
