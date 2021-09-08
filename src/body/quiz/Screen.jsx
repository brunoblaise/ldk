import React, {useState, useEffect, useContext} from 'react';
import {url} from '../../url';
import {ProfileContext} from '../context/ProfileContext';

const OneTest = React.lazy(() => import('./OneTest'));
const Start = React.lazy(() => import('./Start'));
const End = React.lazy(() => import('./End'));
function Screen({match}) {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [notes, setNote] = useState([]);
  const [profile] = useContext(ProfileContext);
  let controller = new AbortController();
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/test`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
        signal: controller.signal,
      });

      const parseData = await res.json();

      setNote(
        parseData.filter(
          (fil) =>
            fil.class_year_content === id[0] &&
            fil.test_name === match.params.id,
        ),
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

  const id = profile.map((profil) => profil.class_student);

  return (
    <div>
      {step === 1 && <Start onQuizStart={quizStartHandler} data={notes} />}
      {step === 2 && (
        <OneTest
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
          nameu={match.params.id}
          datas={notes[activeQuestion]}
        />
      )}
    </div>
  );
}

export default React.memo(Screen);
