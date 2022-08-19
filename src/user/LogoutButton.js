import {useHistory} from "react-router-dom";
import {SecondaryButton} from "../button/SecondaryButton";

const LogoutButton = () => {
 const history = useHistory();

 const performLogout = () => {
  localStorage.clear();
  history.push("/login");
 };

 return (
  <>
   <SecondaryButton onClick={performLogout}>Sign Out </SecondaryButton>
  </>
 );
};
export default LogoutButton;
