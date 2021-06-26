import { LoginRoute } from '../constants/routes/routes';
import { useHistory } from 'react-router-dom';

export default function Auth () {
    const user = JSON.parse(localStorage.getItem('user') || null);
    const history = useHistory();

    if (!user) {
        history.push(LoginRoute);
    }
}