import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Container, Label, Input, Button } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();


  const onSubmit = event => {
    dispatch(
      logIn({
        email: event.email,
        password: event.password,
      })
    );
    reset();
  };



  const {
    register,
    handleSubmit,
    reset } = useForm({
      defaultValues: {
        email: '',
        password: '',
  },
});


  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Container>
      <Label>
        Email
      </Label>
        <Input {...register("email")} type="email" name="email" />
      <Label>
        Password
      </Label>
        <Input {...register("password")} type="password" name="password" />
        </Container>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
