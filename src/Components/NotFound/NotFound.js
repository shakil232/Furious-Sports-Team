import React from 'react';
import './NotFound.css';
import notFound from '../../images/vaia.jpg'

const NotFound = () => {
    return (
        <div className="not-found container">
            <div className="row">
                <div className="error justify-content-center col-md-12 col-sm-12 mt-3">
                    <h4> Search Not Found ..</h4>
                    <h2> 404 error !!</h2>
                </div>
            </div>
            <div className="row">
            <div className="funny-pic justify-content-around col-md-12 col-sm-12 mt-3">
                    <img src={notFound} alt="" />
                </div>
            </div>

        </div>

    );
};

export default NotFound;