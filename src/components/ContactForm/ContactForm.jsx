import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { contactValidationSchema } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/Contacts/contactsSelectors';
import { addContact, changeContact } from 'redux/Contacts/contactsOperations';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { StyledForm, Input, Label } from './ContactForm.styled';

export const ContactForm = ({ id, value, phone, onClose }) => {
  const [isEditForm, setIsEditForm] = useState(false);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    id && setIsEditForm(true);
  }, [id]);

  
  const handleSubmitForm = ({ name, phone }, { resetForm }) => {
    const newContactAudit = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const editContactAudit = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() && contact.id !== id
    );

    switch (isEditForm) {
      case false:
        if (!newContactAudit) {
          dispatch(addContact({ name, phone }));
          resetForm();
        } else {
          toast.error(`${name} is already in contacts.`);
        }
        break;
      case true:
        if (!editContactAudit) {
          dispatch(changeContact({ id, name, phone }));
          onClose();
          resetForm();
        } else {
          toast.error(`${name} is already in contacts.`);
        }
        break;
      default:
        return;
    }
  };

  return (
    <Formik
      initialValues={{ name: value ?? '', phone: phone ?? '' }}
      onSubmit={handleSubmitForm}
      validationSchema={contactValidationSchema}
      validateOnBlur
    >
      {({ errors, touched, isValid, dirty }) => (
        <StyledForm name={isEditForm ? 'editFrom' : 'contactForm'}>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
            {errors.name && touched.name ? (
              <Box fontSize="xs" color="red" mt={2}>
                {errors.name}
              </Box>
            ) : null}
          </Label>
          <Label htmlFor="phone">
            Phone
            <Input type="tel" name="phone" />
            {errors.phone && touched.phone ? (
              <Box fontSize="xs" color="red" mt={2}>
                {errors.phone}
              </Box>
            ) : null}
          </Label>
          <Button
            type="submit"
            name="button"
            disabled={isLoading || !isValid || !dirty}
          >
            {isEditForm ? 'Save' : 'Add contact'}
          </Button>
          {isEditForm && (
            <Button type="button" name="cancel" onClick={onClose}>
              Cancel
            </Button>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  phone: PropTypes.string,
  onClose: PropTypes.func,
};
