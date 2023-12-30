import React from 'react';
import {BookList, MediaList, ThoughtList} from './ReadingList';

const Profile = () => {
  return (
    <div className='flex flex-col mr-8'>
        <div className="container">
            <h2>Me</h2>    
            <ur>
            <li>Studied math, econ, finance, and CS. 
                Jack of all trades, master of none.</li>
            <li>A not-so-different institutional investor, although
                (generally) like Silicon Valley > Wall Street.</li>
            <li>On weekends:
            Building with buddies. / 
            Reading all sorts of stuff. / 
            Hope to learn art and music. </li>        
            </ur>
        </div>

        <div className="container">
            <h2>My Garage Projects</h2> 
            <ur>
                <li>Resumagic - efficiently write and format resume (Coming Soon)</li>
            </ur>
            
        </div>

        <div className="container">
            <h2>My Thoughts</h2>   
            <div>
                <ThoughtList />
            </div>
        </div>

        <div className="container">
            <h2>Books I Read</h2>
            <div>
                <BookList />
            </div>
        </div>

        <div className="container">
            <h2>Articles and Media</h2>
            <div>
                <MediaList />
            </div>
        </div>

        <div className="container mb-24">
            <h2>Social</h2>
            <p>DM Welcomed:
                <a href="https://twitter.com/0x_jefuture"
                target="_blank"> Twitter</a> | 
                <a href="https://ca.linkedin.com/in/jeffery-sun"
                target="_blank"> LinkedIn</a> | 
                <a href="https://substack.com/@0xjeffery"
                target="_blank"> Substack</a>
            </p>
            <p className='disclaimer'>No judgement pls - everyone gets a bit wonky (or overly normal) on social media.</p>
        </div>

    </div>
  );
};

export default Profile;
