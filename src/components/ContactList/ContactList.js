import PropTypes from "prop-types";

import { ContactItem} from './ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {

  const contacts = useSelector(selectVisibleContacts);


  return (
    <List>
      {contacts.map(({ id, name, phone}) => (
       <ContactItem key={id} id={id} name={name} phone={phone} />
       ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ),
};

