import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Container, Title, Paragraph } from 'App.styled';



export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const contactsLength = contacts.length;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   return (
     <Container>
       <Title title="Phonebook">Phonebook</Title>
       <ContactForm />
       <Title title="Contact">Contact</Title>
       <Filter />
       {isLoading && !error && <b>Request in progress...</b>}
       {contactsLength > 0 ? (
        <ContactList />
      ) : (
        <Paragraph>Currently your phonebook has no contacts. Please add them.</Paragraph>
      )}
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
     </Container>
   );
}


