import Menu from "../menu/Menu";
import {UserHeading, UserContainer, LogoutButtonDesktop} from "./user.styled";
import LogoutButton from "./LogoutButton";
import {UserBody} from "./UserBody";

const User = () => {
 return (
  <>
   <Menu />
   <UserContainer id="UserContainer">
    <UserHeading id="UserHeading">
     <h3>my profile</h3>
     <LogoutButtonDesktop id="LogoutButtonDesktop">
      <LogoutButton />
     </LogoutButtonDesktop>{" "}
    </UserHeading>
    <UserBody />
   </UserContainer>
  </>
 );
};

export default User;
