import './css/CV.css';

function CV() {
    return (
        <div className='CV'>
            <div className="left-bar">
                <div className='photo'>

                </div>
                <input type="text" className='name' value='NAME'/>
                <input type="text" className='surname' value='SURNAME'/>
                <input type="text" className='job-title' value='JOB TITLE'/>

            </div>
            <div className="right-bar">
                <div className="experience">
                    <h1 className='title'>EXPERIENCE</h1>
                    <div className='block'>
                        <span className='circle'></span>
                        <input type="text" value='YYYY ' className='year'/>
                        <span>-</span>
                        <input type="text" value=' Present' className='present'/>
                    </div>
                </div>
                <div className="education">
                    <h1 className='title'>EDUCATION</h1>
                </div>
            </div>
        </div>
    );
}

export default CV;