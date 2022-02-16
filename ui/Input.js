import { ErrorMessage, Field } from 'formik'

const Input = ({ placeholder, name, ...props }) => {
  return (
    <div className="flex flex-col">
      <Field
        className="p-2 border border-gray-400 rounded"
        type="text"
        name={name}
        placeholder={placeholder}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-left text-sm"
      />
    </div>
  )
}

export default Input
