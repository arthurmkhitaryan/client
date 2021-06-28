function Contacts() {
    return(
        <div className='contacts'>
            <h2 className='contact'>CONTACT</h2>
            <span className='tel'>Tel :  </span>
            <input className='input tel' type="text" placeholder='012 3456 7890'/>
            <span className='email'>Email :  </span>
            <input className='input email' type="text" placeholder='name.lastname@email.com'/>
            <span className='linkedin'>in :  </span>
            <input className='input linkedin' type="text" placeholder='name.lastname'/>
        </div>
    );
}

export default Contacts;