function Skills({ setSkills }) {

    const handleChange = (e) => {
        setSkills(() => e.target.value)
    }

    return (
        <div className='skills'>
            <h1 className='title'>SKILLS</h1>
            <textarea name="skills" className='skills' cols="20" rows="10" onChange={handleChange} placeholder='Write your skills...'></textarea>
        </div>
    );
}

export default Skills;