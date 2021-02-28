import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form>
      <Input id="label" label="login" placeholder="Enter login" />
      <Input id="label" label="password" placeholder="Enter your password" />
      <br/>
      <Button name="Submit" />
    </form>
  );
};
export default Form;
