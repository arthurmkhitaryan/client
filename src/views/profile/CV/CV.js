import { useState } from "react";

import Experience from "./ExperienceMinComponent";
import Education from "./EducationMinComponent";
import Skills from "./SkillsMinComponent";
import Contacts from "./ContactsMinComponent";
import AddButton from "./AddButton";

// import './css/CV.css';
import {useSelector} from "react-redux";
import styles from './css/styles'

function CV() {
    const [photoPath, setPhotoPath] = useState('');

    const btnState = useSelector(state => state.profile.displayBlock)

    const [experience, setExperience] = useState([
        {
            id: 1,
            year: "YYYY",
            present: "Present",
            company: "Company",
            func_title: "Function title",
            city: "city",
            description: "Description of the job, position and responsibilities.",
        },
    ]);

    const [education, setEducation] = useState([
        {
            id: 1,
            year: "YYYY",
            present: "Present",
            course: "Education/course name",
            organization: "Organization",
            city: "City",
            description: "Description of the education/course.",
        }
    ]);

    const selectMainPhoto = (e) => {

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                document.getElementById('upload').style.display = "none";
                document.getElementById('cv-photo').style.display = "block";
                setPhotoPath(() => reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const addExperience = (e) => {
        const lastId = experience[experience.length - 1].id + 1;
        return setExperience(prevState => [
                ...prevState,
                {
                    id: lastId,
                    year: "YYYY",
                    present: "Present",
                    company: "Company",
                    func: "Function title",
                    city: "city",
                    description: "Description of the job, position and responsibilities.",
                }
            ]
        )
    }


    const addEducation = (e) => {
        const lastId = education[education.length - 1].id + 1;
        return setEducation(prevState => [
                ...prevState,
                {
                    id: lastId,
                    year: "YYYY",
                    present: "Present",
                    course: "Education/course name",
                    organization: "Organization",
                    city: "City",
                    description: "Description of the education/course.",
                }
            ]
        )
    }

    const removeExperience = (id) => {
        if (experience.length > 1) {
            setExperience(prevState => prevState.filter(item => item.id !== id))
        }
    }

    const removeEducation = (id) => {
        if (education.length > 1) {
            setEducation(prevState => prevState.filter(item => item.id !== id))
        }
    }

    return (
        <div style={styles.CV} className='CV' id='CV'>
            <div style={styles.leftBar} className="left-bar">
                <div className="top">
                    <div className='photo'>
                        <input id='upload' className='input inp-photo' type="file" onChange={selectMainPhoto}
                               accept="image/*"/>
                        <img id='cv-photo' className='cv-photo' src={photoPath} width='220' alt="photo"/>
                    </div>
                    <div suppressContentEditableWarning={true} contentEditable={true} className='name input'>NAME</div>
                    <div suppressContentEditableWarning={true} contentEditable={true} className='surname input'>SURNAME</div>
                    <div suppressContentEditableWarning={true} contentEditable={true} className='job-title input'>JOB TITLE</div>
                </div>
                <div className="main">
                    <Skills/>
                </div>
                <div className="footer">
                    <Contacts/>
                </div>
            </div>
            <div style={styles.rightBar} className="right-bar">
                <div className="experience">
                    <h1 className='title'>EXPERIENCE</h1>
                    {
                        experience.map((el, i) => (
                            <Experience key={i} remove={() => removeExperience(el.id)} item={el}/>
                        ))
                    }
                    {btnState && <AddButton add={addExperience} type={'Experience'}/>}
                </div>
                <div className="education">
                    <h1 className='title'>EDUCATION</h1>
                    {
                        education.map((el, i) => (
                            <Education key={i} remove={() => removeEducation(el.id)} item={el}/>
                        ))
                    }
                    {btnState && <AddButton add={addEducation} type={'Education'}/>}
                </div>
            </div>
        </div>
    );
}

export default CV;