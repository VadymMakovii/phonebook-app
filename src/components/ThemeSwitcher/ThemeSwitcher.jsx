import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { setTheme } from 'redux/Auth/authSlice';
import {
  TogglerWrapper,
  TogglerSlider,
  TogglerKnob,
  Input,
  TogglerIcon,
} from './ThemeSwitcher.styled';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { userTheme } = useAuth();

  const themeToogle = () => {
    dispatch(setTheme(userTheme === 'Dark' ? 'White' : 'Dark'));
  };

  return (
    <TogglerWrapper>
      <Input type="checkbox" onChange={themeToogle} />
      <TogglerSlider mode={userTheme}>
        <TogglerKnob />
        <TogglerIcon>
          {userTheme === 'Dark' ? <FaMoon /> : <BsSun />}
        </TogglerIcon>
      </TogglerSlider>
    </TogglerWrapper>
  );
};
