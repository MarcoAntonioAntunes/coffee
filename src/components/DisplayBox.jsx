import React from 'react';
import Card from './Card';

const DisplayBox = (props) => {
    const { officeToggle, isDublinPairingsLoading, dublinPairings, isNewYorkPairingsLoading, newYorkPairings } = props;

    return (
        <div className="display-box">
            {officeToggle ? (
                <div className="dublin">
                    <div className="location-title">
                        <h4>Dublin Office</h4>
                    </div>
                    {isDublinPairingsLoading ? (
                        <div className="loader-wrapper">
                            <div className="loader" />
                        </div>
                    ) : (
                            <div>
                                {
                                    dublinPairings.length > 0 ? dublinPairings.map((pair, i) => {
                                        const giver = pair[0];
                                        const receiver = pair[1];
                                        return (
                                            <div key={i} className="card-wrapper">
                                                <Card
                                                    giver={`${giver.name.first} ${giver.name.last}`}
                                                    receiver={`${receiver.name.first} ${receiver.name.last}`}
                                                />
                                            </div>
                                        );
                                    }) : (
                                            <div className="no-users">
                                                <h3>No pairings available</h3>
                                            </div>
                                        )}
                            </div>
                        )}
                </div>
            ) : (
                    <div className="newyork">
                        <div className="location-title">
                            <h4>New York Office</h4>
                        </div>
                        {isNewYorkPairingsLoading ? (
                            <div className="loader-wrapper">
                                <div className="loader" />
                            </div>
                        ) : (
                                <div>
                                    {newYorkPairings.length > 0 ? newYorkPairings.map((pair, i) => {
                                        const giver = pair[0];
                                        const receiver = pair[1];
                                        return (
                                            <div key={i} className="card-wrapper">
                                                <Card
                                                    giver={`${giver.name.first} ${giver.name.last}`}
                                                    receiver={`${receiver.name.first} ${receiver.name.last}`}
                                                />
                                            </div>
                                        );
                                    }) : (
                                            <div className="no-users">
                                                <h3>No pairings available</h3>
                                            </div>
                                        )}
                                </div>
                            )}
                    </div>
                )}
        </div>
    );
};

export default DisplayBox;