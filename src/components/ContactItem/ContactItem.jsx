import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/Contacts/contactsOperations';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Button } from 'components/Button/Button';
import { Item, BtnBox, ContactBox, Name, Number } from './ContactItem.styled';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { Box } from 'components/Box/Box';

export const ContactItem = ({ id, name, phone }) => {
  const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onDeleteContact = () => {
    setIsDeleted(true);
    dispatch(deleteContact(id));
  };

  return (
    <Item deleted={isDeleted}>
      <ContactBox>
        <Box display="flex" alignItems="center" gridGap={2}>
          <FaUser />
          <Name>{name}</Name>
        </Box>
        <Box display="flex" alignItems="center" gridGap={2}>
          <FaPhoneAlt />
          <Number>{phone}</Number>
        </Box>
      </ContactBox>
      <BtnBox>
        <Button type="button" name="edit" onClick={toggleModal}>
          Edit
        </Button>
        <Button type="button" name="delete" onClick={onDeleteContact}>
          Delete
        </Button>
      </BtnBox>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm
            onClose={toggleModal}
            id={id}
            value={name}
            phone={phone}
          />
        </Modal>
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
