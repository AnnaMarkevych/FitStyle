import React from "react";
import {useState, useEffect} from "react";
function Counter(props) {
    const bmr = props.bmr;
    const time = .5;
    const [ currVal, setCurrVal ] = useState(0);

        useEffect(() => {
            currVal !== bmr && setTimeout(setCurrVal, time, currVal + 1);
        }, [ currVal ]);




    return (
        <div  className='title-result'>{currVal}</div>
    );
}


export {Counter}