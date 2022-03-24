import React from 'react'

const challenge = ({onQuizStart, data, url2}) => {
console.log(data, url2)
  return (
    <div className='cardo'>
      <div className='card-content'>
        <div className='content'>
          <h1>Start the Challenge</h1>
          { <p> Good luck!</p>}

<button
  className={ 'button is-info is-medium'}
  onClick={onQuizStart}>
  Start
</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(challenge);