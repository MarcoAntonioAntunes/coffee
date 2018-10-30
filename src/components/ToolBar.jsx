import React from 'react';

const ToolBar = ({ toggleButton }) => {
    return (
        <div className="location-toggle">
            <p>New York</p>
            <div className="toggle-button">
                <input onClick={toggleButton} className="tgl tgl-light" id="cb1" type="checkbox" />
                <label className="tgl-btn" htmlFor="cb1"></label>
            </div>
            <p>Dublin</p>
        </div>
    );
};

export default ToolBar;