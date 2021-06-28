function AddButton({ add, type }) {
    return (
        <div className='btn-wrapper'>
            <button onClick={add} id='add' className='add'>Add {type}</button>
        </div>
    );
}

export default AddButton;