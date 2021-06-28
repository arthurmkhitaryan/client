import {useState, Fragment} from "react";
import Map from "./Map";

function Skills() {



    // const circles = document.querySelectorAll('.skill-circle');
    //
    // if (circles) {
    //     circles.forEach(el => {
    //         el.addEventListener('click', (e) => {
    //             console.log(el.style.backgroundColor)
    //             if (el.style.backgroundColor === 'lightgray'){
    //                 el.style.backgroundColor = 'rgb(178, 127, 0)';
    //             }else {
    //                 el.style.backgroundColor = 'lightgray';
    //             }
    //         })
    //     })
    // }

    return (
        <div className='skills'>




            <h1 className='title'>SKILLS</h1>
            <input type="text" className="group input" placeholder='Skill group'/>
            <ul className='skill-list'>
                <li className='skill'>
                    <input className='skills input' type="text" placeholder='Skill'/>
                    <div className="span-block">
                        <Map/>
                    </div>
                </li>
                <li className='skill'>
                    <input className='skills input' type="text" placeholder='Skill'/>
                    <div className="span-block">
                        <Map/>
                    </div>
                </li>
                <li className='skill'>
                    <input className='skills input' type="text" placeholder='Skill'/>
                    <div className="span-block">
                        <Map/>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Skills;