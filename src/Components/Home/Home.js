import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    const {idTeam, strTeamBadge, strTeam, strSport} = props.team

    const history = useHistory()
    function handleClick(idTeam) {
        const url = `/details/${idTeam}`
        history.push(url);
      }

    return (
        <div>
            <div className="team-display ">
                <img src={strTeamBadge} alt="" />
                <h4 className="name">{strTeam}</h4>
                <p className="type">Sports Type: {strSport}</p>
                <button 
                onClick={()=> handleClick(idTeam)}
                className="detail-btn">
                Explore <FontAwesomeIcon className="button-icon" icon={faLongArrowAltRight} /> 
                </button>
            </div>
        </div>
    );
};

export default Home;