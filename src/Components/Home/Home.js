import React from 'react';
import './Home.css'

const Home = (props) => {
    const {strTeamBadge, strTeam, strSport} = props.team
    return (
        <div>
            <img src={strTeamBadge} alt=""/>
            <h4>{strTeam}</h4>
            <p> {strSport}</p>
        </div>
    );
};

export default Home;