import { useState } from 'react';
import { Dropdown, List, Item, Option, CurrentValue } from './Filter.styled';

const Filter = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState(false);

  const options = [
    { id: 1, value: 'show all' },
    { id: 2, value: 'follow' },
    { id: 3, value: 'followings' },
  ];

  const setFilterHandler = value => {
    onClick(value);
    setOpen(!open);
    setFilterValue(value);
  };

  return (
    <>
      {!open && (
        <>
          <Dropdown onClick={() => setOpen(!open)}>filter</Dropdown>
          <CurrentValue>{filterValue}</CurrentValue>
        </>
      )}
      {open && (
        <List>
          {options.map(({ id, value }) => (
            <Item key={id} id={id} onClick={() => setFilterHandler(value)}>
              <Option>{value}</Option>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Filter;
