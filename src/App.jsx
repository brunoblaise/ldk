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
import { v4 as uuidV4 } from "uuid"
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

const  Texteditor = React.lazy(() => import('./texteditor/Texteditor'));
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
         <Suspense fallback={<div>loading... if nothing is seen please refresh</div>}>
       
    <Switch>
    <Route   
              path="/"
              exact
            component={Land}
            />
              <Route path="/text" exact>
          <Redirect to={`/text/documents/${uuidV4()}`} />
        </Route>
        <Route 
        path="/text/documents/:id" 
        exact
        render={props =>
          !isAuthenticated ? (
            <Texteditor {...props} setAuth={setAuth} />
          ) : (
            <Redirect to="/" />
          )
        }
        />
         
       
    <ProfileProvide>
    <Route
            
              path="/login"
              exact
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            
            
 
            
            <Route
              path="/dashboard"
              exact
              render={props =>
                isAuthenticated ? (
                  <Render {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
             
              path="/register"
              exact
              render={props =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />

<Route
           
              path="/profile"
              exact
              render={props =>
                isAuthenticated ? (
                  <Profile {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

<Route
            
              path="/notes"
              exact
              render={props =>
                isAuthenticated ? (
                  <Notes {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
             <Route
         
              path="/works"
              exact
              render={props =>
                isAuthenticated ? (
                  <Quiz {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
            
              path="/exercise"
              exact
              render={props =>
                isAuthenticated ? (
                  <Exercise {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

<Route
            
              path="/library"
              exact
              render={props =>
                isAuthenticated ? (
                  <Library {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

<Route
            
              path="/message"
              exact
              render={props =>
                isAuthenticated ? (
                  <Message {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
             
              path="/notes/:id"
              exact
              render={props =>
                isAuthenticated ? (
                  <Onenotes {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
               <Route
              
              path="/exercise/:id"
              exact
              render={props =>
                isAuthenticated ? (
                  <ExerciseOne {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
              <Route
            
              path="/work/:id"
              exact
              render={props =>
                isAuthenticated ? (
                  <DownloadWork {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
           
           <Route
              
              path="/worksub"
              exact
              render={props =>
                isAuthenticated ? (
                  <WorkSub {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
                <Route
              
              path="/report"
              exact
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
           
              path="/loginT"
              exact
              render={props =>
                !isAuthenticated ? (
                  <LoginT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboardT" />
                )
              }
            />
            
            
 
            
            <Route
             
              path="/dashboardT"
              exact
              render={props =>
                isAuthenticated ? (
                  <RenderT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
            <Route
             
              path="/registerT"
              exact
              render={props =>
                !isAuthenticated ? (
                  <RegisterT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboardT" />
                )
              }
            />

<Route
              
              path="/Teacher"
              exact
              render={props =>
                isAuthenticated ? (
                  <ProfileT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />


<Route
             
              path="/libraryT"
              exact
              render={props =>
                isAuthenticated ? (
                  <LibraryT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />

<Route
             
              path="/messageT"
              exact
              render={props =>
                isAuthenticated ? (
                  <MessageT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
           <Route
            
              path="/notesT"
              exact
              render={props =>
                isAuthenticated ? (
                  <NotesT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
           
            <Route
             
              path="/exerciseT"
              exact
              render={props =>
                isAuthenticated ? (
                  <ExerciseT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
                <Route
             
              path="/reportT"
              exact
              render={props =>
                isAuthenticated ? (
                  <ReportT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
   <Route
             
              path="/worksT"
              exact
              render={props =>
                isAuthenticated ? (
                  <WorkSubT {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
     <Route
            
              path="/worksubT/:id"
              exact
              render={props =>
                isAuthenticated ? (
                  <Onenotesu {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
             <Route
             
              path="/allstudent"
              exact
              render={props =>
                isAuthenticated ? (
                  <Allstudents {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/loginT" />
                )
              }
            />
            <Route
             
              path="/worksubT"
              exact
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
