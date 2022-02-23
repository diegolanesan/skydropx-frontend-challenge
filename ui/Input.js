import {ErrorMessage, Field} from 'formik';

const Input = ({placeholder, name, ...props}) => {
  return (
    <div className="flex flex-col">
      <Field
        className="p-2 rounded border border-gray-400"
        type="text"
        name={name}
        placeholder={placeholder}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-left text-red-500"
      />
    </div>
  );
};

export default Input;
