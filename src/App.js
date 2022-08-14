import React, {useState, useEffect} from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Country from "./component/Country";
import CountryOne from "./component/CountryOne";
import {Routes, Route, useLocation, useParams} from 'react-router-dom'
import "./index.css"
import Loader from "./component/Loader";

function App() {

  const[data, setData] = useState([]);
  const[current, setCurrent] = useState(1);
  const[loader, setLoader] = useState(false)
  const[total] = useState(12)

  const firstIndex = current * total;
  const lastIndex = firstIndex - total;
  const dataSlice = data.slice(lastIndex, firstIndex)

  async function api() {
    setLoader(false)
    const req = await fetch(`https://restcountries.com/v3.1/all`);
    const res = await req.json();
    setData(res)
    setLoader(true)
  }

  useEffect(() => {
    api()
  }, [])

  function paginationPage(num) {
    setCurrent(num);
  }

  return (
    <>
      <Header />
      <main className="main">
      <Routes>

        <Route path="/" element={loader ? <Country dataSlice={dataSlice} data={data} total={total} current={current} paginationPage={paginationPage} setCurrent={setCurrent}/> : <Loader />} />
        <Route path="/:capital" element={<CountryOne/>} />
      </Routes>
      </main>
    </>
  )
}

export default App;
