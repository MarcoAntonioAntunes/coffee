import React from 'react';
import axios from 'axios';
import DisplayBox from './components/DisplayBox';
import ToolBar from './components/ToolBar';

class Pairings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newYorkPairings: [],
            isNewYorkPairingsLoading: true,
            dublinPairings: [],
            isDublinPairingsLoading: true,
            officeToggle: false
        }
    }
    componentDidMount() {
        this.getNewYorkPairings();
        this.getDublinPairings();
    }

    getPairings = (engineersArray) => {
        if (engineersArray.length > 0) {
            const pairedSet = {};
            const pairedUsers = [];
            const givers = [];
            const receivers = [];
            for (let i = 0; i < engineersArray.length; i++) {
                const currentEngineer = engineersArray[i];
                let selectionArray = engineersArray;
                selectionArray = engineersArray.filter((engineer) => engineer !== currentEngineer);

                const previousGiverIndex = (Object.values(pairedSet)).findIndex(data => data === `${currentEngineer.name.first}${currentEngineer.name.last}`);
                if (previousGiverIndex !== -1) {
                    const previousGiver = givers[previousGiverIndex];
                    selectionArray = selectionArray.filter((engineer) => engineer !== previousGiver);
                }
                if (receivers.length > 0) {
                    for (let index = 0; index < receivers.length; index++) {
                        selectionArray = selectionArray.filter((engineer) => engineer !== receivers[index]);
                    }
                }
                if (selectionArray.length > 0) {
                    const selectedEngineer = selectionArray[Math.floor(Math.random() * selectionArray.length)];
                    pairedSet[`${currentEngineer.name.first}${currentEngineer.name.last}`] = `${selectedEngineer.name.first}${selectedEngineer.name.last}`;
                    const pair = [currentEngineer, selectedEngineer];
                    givers.push(currentEngineer);
                    receivers.push(selectedEngineer);
                    pairedUsers.push(pair);
                }
            }
            return pairedUsers;
        }
    }

    getNewYorkPairings = () => {
        axios.get('https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering&location=ny')
            .then((response) => {
                const newYorkEngineers = response.data.users;
                this.setState({ newYorkPairings: this.getPairings(newYorkEngineers), isNewYorkPairingsLoading: false });
            });
    }

    getDublinPairings = () => {
        axios.get('https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering&location=dub')
            .then((response) => {
                const dublinEngineers = response.data.users;
                this.setState({ dublinPairings: this.getPairings(dublinEngineers), isDublinPairingsLoading: false });
            });
    }

    toggleButton = () => {
        this.setState({
            officeToggle: !this.state.officeToggle
        })
    }
    render() {
        const { newYorkPairings, dublinPairings, officeToggle, isDublinPairingsLoading, isNewYorkPairingsLoading } = this.state;
        return (
            <div className="main">
                <div className="header">
                    <h1>Coffee Week</h1>
                </div>
                <div className="toolbar">
                    <div className="search-input"></div>
                    <ToolBar toggleButton={this.toggleButton} />
                </div>
                <DisplayBox
                    officeToggle={officeToggle}
                    isDublinPairingsLoading={isDublinPairingsLoading}
                    dublinPairings={dublinPairings}
                    isNewYorkPairingsLoading={isNewYorkPairingsLoading}
                    newYorkPairings={newYorkPairings}
                />
            </div>
        );
    }
}

export default Pairings;