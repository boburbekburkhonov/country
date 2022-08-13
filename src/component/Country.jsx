import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import "./Country.css";

const Country = () =>{

  const[data, setData] = useState([]);
  const[current, setCurrent] = useState(2);
  const[total] = useState(12)

  const firstIndex = current * total;
  const lastIndex = firstIndex - total;
  const dataSlice = data.slice(lastIndex, firstIndex)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return (
  <>

    <section className="country pt-4">
    <div className="container">
      <ul className="country-list list-unstyled m-0 p-0 d-flex align-items-center justify-content-between flex-wrap">
        {dataSlice.map((item) => {
          return <li key={item.name.official} className="country-item mt-4">
          <img src={item.flags.png} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
            {item.capital}
          </p>
        </li>
        })}
      </ul>
    </div>
    </section>

    <Pagination data={data} total={total} />
  </>
  )
}

export default Country;



{/* <ul className="list-unstyled m-0 p-0 ps-4">
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
</ul> */}