import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayDetails from '../DisplayDetails/DisplayDetails';
import './Details.css'

const Details = () => {
    const {detailsId} = useParams()
    const [detail, setDetail] = useState([])
    const loadData = () =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${detailsId}`
        fetch(url)
        .then( res => res.json())
        .then( data => setDetail(data.teams))
    }
    useEffect(loadData,[])
    return (
        <div className="container">
            <div>
                {
                    detail.map( detail => <DisplayDetails detail={detail}></DisplayDetails>)
                }
            </div>
        </div>
    );
};

export default Details;