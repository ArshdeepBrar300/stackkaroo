import React from "react";
import "../../App.css";

export const ChooseComponent = ({ img, title }) => {
    return (
        <div className="choose-box" >
            <div className="choose-rectangle">
                <img src={img} alt={title} />
            </div>

            <div style={{ 'color': '#0A56F1', 'display': 'flex', 'flexDirection': 'column', 'width': '50%', 'marginLeft': '25px' }}> {title}</div>

        </div>
    );
};
