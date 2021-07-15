import React, {  useState, useEffect } from "react";
import Render from './renders/Render';
import Login from './body/Login';
import Profile from "./body/Profile"
import Register from "./body/Register";

import RenderT from './renders1/RenderT';
import LoginT from './bodyT/LoginT';
import ProfileT from "./bodyT/ProfileT"
import RegisterT from "./bodyT/RegisterT";
import "react-toastify/dist/ReactToastify.css";
import Notes from "./body/Notes";
import  Quiz from "./body/Quiz";
import Exercise from "./body/Exercise";
import ExerciseOne from "./body/ExerciseOne";
import DownloadWork from "./body/DownloadWork";
import "./App.css"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Library from "./body/Library";
import LibraryT from "./bodyT/LibraryT";
import { toast } from "react-toastify";
import Message from "./body/Message";
import MessageT from "./bodyT/MessageT";
import Onenotes from "./body/Onenotes";
import {ProfileProvide} from './body/context/ProfileContext'
import {TeacherProvide} from './bodyT/context/TeacherContext'
import WorkSub from "./body/WorkSub";
import Report from "./body/Report";
import Land from "./land/Land";
import ExerciseT from "./bodyT/ExercisetT";
import NotesT from "./bodyT/NotesT";
import ReportT from "./bodyT/ReportT";
import WorkSubT from "./bodyT/WorkSubT";
import Onenotesu from "./bodyT/Onenotesu";
import Notesu from "./bodyT/Notesu";
import Allstudents from "./bodyT/Allstudents";
toast.configure();
function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/create/verify", {
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
  
</Router>

  );
}

export default App;
