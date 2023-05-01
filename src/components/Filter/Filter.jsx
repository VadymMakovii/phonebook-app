import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/Filter/filterSlice';
import { selectFilter } from 'redux/Contacts/contactsSelectors';
import { Input, Label, Container } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const inputId = nanoid();

  return (
    <Container>
      <Label htmlFor={inputId}>
        Find contacts by name
        <Input
          id={inputId}
          type="text"
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
          value={filterValue}
        />
      </Label>
    </Container>
  );
};
