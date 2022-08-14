import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import {Link} from 'react-router-dom'
import "./Country.css";

const Country = ({dataSlice ,data, total, current,paginationPage, setCurrent}) =>{

  return (
  <>

    <section className="country pt-4">
    <div className="container">
      <ul className="country-list list-unstyled m-0 p-0 d-flex align-items-center justify-content-between flex-wrap">
        {dataSlice.map((item) => {
          return <li key={item.name.official} className="country-item mt-4">
          <img src={item.flags.png} alt="germany" width="267" height="160"/>

          <Link to={`/${item.name.common}`} className="country-desc ps-4">
            {item.name.common}
          </Link>
        </li>
        })}
      </ul>
    </div>
    </section>

    <Pagination data={data} total={total} current={current} paginationPage={paginationPage} setCurrent={setCurrent} />
  </>
  )
}

export default Country;
