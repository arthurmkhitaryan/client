function Contacts({setContacts, contacts}) {

    const handleChange = (e) => {
        return setContacts({...contacts, [e.target.name]: e.target.value})
    }

    return(
        <div className='contacts'>
            <h2 className='contact'>CONTACT</h2>
            <span className='tel'>Tel :  </span>
            <input name='tel' className='input tel' type="text" onChange={handleChange} placeholder='012 3456 7890'/>
            <span className='email'>Email :  </span>
            <input name='email' className='input email' type="text" onChange={handleChange} placeholder='name.lastname@email.com'/>
            <span className='linkedin'>in :  </span>
            <input name='linkedin' className='input linkedin' type="text" onChange={handleChange} placeholder='name.lastname'/>
        </div>
    );
}

export default Contacts;