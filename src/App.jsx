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
const Exercise = React.lazy(() => import('./body/Exercise'));
const ExerciseOne = React.lazy(() => import('./body/ExerciseOne'));
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

const WorkSub = React.lazy(() => import('./body/WorkSub'));
const Report = React.lazy(() => import('./body/Report'));
const Land = React.lazy(() => import('./land/Land'));

import {url} from './url';
import {ErrorBoundary} from 'react-error-boundary';
import {Fallback} from './Fallback';

const MarkOne = React.lazy(() => import('./bodyT/MarkOne'));
const MarkClass = React.lazy(() => import('./bodyT/MarkClass'));
const CreateTest = React.lazy(() => import('./bodyT/CreateTest'));
const Screen = React.lazy(() => import('./body/quiz//Screen'));
const Rostudent = React.lazy(() => import('./body/Rostudent'));
const TestRoom = React.lazy(() => import('./body/TestRoom'));
const Class = React.lazy(() => import('./bodyT/Class'));
const Rooms = React.lazy(() => import('./bodyT/Rooms'));
const Texteditor = React.lazy(() => import('./texteditor/Texteditor'));
const ExerciseT = React.lazy(() => import('./bodyT/ExercisetT'));
const NotesT = React.lazy(() => import('./bodyT/NotesT'));
const ReportT = React.lazy(() => import('./bodyT/ReportT'));

const WorkSubT = React.lazy(() => import('./bodyT/WorkSubT'));
const Onenotesu = React.lazy(() => import('./bodyT/Onenotesu'));
const Notesu = React.lazy(() => import('./bodyT/Notesu'));

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
  return (
    <Router>
      <Suspense
        fallback={
          <h1 className='fall'>
            loading the application please hold on💕💕💕...{' '}
          </h1>
        }>
        <Switch>
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

          <ErrorBoundary FallbackComponent={Fallback} onError={errorHandle}>
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
                path='/register'
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
                path='/exercise'
                render={(props) =>
                  isAuthenticated ? (
                    <Exercise {...props} setAuth={setAuth} />
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
                path='/message'
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
                path='/exercise/:id'
                render={(props) =>
                  isAuthenticated ? (
                    <ExerciseOne {...props} setAuth={setAuth} />
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
                path='/worksub'
                render={(props) =>
                  isAuthenticated ? (
                    <WorkSub {...props} setAuth={setAuth} />
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
                  path='/registerT'
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
                  path='/exerciseT'
                  render={(props) =>
                    isAuthenticated ? (
                      <ExerciseT {...props} setAuth={setAuth} />
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
                  path='/worksubT/:id'
                  render={(props) =>
                    isAuthenticated ? (
                      <Onenotesu {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/loginT' />
                    )
                  }
                  exact
                />

                <Route
                  path='/worksubT'
                  render={(props) =>
                    isAuthenticated ? (
                      <Notesu {...props} setAuth={setAuth} />
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
                  path='/room/mark'
                  render={(props) =>
                    isAuthenticated ? (
                      <MarkClass {...props} setAuth={setAuth} />
                    ) : (
                      <Redirect to='/loginT' />
                    )
                  }
                  exact
                />
                <Route
                  path='/class/room/mark/:id'
                  render={(props) =>
                    isAuthenticated ? (
                      <MarkOne {...props} setAuth={setAuth} />
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
              </TeacherProvide>
            </ProfileProvide>
          </ErrorBoundary>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default React.memo(App);
