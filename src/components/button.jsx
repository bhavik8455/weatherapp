import React from "react";


export const Button = (props) => {

    return (
        <button className="btn" onClick={props.onClick}>
            {props.value}
        </button>
    );

};