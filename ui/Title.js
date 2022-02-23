const Title = ({children, ...props}) => {
  return (
    <p className="font-semibold text-black" {...props}>
      {children}
    </p>
  );
};

export default Title;
