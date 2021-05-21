import Group306 from './Group 306.svg';
import Setlogin from './Setlogin';
import Path159 from './Path 159.svg';
import Login from './login/Login';
import HomeScreen from './Home Screen/HomeScreen';
import LeaveForm from './Leaveform/LeaveForm';
import LeaveEdit from './LeaveEdit/LeaveEdit';
import Standup from './Standup/Standup';
import StandupEdit from './StandupEdit/StandupEdit';
import Setfooter from './Setfooter';
import google from './google-symbol.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
      <Link to="/"></Link>
      <Link to="/HomeScreen"></Link> 
      <Link to="/LeaveForm"></Link>
      <Link t0="/LeaveEdit"></Link>
      <Link to="/Standup"></Link> 
      <Link to="/StandupEdit"></Link>
      <Switch>
        <Route path="/HomeScreen">
          <HomeScreen />
        </Route>
        <Route path="/LeaveForm">
          <LeaveForm />
        </Route>
        <Route path="/LeaveEdit">
          <LeaveEdit/>
        </Route>
        <Route path="/Standup">
          <Standup/>
        </Route>
        <Route path="/StandupEdit">
          <StandupEdit/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
