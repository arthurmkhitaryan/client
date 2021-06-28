import React, {Component, Fragment} from 'react';

class Map extends Component {
    state = {
        spanTag: [{tag: <span className={`skill-circle`} ></span>}],
        arr: [],
        toogle: false
    }

    spanEnterEventClick = (index) => {
        
        this.setState(({toogle})=> {
            return {
                toogle: !toogle

            }
        })
    }
    render() {

        const {spanTag, arr} = this.state;
        for(let i = 0; i<5; i++) {
            arr.push(...spanTag)
        }
        console.log(arr)

        return (
            <Fragment>
            {arr.map((item, id) => {
                    return <Fragment >
                     <li onClick={() =>this.spanEnterEventClick(id)} style={{
                         display: "inline"
                     }} key={id}> {item.tag}</li>
                    </Fragment>
                })}
            </Fragment>
        );
    }
}

export default Map;