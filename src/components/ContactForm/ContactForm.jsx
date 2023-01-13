import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
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

  const phoneRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Required')
      .min(1, 'Too Short! Min 1 symbols!')
      .max(30, 'Too Long! Max 30 symbols!'),
    number: yup
      .string()
      .required('Required')
      .min(6, 'Too Short! Min 6 symbols!')
      .max(20, 'Too Long! Max 20 symbols!')
      .matches(
        phoneRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  const handleSubmitForm = ({ name, number }, { resetForm }) => {
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
          dispatch(addContact({ name, number }));
          resetForm();
        } else {
          toast.error(`${name} is already in contacts.`);
        }
        break;
      case true:
        if (!editContactAudit) {
          dispatch(changeContact({ id, name, number }));
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
      initialValues={{ name: value ?? '', number: phone ?? '' }}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
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
          <Label htmlFor="number">
            Number
            <Input type="tel" name="number" />
            {errors.number && touched.number ? (
              <Box fontSize="xs" color="red" mt={2}>
                {errors.number}
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
