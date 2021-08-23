import React from 'react';

const Modal = ({results, data}) => {

  return (
    <div className='activer'>
      <div className='background'></div>
      <div className='card'>
        <header className='card-head'>
          <p className='card-title'>Your answers</p>
          
        </header>
        <section className='card-body flex0 content'>
          <ul>
            {results.map((result, i) => (
              <li key={i} className='mb-6'>
                <p>
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].test_answer
                      ? 'btn btn-success has-text-white p-2'
                      : 'btn btn-danger has-text-white p-2'
                  }>
                   
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].test_answer ? (
                  <p className='btn btn-success has-text-white p-2'>
                    Correct answer: {data[i].test_answer}
                  </p>
                ):
                <p>All correct</p>
                }
               
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;
