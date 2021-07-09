import { useState } from "react";
import { useDispatch } from "react-redux";

import Experience from "./ExperienceMinComponent";
import Education from "./EducationMinComponent";
import Skills from "./SkillsMinComponent";
import Contacts from "./ContactsMinComponent";

import { saveCVs } from "../../../redux/actions/profileActions";
import { dataAppend } from "../../../helpers/main";

import { Alert } from "antd";
import './css/CV.css';



function CV() {
    const [photoPath, setPhotoPath] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();

    const [educationDesc, setEducationDesc] = useState('');
    const [experienceDesc, setExperienceDesc] = useState('');
    const [skillsDesc, setSkillsDesc] = useState('');
    const [userInfo, setUserInfo] = useState({
        name: "",
        surname: "",
        job: ""
    });
    const [contact, setContact] = useState({
        tel: "",
        email: "",
        linkedin: ""
    });

    const handleChange = (e) => {
        return setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const selectMainPhoto = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                document.getElementById('upload').style.display = "none";
                document.getElementById('cv-photo').style.display = "block";
                setPhotoPath(() => reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const saveData = () => {
        const data = dataAppend({
            educationDesc,
            experienceDesc,
            skillsDesc,
            contact,
            userInfo,
            photoPath
        });
        dispatch(saveCVs(data))
            .then(res => {
                if (res.data.success) {
                    setSuccess(() => true);
                    setTimeout(() => {
                        setSuccess(() => false);
                    }, 1500)
                }
        });
    }

    return (
        <div className='CV' id='CV'>
            <div className="left-bar">
                <div className="top">
                    <div className='photo'>
                        <input id='upload' className='input inp-photo' type="file" onChange={selectMainPhoto}
                               accept="image/*"/>
                        <img id='cv-photo' className='cv-photo' src={photoPath} width='220' alt="photo"/>
                    </div>
                    <input name='name' className='name input' onChange={handleChange} placeholder='NAME'/>
                    <input name='surname' className='surname input' onChange={handleChange} placeholder='SURNAME'/>
                    <input name='job' className='job-title input' onChange={handleChange} placeholder='JOB TITLE'/>
                </div>
                <div className="main">
                    <Skills setSkills={setSkillsDesc}/>
                </div>
                <div className="footer">
                    <Contacts contacts={contact} setContacts={setContact}/>
                </div>
            </div>
            <div className="right-bar">
                <div className="experience">
                    <h1 className='title'>EXPERIENCE</h1>
                    <Experience setExperience={setExperienceDesc}/>
                </div>
                <div className="education">
                    <h1 className='title'>EDUCATION</h1>
                    <Education setEducation={setEducationDesc} />
                </div>
             <button onClick={saveData}>Save and Generate PDF</button>
                {success && <Alert className='alert' message="CV Saved!" type="success" />}
            </div>
        </div>
    );
}

export default CV;