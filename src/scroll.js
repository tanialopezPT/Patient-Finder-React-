import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid gray',  height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll

//  rgba(149, 157, 165, 0.2) 0px 8px 24px;