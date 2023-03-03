import PropTypes from "prop-types";

import { Button, Item, Data } from "./ContactList.styled";
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations";

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
    <Item key={id}>
      <Data>
        {name} : {phone}
      </Data>
      <Button onClick={onDelete} type="button" name="delete">
        delete
      </Button>
      </Item>
    </>
  );
}


ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
};
