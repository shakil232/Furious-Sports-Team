import React from 'react';
import './DisplayDetails.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'

const DisplayDetails = (props) => {
   
    const { strLeague, strGender, strTeam, strTeamBadge, strSport, strCountry, intFormedYear, strTwitter, strYoutube, strStadiumDescription } = props.detail
    return (
        <div className="container">
            <div className="logo">
                <img src={strTeamBadge} alt="" />
            </div>

            <div className="detail-container mt-5 ">

                <div className="details">
                    <p>Leg Name: {strLeague}</p>
                    <p>Team Neam: {strTeam}</p>
                    <p>Founded: {intFormedYear}</p>
                    <p>Country: {strCountry}</p>
                    <p>Sports Type: {strSport}</p>
                    <p>Gender: {strGender}</p>
                </div>
                <div className="gender-condition">
                    {
                        strGender === male ?
                        <img src={male} alt="male"/>
                        : <img src={female} alt="female"/>
                    }
                </div>

            </div>

            <div className=" description mt-4">
                {strStadiumDescription}
            </div>
            <div className="social text-center">
                <h2> Connect Us-</h2>
                <div className="back">
                   <Link to="/header"> 
                   <button className="button"> <FontAwesomeIcon className="icon" icon={faAngleDoubleLeft} /> Home
                   </button> </Link>
                </div>
            </div>
   
        </div>
    );
};

export default DisplayDetails;