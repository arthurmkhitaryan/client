import { useHistory } from 'react-router-dom';

import { ProfileRoute } from '../constants/routes/routes';

export default function Guest () {
    const user = JSON.parse(localStorage.getItem('user') || null);
    const history = useHistory();
    console.log(user)
    if (user) {

        history.push(ProfileRoute);
    }
}