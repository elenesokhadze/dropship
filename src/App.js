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
      <Route path="/user">
       <Menu />
       <User />
      </Route>
      <Route path="/cart">
       <Menu />
       <Cart />
      </Route>
      <Route path="/register">
       <Register />
      </Route>
      <Route path="/catalog/:id?">
       <Main />
      </Route>
      <Route path="/cart">
       <Menu />
       <p>Elene</p>
      </Route>
     </StyledThemeProvider>
    </Switch>
   </Router>
  </div>
 );
}

export default App;
