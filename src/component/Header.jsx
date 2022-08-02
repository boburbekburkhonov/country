import React from 'react';
import "./Header.css"


const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className='heading'>Where in the world?</h1>
          <p className='header-desc'>Dark Mode</p>
        </div>
      </header>
    </>
  );
};


export default Header;