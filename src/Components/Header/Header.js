import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import './Header.css';

const Header = () => {
    const [ teams , setTeams] = useState([])
    const loadedData = () =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then( res => res.json())
        .then( data =>   setTeams(data.teams))
    }
    useEffect( loadedData,[])

    return (
        <div className="container header-container">
            <div className="banner">
               <h1> Furious Sports </h1> 
            </div>
          <div className="team-container">
          {
               teams.map( team => <Home team={team}></Home>)
           }
          </div>
        </div>
    );
};

export default Header;