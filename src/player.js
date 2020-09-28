import React from 'react';
import './player.css';
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';

function Player( {spotify} ) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
            <Footer spotify={spotify} />
        </div>
    )
}

export default Player; 