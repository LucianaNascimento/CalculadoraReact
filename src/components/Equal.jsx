import React from 'react';
import './Equal.css';



export const HandleEqual = (props) => (
    <div className= "equal" onClick= {props.handleEqual}>
        {props.children}
    </div>
)