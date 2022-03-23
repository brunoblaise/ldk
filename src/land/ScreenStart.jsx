import React, {useState, useEffect, useContext} from 'react';
import {url} from '../../url';




const Onechallenge = React.lazy(() => import('./Onechallenge'));
const Challenge = React.lazy(() => import('./challenge'));
const End = React.lazy(() => import('./End'));
function Screen({match}) {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [notes, setNote] = useState([]);

  let controller = new AbortController();
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/challenge`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
        signal: controller.signal,
      });

      const parseData = await res.json();

      setNote(
        parseData
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const quizStartHandler = () => {
    setStep(2);
  };

  useEffect(() => {
    getProfile();
    return () => controller?.abort();
  }, []);


console.log('po', notes)

  return (
    <div>
      {step === 1 && <Challenge onQuizStart={quizStartHandler} data={notes} />}
      {step === 2 && (
        <Onechallenge
          data={notes[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={notes.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={notes}
        
          datas={notes[activeQuestion]}
        />
      )}
    </div>
  );
}

export default React.memo(Screen);