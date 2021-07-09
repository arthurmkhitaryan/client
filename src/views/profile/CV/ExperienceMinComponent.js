function Experience({ setExperience }) {

    function handleChange(e) {
        setExperience(() => e.target.value)
    }

    return (
        <div className='block'>
            <textarea name="description" cols="50" rows="12" onChange={handleChange} className='description' placeholder='Write your experience description...'></textarea>
        </div>
    );
}

export default Experience;