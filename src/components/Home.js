import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Routes } from 'react-router-dom'; // Додайте Routes та Route

// import Login from './components/Login';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';



function Home() {
 

  return (
        
      <><div className="container">

            <NavBar/>
            <p className="text-center">Вітаю шановний користувач <br/>
             цей сайт призначений для адмістративних послуг ЛДУ БЖД
            </p>
            <Link to="/login" className='nav-link'>
                 <h4 className='text-center'>Натисніть щоб увійти </h4>
             </Link>
            



      </div></>


  );
}

export default Home;