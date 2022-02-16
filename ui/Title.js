const Title = ({ children, ...props }) => {
  return (
    <p className="text-back font-semibold" {...props}>
      {children}
    </p>
  )
}

export default Title
