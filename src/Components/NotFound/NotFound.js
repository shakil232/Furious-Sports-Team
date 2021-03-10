import React from 'react';
import './NotFound.css';
import notFound from '../../images/vaia.jpg'

const NotFound = () => {
    return (
        <div className="not-found">
              
            <div className="error">
                <h4> Search Not Found ..</h4>
                <h2> 404 error !!</h2>
            </div>
            <img src={notFound} alt=""/>
        </div>
    );
};

export default NotFound;