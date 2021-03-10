import React from 'react';
import './DisplayDetails.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { Link } from 'react-router-dom';

const DisplayDetails = (props) => {
   
    const { strLeague, strGender, strTeam, strTeamBadge, strSport, strCountry, intFormedYear, strTwitter, strYoutube, strStadiumDescription } = props.detail
    return (
        <div className="container back-color">
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
                <h2> social</h2>
                <div className="back-btn">
                   <Link to="/header"> <button> home</button> </Link>
                </div>
            </div>
   
        </div>
    );
};

export default DisplayDetails;