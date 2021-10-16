import React from 'react';
import './ClearButton.css';


export const ClearButton = (props) => (
    <div className= "allClear" onClick= {props.handleClear}>
        {props.children}
    </div>
)