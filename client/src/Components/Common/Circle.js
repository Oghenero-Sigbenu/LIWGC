import React from "react";

import "./css/Circle.css";

const Circle = ({children,child,styles, something, click}) => {
    return(
    <>
        <div className="circle" onClick={click} style={styles}>
            <div className="txt" >
                <h3>{children}</h3>
                <p>{child}</p>
                <div>{something}</div>
            </div>
        </div>
    </>
    )
};

export default Circle;