import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { registerUser } from "redux/auth/operations";
import { Form, Container, Label, Input, Button } from "./RegisterForm.styled";


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset } = useForm({
      defaultValues: {
        name: '',
        email: '',
        password: '',
  }
});

  const onSubmit = event => {
    if (!event.name.trim() || !event.email.trim() || !event.password.trim()) {
      return toast.error('All fields must be filled!');
    } else if (event.password.length < 8) {
      return toast.info(
        'The password should be least at 8 characters long, it must contain uppercase and lowercase letters and numbers!',
      );
    }
    dispatch(registerUser({
      name: event.name,
      email: event.email,
      password: event.password,
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
        </Container>
      <Button type="submit">Register</Button>
    </Form>
  );
};
