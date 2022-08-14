import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import './CountryOne.css'
import Loader from './Loader';

function CountryOne({}) {

  const {capital} = useParams();
  const[data, setData] = useState([])
  const[loader, setLoader] = useState(false)
  const navigation = useNavigate()

  async function oneCountry() {
    setLoader(false)
    const res = await fetch(`https://restcountries.com/v3.1/name/${capital}`)
    const req = await res.json();
    setData(req)
    setLoader(true)
  }

  useEffect(() => {
    oneCountry()
  }, [])

  return (
      <>
      {loader ?

          <section>
          <div className="container">
            <ul className='list-unstyled pt-5 w-100 d-flex justify-content-center'>
                {data.map(item => {
                return <li key={item.name.official} className="country-item-one country-item mt-4">
                <img src={item.flags.png} alt="germany" width="600" height="250"/>

                <p className="country-desc country-desc-one ps-4">
                  {item.name.common}
                </p>

              <ul className="list-unstyled m-0 p-0 ps-4">
                    <li className="d-flex align-items-center">
                    <p className="active desc">
                    Population:
                    </p>

                    <p className="active font desc-small">
                    {item.population}
                    </p>
                    </li>

                    <li className="mt-4 d-flex align-items-center">
                    <p className="active desc">
                    Region:
                    </p>

                    <p className="active font desc-small">
                    {item.subregion}
                    </p>
                    </li>

                    <li className="mt-4 d-flex align-items-center">
                    <p className="active desc">
                    Capital:
                    </p>

                    <p className="active font desc-small">
                    {item.capital}
                    </p>
                    </li>

                    <li className="mt-4 d-flex align-items-center">
                    <p className="active desc">
                    Continents:
                    </p>

                    <p className="active font desc-small">
                    {item.continents}
                    </p>
                    </li>

                    <li className="mt-4 d-flex align-items-center">
                    <p className="active font desc">
                    Fifa:
                    </p>

                    <p className="active font desc-small">
                    {item.fifa}
                    </p>
                    </li>

                    <li className="mt-4 d-flex align-items-center">
                    <p className="active desc">
                    Languages:
                    </p>

                    <p className="active font desc-small">
                    {Object.values(item.languages)}
                    </p>
                    </li>
                </ul>

                <button className='btn btn-primary w-100 mt-3 p-4' onClick={() => navigation(-1)}>Back</button>
              </li>
              })}
            </ul>
          </div>
        </section>

        : <Loader />
      }
      </>
  );
}

export default CountryOne;