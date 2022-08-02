import React from 'react';
import "./Search.css"

const Search = () => {
  return (
    <>
      <section className='search'>
        <div className="container d-flex align-items-center justify-content-between">
          <input className='search-input' type="text" placeholder='Search for a country…'/>

          <select className='select' name="language">
            <option value="uzbek">Uzbek</option>
            <option value="english">English</option>
          </select>
        </div>
      </section>
    </>
  );
};


export default Search;