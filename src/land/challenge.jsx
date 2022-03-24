import React from 'react'

const challenge = ({onQuizStart, data}) => {
console.log(data)
  return (
    <div className='cardo'>
      <div className='card-content'>
        <div className='content'>
          <h1>Start the Challenge</h1>
          {data.length === 0 ? <p>loading questions</p> : <p> Good luck!</p>}

<button
  className={data.length === 0 ? 'hide' : 'button is-info is-medium'}
  onClick={onQuizStart}>
  Start
</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(challenge);