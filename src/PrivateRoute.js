import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
 let email = JSON.parse(localStorage.getItem("Email") || null);
 let password = JSON.parse(localStorage.getItem("Password") || null);

 return (
  <Route
   {...rest}
   render={(routeProps) =>
    email !== null && password !== null ? (
     <RouteComponent {...routeProps} />
    ) : (
     <Redirect to={"/login"} />
    )
   }
  ></Route>
 );
};

export default PrivateRoute;
