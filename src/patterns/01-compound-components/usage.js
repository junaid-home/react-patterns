import Form from "./pattern";

export default function Comp() {
  const handleFormSubmission = (values) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleFormSubmission}>
      <Form.Input name="username" placeholder="username" type="text" />
      <Form.Input name="password" placeholder="password" type="password" />
      <Form.Button>Login</Form.Button>
    </Form>
  );
}
