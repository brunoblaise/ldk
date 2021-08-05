import React, {  useState, useEffect, Suspense} from "react";
const Render= React.lazy(() => import('./renders/Render'));
const Login= React.lazy(() => import('./body/Login'));
const Profile= React.lazy(() => import('./body/Profile'));
const Register= React.lazy(() => import('./body/Register'));

const RenderT = React.lazy(() => import('./renders1/RenderT'));
const LoginT= React.lazy(() => import('./bodyT/LoginT'));
const ProfileT = React.lazy(() => import('./bodyT/ProfileT'));

const RegisterT  = React.lazy(() => import('./bodyT/RegisterT'));
const  Notes= React.lazy(() => import('./body/Notes'));
const Quiz = React.lazy(() => import('./body/Quiz'));
import "react-toastify/dist/ReactToastify.css";
const  Exercise = React.lazy(() => import('./body/Exercise'));
const  ExerciseOne = React.lazy(() => import('./body/ExerciseOne'));

import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const  Library = React.lazy(() => import('./body/Library'));
const  LibraryT = React.lazy(() => import('./bodyT/LibraryT'));
const DownloadWork  = React.lazy(() => import('./body/DownloadWork'));

import { toast } from "react-toastify";

const  Message= React.lazy(() => import('./body/Message'));
const  MessageT = React.lazy(() => import('./bodyT/MessageT'));
const  Onenotes  = React.lazy(() => import('./body/Onenotes'));


import {ProfileProvide} from './body/context/ProfileContext'
import {TeacherProvide} from './bodyT/context/TeacherContext'


const WorkSub = React.lazy(() => import('./body/WorkSub'));
const Report = React.lazy(() => import('./body/Report'));
const Land = React.lazy(() => import('./land/Land'));

import { url } from "./url";
const ExerciseT = React.lazy(() => import('./bodyT/ExercisetT'));
const NotesT = React.lazy(() => import('./bodyT/NotesT'));
const ReportT = React.lazy(() => import('./bodyT/ReportT'));

const WorkSubT = React.lazy(() => import('./bodyT/WorkSubT'));
const Onenotesu = React.lazy(() => import('./bodyT/Onenotesu'));
const Notesu = React.lazy(() => import('./bodyT/Notesu'));

const Allstudents = React.lazy(() => import('./bodyT/Allstudents'));

toast.configure();
function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch(`${url}/create/verify`, {
        method: "POST",
        headers: { jwt_token: localStorage.token }
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

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
 
    <Router>
         <Suspense fallback={<div className="center"><img src="https://img.icons8.com/ios-filled/500/000000/loading-circle--v6.png"/></div>}>
    <Switch>
    <Route
              exact
              path="/"
            component={Land}
            />
 
    <ProfileProvide>
    <Route
              exact
              path="/login"
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            
            
 
            
            <Route
              exact
              path="/dashboard"
              render={props =>
                isAuthenticated ? (
                  <Render {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={props =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />

<Route
              exact
              path="/profile"
              render={props =>
                isAuthenticated ? (
                  <Profile {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

<Route
              exact
              path="/notes"
              render={props =>
                isAuthenticated ? (
                  <Notes {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
             <Route
              exact
              path="/works"
              render={props =>
                isAuthenticated ? (
                  <Quiz {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/exercise"
              render={props =>
                isAuthenticated ? (
                  <Exercise {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

<Route
              exact
              path="/library"
              render={props =>
                isAuthenticated ? (
                  <Library {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

<Route
              exact
              path="/message"
              render={props =>
                isAuthenticated ? (
                  <Message {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/notes/:id"
              render={props =>
                isAuthenticated ? (
                  <Onenotes {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
               <Route
              exact
              path="/exercise/:id"
              render={props =>
                isAuthenticated ? (
                  <ExerciseOne {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
              <Route
              exact
              path="/work/:id"
              render={props =>
                isAuthenticated ? (
                  <DownloadWork {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
           
           <Route
              exact
              path="/worksub"
              render={props =>
                isAuthenticated ? (
                  <WorkSub {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
                <Route
              exact
              path="/report"
              render={props =>
                isAuthenticated ? (
                  <Report {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

<TeacherProvide>


<Route
              exact
              path="/loginT"
              render={props =>
                !isAuthenticated ? (
                  <LoginT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboardT" />
                )
              }
            />
            
            
 
            
            <Route
              exact
              path="/dashboardT"
              render={props =>
                isAuthenticated ? (
                  <RenderT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
            <Route
              exact
              path="/registerT"
              render={props =>
                !isAuthenticated ? (
                  <RegisterT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboardT" />
                )
              }
            />

<Route
              exact
              path="/Teacher"
              render={props =>
                isAuthenticated ? (
                  <ProfileT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />


<Route
              exact
              path="/libraryT"
              render={props =>
                isAuthenticated ? (
                  <LibraryT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />

<Route
              exact
              path="/messageT"
              render={props =>
                isAuthenticated ? (
                  <MessageT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
           <Route
              exact
              path="/notesT"
              render={props =>
                isAuthenticated ? (
                  <NotesT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
           
            <Route
              exact
              path="/exerciseT"
              render={props =>
                isAuthenticated ? (
                  <ExerciseT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
                <Route
              exact
              path="/reportT"
              render={props =>
                isAuthenticated ? (
                  <ReportT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
   <Route
              exact
              path="/worksT"
              render={props =>
                isAuthenticated ? (
                  <WorkSubT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
     <Route
              exact
              path="/worksubT/:id"
              render={props =>
                isAuthenticated ? (
                  <Onenotesu {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
             <Route
              exact
              path="/allstudent"
              render={props =>
                isAuthenticated ? (
                  <Allstudents {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
            <Route
              exact
              path="/worksubT"
              render={props =>
                isAuthenticated ? (
                  <Notesu {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
            </TeacherProvide>
            </ProfileProvide>

  
    </Switch>
    </Suspense>
</Router>

  );
}

export default  React.memo(App);
