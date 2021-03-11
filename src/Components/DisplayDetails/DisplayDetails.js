import React from 'react';
import './DisplayDetails.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faMarsStroke, faFutbol, faFlag, faAward, faGamepad, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faTwitter, faInstagram, faInternetExplorer } from '@fortawesome/free-brands-svg-icons'

const DisplayDetails = (props) => {

    const { strLeague, strGender, strTeam, strTeamBadge, strSport, strCountry, intFormedYear, strFacebook, strTwitter, strYoutube, strInstagram, strWebsite, strStadiumDescription, strDescriptionEN } = props.detail

    return (

        <div className=" container detail-container">
            {/* banner and logo area */}
            <div className="row detail-banner">
                <div className=" logo d-flex justify-content-around mt-4 col-sm-12 ">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>

            {/* details card area */}
            
                <div className="details ml-3 row mr-3 mt-5 d-flex">
                    <div className="detail col-sm-12   col-md-5">
                        <h3><FontAwesomeIcon className="detail-icon" icon={faTrophy} /> {strLeague}</h3>
                        <h5><FontAwesomeIcon className="detail-icon" icon={faGamepad} />Team:  {strTeam}</h5>
                        <p><FontAwesomeIcon className="detail-icon" icon={faAward} /> Founded: <small> {intFormedYear} </small></p>
                        <p><FontAwesomeIcon className="detail-icon" icon={faFlag} /> Country: <small> {strCountry} </small></p>
                        <p><FontAwesomeIcon className="detail-icon" icon={faFutbol} /> Sports Type: <small> {strSport}   </small></p>
                        <p><FontAwesomeIcon className="detail-icon" icon={faMarsStroke} /> Gender: <small> {strGender} </small></p>
                    </div>
                    <div className="gender-condition col-sm-12 col-md-7">
                        {
                            strGender === 'Male' ?
                                <img src={male} alt="male" />
                                : <img src={female} alt="female" />
                        }
                    </div>
                </div>

            

            {/* description area */}
            
            <div className="row">
                <div className=" description ml-3 text-justify p-5 mt-4 col-md-12 col-sm-12">
                    {strStadiumDescription}
                    <br /><br />
                    {strDescriptionEN}
                </div>
            </div>
        

            {/* connect area */}
            <div className="row text-center d-flex justify-content-center">
                <div className="connect-area mt-5 col-md-12 col-sm-12">
                    <h4> Connect Us</h4>
                    <a href={`https://${strFacebook}`}> <FontAwesomeIcon className="social-icon facebook" icon={faFacebook} /> </a>
                    <a href={`https://${strInstagram}`}> <FontAwesomeIcon className="social-icon instagram" icon={faInstagram} /> </a>
                    <a href={`https://${strTwitter}`}> <FontAwesomeIcon className="social-icon twitter" icon={faTwitter} /> </a>
                    <a href={`https://${strYoutube}`}> <FontAwesomeIcon className="social-icon youtube" icon={faYoutube} /> </a>
                    <a href={`https://${strWebsite}`}> <FontAwesomeIcon className="social-icon website" icon={faInternetExplorer} /> </a>
                </div>
            </div>

            {/* button area */}
            <div className="back  row mt-5  justify-content-center">
                <Link to="/header">
                    <button className="button  col-sm-12 "> <FontAwesomeIcon className="button-icon" icon={faAngleDoubleLeft} /> Home
                   </button> </Link>
            </div>




        </div>

    );
};

export default DisplayDetails;