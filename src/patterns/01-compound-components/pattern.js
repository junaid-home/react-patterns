import { useState, createContext, useContext } from "react";

/**********
 * Form Parent Component
 */
const FormContext = createContext(null);
function Form({ children, onSubmit, ...restProps }) {
  const [obj, setObj] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(obj);
  };

  return (
    <form onSubmit={handleSubmit} {...restProps}>
      <FormContext.Provider value={[obj, setObj]}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

/**********
 * FormInput Child Component
 */
function FormInput({ name, ...restProps }) {
  const [values, setValues] = useContext(FormContext);

  if (!name) throw new Error(`name prop is required in FormInput component!`);
  return (
    <input
      name={name}
      value={values[name] || ""}
      onChange={(e) =>
        setValues((prev) => ({ ...prev, [name]: e.target.value }))
      }
      {...restProps}
    />
  );
}

/**********
 * FormButton Child Component
 */
function FormButton({ children, ...restProps }) {
  return (
    <button type="submit" {...restProps}>
      {children}
    </button>
  );
}

/**********
 * Module exports
 */

Form.Input = FormInput;
Form.Button = FormButton;

export default Form;
