function Education({ remove }) {
    return (
        <div className='block'>
            <span className='circle'></span>
            <input type="text" placeholder='YYYY ' className='year input'/>
            <span className='tire'>-</span>
            <input type="text" placeholder='Present' className='present input'/>
            <div className='sub-block'>
                <input className='company input' type="text" placeholder='Education/course name'/>
            </div>
            <span onClick={remove} className='remove'>&times;</span>
            <div className="sub">
                <input type="text" className='input func-title' placeholder='Organization'/>
                <span>,</span>
                <input type="text" className='input city' placeholder='City'/>
                <textarea type="text" className='input description' rows={3} placeholder='Description of the education/course.'></textarea>
            </div>
        </div>
    );
}

export default Education;