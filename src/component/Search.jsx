import React, { useRef } from 'react';
import "./Search.css"

const Search = (props) => {

  // console.log(props.api);

  const inp = useRef()


  return (
    <>
      <section className='search'>
        <div className="container">
          <form className='d-flex align-items-center justify-content-between'>
          <input ref={inp} className='search-input' type="text" placeholder='Search for a country…'/>

          <select className='select' name="language">
            {props.api.map((item, index) => {
              return <option key={index} value={item.fifa}>{item.fifa}</option>
            })}
          </select>
          </form>
        </div>
      </section>
    </>
  );
};


export default Search;
