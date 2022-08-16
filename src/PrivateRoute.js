import {Route, Redirect} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useState} from "react";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
 const auth = getAuth();
 const [currentUser, setCurrentUser] = useState(null);
 onAuthStateChanged(auth, (user) => {
  if (user) {
   setCurrentUser(user);
   // ...
  }
 });
 return (
  <Route
   {...rest}
   render={(routeProps) =>
    currentUser !== null ? (
     <RouteComponent {...routeProps} />
    ) : (
     <Redirect to={"/login"} />
    )
   }
  ></Route>
 );
};

export default PrivateRoute;
