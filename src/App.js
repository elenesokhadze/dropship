import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./main/Main";
import LandingPage from "./landing-page/LandingPage";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import User from "./user/User";
import Menu from "./menu/Menu";
import Cart from "./cart/Cart";
import {StyledThemeProvider} from "./theme";
import PrivateRoute from "./PrivateRoute";

function App() {
 return (
  <div className="App">
   <Router>
    <Switch>
     <StyledThemeProvider>
      <Route exact path="/">
       <LandingPage />
      </Route>
      <Route exact path="/login">
       <Login />
      </Route>
      <Route path="/register">
       <Register />
      </Route>
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/cart" component={Cart} />
      <PrivateRoute path="/catalog/:id?" component={Main} />
     </StyledThemeProvider>
    </Switch>
   </Router>
  </div>
 );
}

export default App;
