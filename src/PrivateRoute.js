import {Route, Redirect} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";
import Spinner from "./spinner/Spinner";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
 const auth = getAuth();
 const [currentUser, setCurrentUser] = useState(null);
 const [spinner, setSpinner] = useState(true);

 useEffect(() => {
  setTimeout(() => setSpinner(false), 2000);
 }, []);

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
   if (user !== null) {
    setCurrentUser(user.uid);
   }
  });
 }, [auth, currentUser]);

 if (spinner) {
  return <Spinner />;
 } else
  return (
   <Route
    {...rest}
    render={(routeProps) =>
     currentUser ? (
      <RouteComponent {...routeProps} />
     ) : (
      <Redirect to={"/login"} />
     )
    }
   />
  );
};

export default PrivateRoute;
