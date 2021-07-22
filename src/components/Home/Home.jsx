import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
// import { getParkings } from '../../actions'
import './Home.css';

function Home() {

    return (
        <div className="Home">
            <Navbar />
            <h1 className="home-title">Parking Lots</h1>
        </div>
    );
}


export default Home;