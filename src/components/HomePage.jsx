// import Button from "./Button";

import Form from "./Form"

const HomePage = ({ title, greatings }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{greatings}</p>
      {/* <Button name="Push me" />
      <Button name="Add item" />
      <Button name="Delete item" /> */}
      <Form/>
    </>
  );
};
export default HomePage;
