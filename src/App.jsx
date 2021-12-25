/** @format */

import React, {useState, useEffect, Suspense} from 'react';
const Render = React.lazy(() => import('./renders/Render'));
const Login = React.lazy(() => import('./body/Login'));
const Profile = React.lazy(() => import('./body/Profile'));
const Register = React.lazy(() => import('./body/Register'));
const RenderT = React.lazy(() => import('./renders1/RenderT'));
const LoginT = React.lazy(() => import('./bodyT/LoginT'));
const ProfileT = React.lazy(() => import('./bodyT/ProfileT'));
const RegisterT = React.lazy(() => import('./bodyT/RegisterT'));
const Notes = React.lazy(() => import('./body/Notes'));
const Quiz = React.lazy(() => import('./body/Quiz'));
import 'react-toastify/dist/ReactToastify.css';

import {v4 as uuidV4} from 'uuid';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const Library = React.lazy(() => import('./body/Library'));
const LibraryT = React.lazy(() => import('./bodyT/LibraryT'));
const DownloadWork = React.lazy(() => import('./body/DownloadWork'));

import {toast} from 'react-toastify';

const VideoCall = React.lazy(() => import('./page/Meeting'));
const JoinMeeting = React.lazy(() => import('./page/Join'));
const Message = React.lazy(() => import('./body/Message'));
const MessageT = React.lazy(() => import('./bodyT/MessageT'));
const Onenotes = React.lazy(() => import('./body/Onenotes'));

import {ProfileProvide} from './body/context/ProfileContext';
import {TeacherProvide} from './bodyT/context/TeacherContext';

const Report = React.lazy(() => import('./body/Report'));
const Land = React.lazy(() => import('./land/Land'));

import {url} from './url';
import {ErrorBoundary} from 'react-error-boundary';

const Error = React.lazy(() => import('./error/Error'));

const SyllabusT = React.lazy(() => import('./bodyT/home/SyllabusT'));
const Syllabus = React.lazy(() => import('./body/Syllabus'));
const Registe = React.lazy(() => import('./Newstyudenty/Registe'));
const Mywork = React.lazy(() => import('./bodyT/home/Mywork'));
const Seen = React.lazy(() => import('./bodyT/home/Seen'));

const Fallback = React.lazy(() => import('./Fallback'));
const Openw = React.lazy(() => import('./body/quiz/Openw'));
const Openq = React.lazy(() => import('./bodyT/open/Openq'));
const ForgetT = React.lazy(() => import('./res/ForgetT'));
const ResetT = React.lazy(() => import('./res/ResetT'));
const Forget = React.lazy(() => import('./res/Forget'));
const Reset = React.lazy(() => import('./res/Reset'));

const CreateTest = React.lazy(() => import('./bodyT/CreateTest'));
const Screen = React.lazy(() => import('./body/quiz//Screen'));
const Rostudent = React.lazy(() => import('./body/Rostudent'));
const TestRoom = React.lazy(() => import('./body/TestRoom'));
const Class = React.lazy(() => import('./bodyT/Class'));
const Rooms = React.lazy(() => import('./bodyT/Rooms'));
const Texteditor = React.lazy(() => import('./texteditor/Texteditor'));
const NotesT = React.lazy(() => import('./bodyT/NotesT'));
const ReportT = React.lazy(() => import('./bodyT/ReportT'));
const WorkSubT = React.lazy(() => import('./bodyT/WorkSubT'));
toast.configure();
function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch(`${url}/create/verify`, {
        method: 'POST',
        headers: {jwt_token: localStorage.token},
      });
      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  const errorHandle = (error, errorInfo) => {
    console.log('logging', error, errorInfo);
  };
  const getOnLineStatus = () =>
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? navigator.onLine
      : true;

  const useNavigatorOnLine = () => {
    const [status, setStatus] = React.useState(getOnLineStatus());

    const setOnline = () => setStatus(true);
    const setOffline = () => setStatus(false);

    React.useEffect(() => {
      window.addEventListener('online', setOnline);
      window.addEventListener('offline', setOffline);

      return () => {
        window.removeEventListener('online', setOnline);
        window.removeEventListener('offline', setOffline);
      };
    }, []);

    return status;
  };
  const isOnline = useNavigatorOnLine();
  return (
    <Router>
      <Suspense
        fallback={
          <p className='fall'>loading the application please hold on... </p>
        }>
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandle}>
          {isOnline ? (
            <ProfileProvide>
              <TeacherProvide>
                <Routes>
                  <Route path='*' element={<Error />} />
                  <Route path='/meet' element={<JoinMeeting />} />
                  <Route path='/video/:id' element={<VideoCall />} />
                  <Route path='/' element={<Land />} />
                  <Route
                    path='/text'
                    element={
                      <Navigate replace to={`/text/documents/${uuidV4()}`} />
                    }></Route>
                  <Route
                    path='/text/documents/:id'
                    element={<Texteditor setAuth={setAuth} />}
                  />

                  <Route path='/new/register' element={<Registe />} />

                  <Route
                    path='/login'
                    element={
                      !isAuthenticated ? (
                        <Login setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/dashboard' />
                      )
                    }
                  />

                  <Route
                    path='/dashboard'
                    element={
                      isAuthenticated ? (
                        <Render setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/open/:id'
                    element={
                      isAuthenticated ? (
                        <Openw setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route path='/forget' element={<Forget />} />

                  <Route path='/forget/:id/:token' element={<Reset />} />
                  <Route path='/forgetT' element={<ForgetT />} />

                  <Route path='/forgetT/:id/:token' element={<ResetT />} />
                  <Route
                    path='/register/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYnJ1bm9ibGFpc2U5NEBnbWFpbC5jb20iLCJpZCI6IjMwOTE5MTZkLTEyODgtNDZlMy04NTZkLWE0ZWJkOWVhMWEwNSJ9LCJpYXQiOjE2NDAyODMxMjAsImV4cCI6MTY0MDI5MDMyMH0.zdscUYiOXMkOS20ABCs2-VP5_VL_WkxCjkrXwg-VyuQ'
                    element={
                      !isAuthenticated ? (
                        <Register setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/dashboard' />
                      )
                    }
                  />

                  <Route
                    path='/profile'
                    element={
                      isAuthenticated ? (
                        <Profile setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />

                  <Route
                    path='/notes'
                    element={
                      isAuthenticated ? (
                        <Notes setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />

                  <Route
                    path='/syllabus'
                    element={
                      isAuthenticated ? (
                        <Syllabus setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/room/student'
                    element={
                      isAuthenticated ? (
                        <Rostudent setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/works'
                    element={
                      isAuthenticated ? (
                        <Quiz setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />

                  <Route
                    path='/library'
                    element={
                      isAuthenticated ? (
                        <Library setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/room/test'
                    element={
                      isAuthenticated ? (
                        <TestRoom setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/room/test/:id'
                    element={
                      isAuthenticated ? (
                        <Screen setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />
                  <Route
                    path='/message'
                    element={
                      isAuthenticated ? (
                        <Message setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />

                  <Route
                    path='/notes/:id'
                    element={
                      isAuthenticated ? (
                        <Onenotes setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />

                  <Route
                    path='/work/:id'
                    element={
                      isAuthenticated ? (
                        <DownloadWork setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />

                  <Route
                    path='/report'
                    element={
                      isAuthenticated ? (
                        <Report setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/login' />
                      )
                    }
                  />

                  <Route
                    path='/loginT'
                    element={
                      !isAuthenticated ? (
                        <LoginT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/dashboardT' />
                      )
                    }
                  />

                  <Route
                    path='/dashboardT'
                    element={
                      isAuthenticated ? (
                        <RenderT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/registerT/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYnJ1bm9ibGFpc2U5NEBnbWFpbC5jb20iLCJpZCI6IjMwOTE5MTZkLTEyODgtNDZlMy04NTZkLWE0ZWJkOWVhMWEwNSJ9LCJpYXQiOjE2NDAyODMxMjAsImV4cCI6MTY0MDI5MDMyMH0.zdscUYiOXMkOS20ABCs2-VP5_VL_WkxCjkrXwg-VyuQ'
                    element={
                      !isAuthenticated ? (
                        <RegisterT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/dashboardT' />
                      )
                    }
                  />
                  <Route
                    path='/create/room/test'
                    element={
                      isAuthenticated ? (
                        <CreateTest setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/Syllabust'
                    element={
                      isAuthenticated ? (
                        <SyllabusT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/Teacher'
                    element={
                      isAuthenticated ? (
                        <ProfileT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/libraryT'
                    element={
                      isAuthenticated ? (
                        <LibraryT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/messageT'
                    element={
                      isAuthenticated ? (
                        <MessageT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />
                  <Route
                    path='/notesT'
                    element={
                      isAuthenticated ? (
                        <NotesT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/reportT'
                    element={
                      isAuthenticated ? (
                        <ReportT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />
                  <Route
                    path='/worksT'
                    element={
                      isAuthenticated ? (
                        <WorkSubT setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/class'
                    element={
                      isAuthenticated ? (
                        <Rooms setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/class/room/:id'
                    element={
                      isAuthenticated ? (
                        <Class setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />

                  <Route
                    path='/mywork/:id'
                    element={
                      isAuthenticated ? (
                        <Mywork setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />
                  <Route
                    path='/work_to_one/:name/:email/:teacher/:id'
                    element={
                      isAuthenticated ? (
                        <Seen setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />
                  <Route
                    path='/ope/question'
                    element={
                      isAuthenticated ? (
                        <Openq setAuth={setAuth} />
                      ) : (
                        <Navigate replace to='/loginT' />
                      )
                    }
                  />
                </Routes>
              </TeacherProvide>
            </ProfileProvide>
          ) : (
            <p className='offline_web'> you are offline</p>
          )}
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
}

export default React.memo(App);
