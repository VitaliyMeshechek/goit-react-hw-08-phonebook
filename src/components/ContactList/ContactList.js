import PropTypes from "prop-types";

import { ContactItem} from './ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from "redux/contacts/selectors";

export const ContactList = () => {

const contacts = useSelector(selectVisibleContacts);


  return (
    <List>
      {contacts.map(({ id, name, number}) => (
       <ContactItem key={id} id={id} name={name} number={number} />
       ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

