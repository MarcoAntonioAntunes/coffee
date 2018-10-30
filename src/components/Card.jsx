import React from 'react';

const Card = ({ giver, receiver }) => {
    return (
        <div className="card">
            <h3>{giver} </h3>
            <p className="link">should give a cup of coffee to</p>
            <h3>{receiver} </h3>
        </div>
    );
};

export default Card;