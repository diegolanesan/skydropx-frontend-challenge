const Container = ({ children }) => {
  return (
    <div className="grid justify-items-center my-16 mx-auto w-4/5 sm:w-full">
      {children}
    </div>
  );
};

export default Container;
