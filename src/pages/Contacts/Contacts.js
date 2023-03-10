import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { selectError } from 'redux/contacts/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { Container, Title, Paragraph } from './Contacts.styled';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
  </Container>
  );
}
