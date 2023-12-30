import React from 'react';

const NotesPage = ({ children }) => {
  return (
    <div className='flex flex-col container'>
        <a href="/" >Main page</a>
        <div className="my-4">
          {children}
        </div>
        <p className='disclaimer mt-2'>These notes are based on my personal interpretations of the original work and are for informational use only. All copyrights belong to the original authors.</p>
    </div>
  );
};

export default NotesPage;
