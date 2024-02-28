import React from 'react';
import "./HomeButton.scss";

const HomeButton = ({ name }) => {
    return (
        <div className="btn">
            {name}
        </div>
    );
};

export default HomeButton;
