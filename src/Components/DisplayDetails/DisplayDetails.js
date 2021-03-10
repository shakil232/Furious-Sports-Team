import React from 'react';
import './DisplayDetails.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { Link } from 'react-router-dom';
import fbIcon from '../../images/Facebook.png';
import twitterIcon from '../../images/Twitter.png';
import youtubeIcon from '../../images/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faMarsStroke,faFutbol, faFlag, faAward, faGamepad, faTrophy} from '@fortawesome/free-solid-svg-icons'

const DisplayDetails = (props) => {
   
    const { strLeague, strGender, strTeam, strTeamBadge, strSport, strCountry, intFormedYear, strFacebook, strTwitter, strYoutube, strStadiumDescription } = props.detail
   
    return (
        <div className="container detail-container ">
            <div className="logo">
                <img src={strTeamBadge} alt="" />
            </div>

            <div className="details mt-5 ">
                <div className="detail">
                    <h3><FontAwesomeIcon className="detail-icon" icon={faTrophy} /> {strLeague}</h3>
                    <h5><FontAwesomeIcon className="detail-icon" icon={faGamepad} />Team:  {strTeam}</h5>
                    <p><FontAwesomeIcon className="detail-icon" icon={faAward} /> Founded: <small> {intFormedYear} </small></p>
                    <p><FontAwesomeIcon className="detail-icon" icon={faFlag} /> Country: <small> {strCountry} </small></p>
                    <p><FontAwesomeIcon className="detail-icon" icon={faFutbol} /> Sports Type: <small> {strSport}   </small></p>
                    <p><FontAwesomeIcon className="detail-icon" icon={faMarsStroke} /> Gender: <small> {strGender} </small></p>
                </div>
                <div className="gender-condition">
                    {
                        strGender === 'Male'?
                        <img src={male} alt="male"/>
                        : <img src={female} alt="female"/>
                    }
                </div>
            </div>

            <div className=" description mt-4">
                {strStadiumDescription}
            </div>

            <div className="social text-center">
               <div className="connect-area mt-5">
                   <h4> Connect Us</h4>
                   <a href={`https://${strFacebook}`}> <img src={fbIcon} alt="facebook"/> </a>
                   <a href={`https://${strTwitter}`}> <img src={twitterIcon} alt="twitter"/> </a>
                   <a href={`https://${strYoutube}`}><img src={youtubeIcon} alt="youtube"/></a>
                </div>
                <div className="back">
                   <Link to="/header"> 
                   <button className="button"> <FontAwesomeIcon className="button-icon" icon={faAngleDoubleLeft} /> Home
                   </button> </Link>
                </div>
            </div>
   
        </div>
    );
};

export default DisplayDetails;