import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const inputType = props.type ? props.type : "text";
  const inputClasses = `${classes.input} ${props.block && classes.block}`;

  return (
    <input
      type={inputType}
      placeholder={props.placeholder}
      className={inputClasses}
    />
  );
};

export default FormInput;
