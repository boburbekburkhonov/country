import React from 'react';

function Pagination({data, total, paginationPage, setCurrent, current}) {

  const dot = []
  for(let i = 1; i < Math.ceil(data.length / total); i++){
    dot.push(i)
  }

  return (
    <>
      <section aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center">
          <li className='page-item'>
            <button onClick={() => setCurrent(current - 1)}
          className={`page-link ${current <= 1 ? 'disabled' : ''}`} href="#">Prev</button>
          </li>
          {dot.map((item, index) => {
            return <li onClick={() => paginationPage(item)} key={index} className="page-item"><button className="page-link" href="#">{item}</button></li>
          })}
          <li className="page-item">
            <button onClick={() => setCurrent(current + 1)}
          className={`page-link ${current >= 20 ? 'disabled' : ''}`} href="#">Next</button>
          </li>
        </ul>
      </section>

    </>
  );
}

export default Pagination;