import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import env from "../../../config/env";
import {myCVs} from "../../../redux/actions/profileActions"

import './css/MyCVs.css';


function MyCVs() {
    const dispatch = useDispatch();

    const [cvs, setCVs] = useState([])


    useEffect(() => {
        return dispatch(myCVs()).then(res => {
            setCVs(() => [
                ...res.data.data
            ])
        })

    })

    return (
        <div className='MyCVs'>
            <table>
                <tbody>
                {
                    cvs.map((cv, index) => <tr key={index}>
                        <td>{cv.name}</td>
                        <td><a href={`${env.API_PUBLIC_URL}${cv.path}`} download>Download</a></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}


export default MyCVs;