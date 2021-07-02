import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState(
        [
            {
                id: 1,
                skillName: 'HTML',
                skillOptions: [
                    { id: 0, className: 'skill-circle' },
                    { id: 1, className: 'skill-circle' },
                    { id: 2, className: 'skill-circle' },
                    { id: 3, className: 'skill-circle' },
                    { id: 4, className: 'skill-circle' },
                ]
            },

        ]
    );

    const activeSkill = (index) => {
        const skillRate = skills.slice(0, index + 1);
        skillRate.forEach(skill => {
            skill.className += ' active';
        })
        console.log(skillRate)

        setSkills((prevState => [...skillRate, ...prevState.slice(index + 1)]));
        // console.log(skillRate)

    }

    return (
        <div className='skills'>
            <h1 className='title'>SKILLS</h1>
            <input type="text" className="group input" placeholder='Skill group'/>
            <ul className='skill-list'>
                <li className='skill'>
                    <input className='skills input' type="text" placeholder='Skill'/>
                    <div className="span-block">
                        {
                            skills.map((el, index) => (
                                <span key={index} onClick={() => activeSkill(index)} className={el.className}> </span>
                            ))
                        }
                    </div>
                </li>
                <li className='skill'>
                    <input className='skills input' type="text" placeholder='Skill'/>
                    <div className="span-block">
                        {
                            skills.map((el, index) => (
                                <span key={index} onClick={() => activeSkill(index)} className={el.className}> </span>
                            ))
                        }
                    </div>
                </li>
                <li className='skill'>
                    <input className='skills input' type="text" placeholder='Skill'/>
                    <div className="span-block">
                        {
                            skills.map((el, index) => (
                                <span key={index} onClick={() => activeSkill(index)} className={el.className}> </span>
                            ))
                        }
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Skills;