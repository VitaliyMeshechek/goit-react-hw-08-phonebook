import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { registerUser } from "redux/auth/operations";
import { Form, Container, Label, Input, Button } from "./RegisterForm.styled";


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset } = useForm({
      defaultValues: {
        name: '',
        email: '',
        password: '',
        // file: '',
  }
});

  const onSubmit = event => {
    dispatch(registerUser({
      name: event.name,
      email: event.email,
      password: event.password,
      // file: event.file,
    }));
    reset();
  };



  return (
    <Form  onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Container>
      <Label>
        Username
      </Label>
        <Input {...register("name")} type="text" name="name" />
      <Label>
        Email
      </Label>
        <Input {...register("email")} type="email" name="email" />
      <Label>
        Password
      </Label>
        <Input {...register("password")} type="password" name="password" />
        {/* <Label>
        File
      </Label>
        <Input {...register("file")} type="file" name="file" /> */}
        </Container>
      <Button type="submit">Register</Button>
    </Form>
  );
};
