import React from "react";

const TextBox = (props) => {

    return(
        <div className="textBox">
            
            <h3 className="txtHeader borderSplash">{props.header}</h3>
            <div className="divSplash"></div>
            <p>{props.content}</p>
        </div>
    )
}

export default TextBox