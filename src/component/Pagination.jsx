import React from 'react';

function Pagination({data, total}) {

  const dot = []
  for(let i = 1; i < Math.ceil(data.length / total); i++){
    dot.push(i)
  }

  return (
    <>
      <section aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          {dot.map((item, index) => {
            return <li key={index} className="page-item"><a className="page-link" href="#">{item}</a></li>
          })}
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </section>

    </>
  );
}

export default Pagination;