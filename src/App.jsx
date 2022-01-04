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
  Switch,
  Redirect,
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



const Onemessage  = React.lazy(() => import( './bodyT/Onemessage'));

const UpdateClass = React.lazy(() => import('./body/UpdateClass'));

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
        {isOnline ? (
          <Switch>
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandle}>
              <Route exact path='/meet' component={JoinMeeting} />
              <Route exact path='/video/:id' component={VideoCall} />
              <Route path='/' component={Land} exact />
              <Route path='/text' exact>
                <Redirect to={`/text/documents/${uuidV4()}`} />
              </Route>
              <Route
                path='/text/documents/:id'
                exact
                render={(props) => <Texteditor {...props} setAuth={setAuth} />}
              />

              <Route exact path='/new/register' component={Registe} />
              <ProfileProvide>
                <Route
                  path='/login'
                  render={(props) =>
                    !isAuthenticated ? (
                      <Login {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/dashboard' />
                    )
                  }
                  exact
                />

                <Route
                  path='/dashboard'
                  render={(props) =>
                    isAuthenticated ? (
                      <Render {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route
                  path='/UpdateClass'
                  render={(props) =>
                    isAuthenticated ? (
                      <UpdateClass {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route
                  path='/open/:id'
                  render={(props) =>
                    isAuthenticated ? (
                      <Openw {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route path='/forget' render={(props) => <Forget />} exact />

                <Route
                  path='/forget/:id/:token'
                  render={(props) => <Reset />}
                  exact
                />
                <Route path='/forgetT' render={(props) => <ForgetT />} exact />

                <Route
                  path='/forgetT/:id/:token'
                  render={(props) => <ResetT />}
                  exact
                />
                <Route
                  path='/register/WkxCjkrXwg'
                  render={(props) =>
                    !isAuthenticated ? (
                      <Register {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/dashboard' />
                    )
                  }
                  exact
                />

                <Route
                  path='/profile'
                  render={(props) =>
                    isAuthenticated ? (
                      <Profile {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />

                <Route
                  path='/notes'
                  render={(props) =>
                    isAuthenticated ? (
                      <Notes {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />

                <Route
                  path='/syllabus'
                  render={(props) =>
                    isAuthenticated ? (
                      <Syllabus {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route
                  path='/room/student'
                  render={(props) =>
                    isAuthenticated ? (
                      <Rostudent {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route
                  path='/works'
                  render={(props) =>
                    isAuthenticated ? (
                      <Quiz {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />

                <Route
                  path='/library'
                  render={(props) =>
                    isAuthenticated ? (
                      <Library {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route
                  path='/room/test'
                  render={(props) =>
                    isAuthenticated ? (
                      <TestRoom {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route
                  path='/room/test/:id'
                  render={(props) =>
                    isAuthenticated ? (
                      <Screen {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />
                <Route
                  path='/message/'
                  render={(props) =>
                    isAuthenticated ? (
                      <Message {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />

                <Route
                  path='/notes/:id'
                  render={(props) =>
                    isAuthenticated ? (
                      <Onenotes {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />

                <Route
                  path='/work/:id'
                  render={(props) =>
                    isAuthenticated ? (
                      <DownloadWork {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />

                <Route
                  path='/report'
                  render={(props) =>
                    isAuthenticated ? (
                      <Report {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/login' />
                    )
                  }
                  exact
                />

                <TeacherProvide>
                  <Route
                    path='/loginT'
                    render={(props) =>
                      !isAuthenticated ? (
                        <LoginT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/dashboardT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/dashboardT'
                    render={(props) =>
                      isAuthenticated ? (
                        <RenderT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/registerT/WkxCjkrXwg'
                    render={(props) =>
                      !isAuthenticated ? (
                        <RegisterT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/dashboardT' />
                      )
                    }
                    exact
                  />
                  <Route
                    path='/create/room/test'
                    render={(props) =>
                      isAuthenticated ? (
                        <CreateTest {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/Syllabust'
                    render={(props) =>
                      isAuthenticated ? (
                        <SyllabusT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/Teacher'
                    render={(props) =>
                      isAuthenticated ? (
                        <ProfileT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/libraryT'
                    render={(props) =>
                      isAuthenticated ? (
                        <LibraryT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/messageT'
                    render={(props) =>
                      isAuthenticated ? (
                        <MessageT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />
                  <Route
                    path='/messageT/:id'
                    render={(props) =>
                      isAuthenticated ? (
                        <Onemessage {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />
                  <Route
                    path='/notesT'
                    render={(props) =>
                      isAuthenticated ? (
                        <NotesT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/reportT'
                    render={(props) =>
                      isAuthenticated ? (
                        <ReportT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />
                  <Route
                    path='/worksT'
                    render={(props) =>
                      isAuthenticated ? (
                        <WorkSubT {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/class'
                    render={(props) =>
                      isAuthenticated ? (
                        <Rooms {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/class/room/:id'
                    render={(props) =>
                      isAuthenticated ? (
                        <Class {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />

                  <Route
                    path='/mywork/:id'
                    render={(props) =>
                      isAuthenticated ? (
                        <Mywork {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />
                  <Route
                    path='/work_to_one/:name/:email/:teacher/:id'
                    render={(props) =>
                      isAuthenticated ? (
                        <Seen {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />
                  <Route
                    path='/ope/question'
                    render={(props) =>
                      isAuthenticated ? (
                        <Openq {...props} setAuth={setAuth} />
                      ) : (
                        <Redirect to='/loginT' />
                      )
                    }
                    exact
                  />
                </TeacherProvide>
              </ProfileProvide>
            </ErrorBoundary>
            
          </Switch>
        ) : (
          <p className='offline_web'> you are offline</p>
        )}
      </Suspense>
    </Router>
  );
}

export default React.memo(App);
