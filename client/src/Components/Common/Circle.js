import React from "react";

import "./css/Circle.css";

const Circle = ({children,child,styles}) => {
    return(
        <div className="circle" style={styles}>
            <div className="txt">
                <h3>{children}</h3>
                <p>{child}</p>
            </div>
        </div>
    )
};

export default Circle;