import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUSer,
  selectIsRefreshing,
  selectTheme,
  selectError,
} from 'redux/Auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUSer),
    userTheme: useSelector(selectTheme),
    error: useSelector(selectError),
  };
};
