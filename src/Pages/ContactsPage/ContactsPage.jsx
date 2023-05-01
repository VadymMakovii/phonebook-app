import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsLoader } from 'components/Loader/Loader';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/Contacts/contactsSelectors';
import { fetchContacts } from 'redux/Contacts/contactsOperations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Section, SectionTitle } from './ContactsPage.styled';
import { Filter } from 'components/Filter/Filter';
import { Box } from 'components/Box/Box';
import { useAuth } from 'hooks';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { userTheme } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="300px"
        gridGap={3}
      >
        <ContactForm />
        {contacts?.length > 0 && <Filter />}
      </Box>
      <Section>
        <SectionTitle>
          <Box as="h2" fontSize="xl" fontWeight="bold" m={0}>
            Contacts
          </Box>
        </SectionTitle>
        {isLoading ? (
          <ContactsLoader theme={userTheme} />
        ) : contacts?.length > 0 ? (
          <ContactList />
        ) : (
          <Box as="p" fontWeight="medium" lineHeight="1.25" fontSize="l">
            You don't have contacts yet. Please add your first contact!
          </Box>
        )}
      </Section>
    </>
  );
};

export default Contacts;