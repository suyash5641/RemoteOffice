import Login from "./Login/Login";
import HomeScreen from "./Home Screen/HomeScreen";
import LeaveForm from "./Leaveform/LeaveForm";
import Leavemodify from "./Leavemodify/Leavemodify";
import LeaveEdit from "./LeaveEdit/LeaveEdit";
import Standup from "./Standup/Standup";
import StandupEdit from "./StandupEdit/StandupEdit";
//import Standuphistory from "./Standuphistory/Standuphistory";
import Holiday from "./Holiday/Holiday";
import Complete from "./Complete/Complete";
import Message from "./Message/Message";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
//import CreateResource from "./Api";
const Standuphistory = React.lazy(() => import("./Standuphistory/Standuphistory"));

//const resource = CreateResource();
function App() {
  return (
    <>
      <Router>
        <div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path="/HomeScreen">
                <HomeScreen />
              </Route>
              <Route path="/LeaveForm">
                <LeaveForm />
              </Route>
              <Route path="/LeaveEdit">
                <LeaveEdit />
              </Route>
              <Route path="/Standup">
                <Standup />
              </Route>
              <Route path="/StandupEdit/:Id">
                <StandupEdit />
              </Route>
              <Route path="/Standuphistory">
                <Standuphistory />
              </Route>
              <Route path="/Holiday">
                <Holiday />
              </Route>
              <Route path="/Complete">
                <Complete />
              </Route>
              <Route path="/Leavemodify/:N">
                <Leavemodify />
              </Route>
              <Route path="/Message">
                <Message />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
