import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';


import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { Form, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    number: yup.string().min(7, 'must be at least 7 characters long').required('Number is required'),
  }).required();

  // const onSubmit = data => console.log(data);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset } = useForm({
      defaultValues: {
      name: '',
      number: '',
  },
   resolver: yupResolver(schema),

  mode: "onSubmit",
});

  const onSubmit = (event) => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === event.name.toLowerCase()) {
        toast.error(`The entered ${event.name} already exists in contacts! Please enter another name!`);
       return;
      };

      if (contact.number === event.number) {
        toast.error(`The entered ${event.number} already exists in contacts! Please enter another number!`);
       return;
      };
  }

    dispatch(addContact(event));
    console.log(event)

      reset();
  }


    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        variant="outlined"
        sx={{ width: '65ch' }}
        error={!!errors.name?.message}
        id="outlined-error"
        helperText={errors.name?.message}
        {...register("name")}
        placeholder="Vitaliy Meshechek"
        required

      />
      <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          sx={{ width: '65ch', margin: '20px'}}
          error={!!errors.number?.message}
          helperText={errors.number?.message}
          {...register("number")}
          placeholder="283-34-54"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />


      <Button type="submit">Add contact</Button>
    </Form>
    );
}
        // {errors.number && <p>Fields must be filled!</p>}
      // {errors.name && <p>Fields must be filled!</p>}





























// const [name, setName] = useState('');
// const [number, setNumber] = useState('');

// const handleChange = event => {
//   const { name, value } = event.currentTarget;

//   switch (name) {
//     case 'name':
//       setName(value);
//       break;

//     case 'number':
//       setNumber(value);
//       break;

//     default:
//       return;
//   }
// };



// const checkName = name => {
//   console.log('name', name);
//   return contacts.find(
//     contact => contact.name.toLowerCase() === name.toLowerCase(),
//   );
// };

// const checkNumber = number => {
//   return contacts.find(contact => contact.number === number);
// };

// const handleSubmit = e => {
//   e.preventDefault();

//   if (checkName(name)) {
//     alert(`${name} is already in contacts`);
//   } else if (checkNumber(number)) {
//     alert(`${number} is already in your contacts!`);
//   } else {
//     dispatch(addContact(name, number));
//   }

// };
