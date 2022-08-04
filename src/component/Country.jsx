import React, { useState, useEffect } from "react";
import Search from "./Search";
import "./Country.css";
import germany from "../assets/images/germany.png"
import usa from "../assets/images/flag-usa.png"
import brazil from "../assets/images/brazil.png"
import iceland from "../assets/images/iceland.png"
import afgon from "../assets/images/afgon.png"
import island from "../assets/images/island.png"
import albania from "../assets/images/albania.png"
import algeria from "../assets/images/algeria.png"

const Country = () =>{

  const[data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
  <>
    <Search api={data} />
    <section className="country">
    <div className="container">
      <ul className="country-list list-unstyled m-0 p-0 d-flex align-items-center justify-content-between flex-wrap">
        {data.map((item) => {
          return <li key={item.name.official} className="country-item mt-4">
          <img src={item.flags.png} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
            {item.capital}
          </p>

        <ul className="list-unstyled m-0 p-0 ps-4">
          <li className="d-flex align-items-center">
          <p className="desc">
          Population:
          </p>

          <p className="desc-small">
          {item.population}
          </p>
          </li>

          <li className="mt-2 d-flex align-items-center">
          <p className="desc">
          Region:
          </p>

          <p className="desc-small">
          {item.subregion}
          </p>
          </li>

          <li className="mt-2 d-flex align-items-center">
          <p className="desc">
          Capital:
          </p>

          <p className="desc-small">
          {item.capital}
          </p>
          </li>
        </ul>
        </li>
        })}
      </ul>
    </div>
    </section>
  </>
  )
}

export default Country;
