const Input = ({ label, placeholder }) => {
  return (
    <>
    <br/>
      <input placeholder={placeholder} type="text" id={label} />
      <label htmlFor={label}>{label}</label>
    </>
  );
};
export default Input;
