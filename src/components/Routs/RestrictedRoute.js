import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RescrictedRoute = ({ component, redirectTo = "/" }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to={redirectTo} /> : component
};