function Experience({ item, remove }) {
    return (
        <div className='block'>
            <span className='circle'></span>
            <input type="text" placeholder={item.year} className='year input'/>
            <span className='tire'>-</span>
            <input type="text" placeholder={item.present} className='present input'/>
            <div className='sub-block'>
                <input className='company input' type="text" placeholder={item.company}/>
            </div>
            {console.log(remove)}
            <span onClick={remove} className='remove'>&times;</span>
            <div className="sub">
                <input type="text" className='input func-title' placeholder={item.func_title}/>
                <span>,</span>
                <input type="text" className='input city' placeholder={item.city}/>
                <textarea type="text" className='input description' rows={3} placeholder={item.description}></textarea>
            </div>
        </div>
    );
}

export default Experience;