import React from "react";
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
  return (
  <>
    <section className="country">
    <div className="container">
      <ul className="country-list list-unstyled m-0 p-0 d-flex align-items-center justify-content-between flex-wrap">
        <li className="country-item">
          <img src={germany} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
            Germany
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
                81,770,900
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Europe
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Berlin
              </p>
            </li>
          </ul>
        </li>

        <li className="country-item">
          <img src={usa} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
          United States of America
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
                323,947,000
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Americas
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Washington, D.C.
              </p>
            </li>
          </ul>
        </li>

        <li className="country-item">
          <img src={brazil} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
          Brazil
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
              206,135,893
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Americas
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Brasília
              </p>
            </li>
          </ul>
        </li>

        <li className="country-item">
          <img src={iceland} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
          Iceland
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
              334,300
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Europe
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Reykjavík
              </p>
            </li>
          </ul>
        </li>

        <li className="country-item mt-5">
          <img src={afgon} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
          Afghanistan
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
              27,657,145
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Asia
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Kabul
              </p>
            </li>
          </ul>
        </li>

        <li className="country-item mt-5">
          <img src={island} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
          Åland Islands
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
              28,875
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Europe
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Mariehamn
              </p>
            </li>
          </ul>
        </li>

        <li className="country-item mt-5">
          <img src={albania} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
          Albania
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
              2,886,026
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Europe
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Tirana
              </p>
            </li>
          </ul>
        </li>

        <li className="country-item mt-5">
          <img src={algeria} alt="germany" width="267" height="160"/>

          <p className="country-desc ps-4">
          Algeria
          </p>

          <ul className="list-unstyled m-0 p-0 ps-4">
            <li className="d-flex align-items-center">
              <p className="desc">
                Population:
              </p>

              <p className="desc-small">
              40,400,000
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Region:
              </p>

              <p className="desc-small">
              Africa
              </p>
            </li>

            <li className="mt-2 d-flex align-items-center">
              <p className="desc">
              Capital:
              </p>

              <p className="desc-small">
              Algiers
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </section>
  </>
  )
}

export default Country;
