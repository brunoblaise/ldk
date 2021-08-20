import React, { useState, useEffect, useRef} from 'react';

function OneTest({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion,onSetStep,notes }) {
    
    const [counter, setCounter] = useState(14400);
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
      useEffect( async ()  => {
        try{
          const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
          if(findCheckedInput) {
            findCheckedInput.checked = false;
          }
        }catch(error){
         console.log(error)
        }
      
      }, [data]);
    
      const changeHandler = (e) => {
        setSelected(e.target.value);
        if(error) {
          setError('');
        }
      }
      
      const nextClickHandler = (e) => {
        if(selected === '') {
          return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.test_question, a: selected }]);
        setSelected('');
        if(activeQuestion < numberOfQuestions - 1) {
          onSetActiveQuestion(activeQuestion + 1);
        }else {
          onSetStep(3);
        }
      }
    return (
        <div className="container o">
      <div id="game" className="justify-center flex-column">
        <div id="hud">
          <div id="hud-item">
            <p id="progressText" className="hud-prefix">
              Question
            </p>
            <div id="progressBar">
              <div id="progressBarFull"></div>
            </div>
          </div>
          <div id="hud-item">
            <p className="hud-prefix">
              Time
            </p>
            <h1 className="hud-main-text" id="score">
            {counter === 0 ? "over" : counter}
            </h1>
          </div>
        </div>
        <h2 id="question">{data.test_question}</h2>
        {data.test_choice.map((choice, i) => (
        <div className="choice-container" key={i} ref={radiosWrapper}>
          
         
              <label className="choice-text" className="radio has-background-light" >
                <input className="choice-prefix" type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
           
        </div>
         ))}
        {error && <div className="has-text-danger">{error}</div>}
       <button className= {counter === 0 ? "over" : "btn btn-info "}  onClick={nextClickHandler}>Next</button>
      </div>
    </div>
    )
}

export default React.memo(OneTest)
