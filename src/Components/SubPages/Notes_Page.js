import React from 'react';
import { Link } from 'react-router-dom';

const NotesPage = ({ children }) => {
  return (
    <div className='flex flex-col container'>
        <Link to="/"> 《-- Main page</Link>
        <div className="my-4">
          {children}
        </div>
        <p className='disclaimer mt-2 mr-4'>These notes are based on my personal interpretations of the original work and are for informational use only. All copyrights belong to the original authors.</p>
    </div>
  );
};

export default NotesPage;
