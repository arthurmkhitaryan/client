function Education({ setEducation }) {

    const handlerChange = (e) => {
        setEducation(() => e.target.value)
    }

    return (
        <div className='block'>
            <textarea name="description" cols="50" rows="12" className='description' onChange={handlerChange} placeholder='Write your education description...'></textarea>
        </div>
    );
}

export default Education;