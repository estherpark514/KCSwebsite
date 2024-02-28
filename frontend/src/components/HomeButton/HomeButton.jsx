import React from 'react';
import "./HomeButton.scss";

export const HomeButton = ({ name }) => {
    return (
        <div className="btn">
            {name}
        </div>
    );
};