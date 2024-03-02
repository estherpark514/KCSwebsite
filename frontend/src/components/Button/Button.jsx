import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Button.scss";

export const Button = ({ name, link }) => {
    const navigate = useNavigate();
    return (
        <div className="btn" onClick={() => navigate(link)}>
            {name}
        </div>
    );
};