import Login from "./login/Login";
import HomeScreen from "./Home Screen/HomeScreen";
import LeaveForm from "./Leaveform/LeaveForm";
import Leavemodify from "./Leavemodify/Leavemodify";
import LeaveEdit from "./LeaveEdit/LeaveEdit";
import Standup from "./Standup/Standup";
import StandupEdit from "./StandupEdit/StandupEdit";
import Standuphistory from "./Standuphistory/Standuphistory";
import Holiday from "./Holiday/Holiday";
import Complete from "./Complete/Complete";
import Message from "./Message/Message";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
