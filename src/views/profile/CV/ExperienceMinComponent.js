import {useSelector} from "react-redux";

function Experience({ item, remove }) {

    const btnState = useSelector(state => state.profile.displayBlock)

    return (
        <div className='block'>
            <span className='circle'></span>
            <div suppressContentEditableWarning={true} contentEditable={true} className='year input'>{item.year}</div>
            <span className='tire'>-</span>
            <div suppressContentEditableWarning={true} contentEditable={true} className='present input'>{item.present}</div>
            <div className='sub-block'>
                <div suppressContentEditableWarning={true} contentEditable={true} className='company input'>{item.company}</div>
            </div>
            {btnState && <span onClick={remove} className='remove'>&times;</span>}
            <div className="sub">
                <div suppressContentEditableWarning={true} contentEditable={true} className='func-title input'>{item.func}</div>
                <span>,</span>
                <div suppressContentEditableWarning={true} contentEditable={true} className='city input'>{item.city}</div>
                <div suppressContentEditableWarning={true} contentEditable={true} className='description input'>{item.description}</div>
            </div>
        </div>
    );
}

export default Experience;