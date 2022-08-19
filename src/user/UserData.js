import {UserDataContainer, LogoutButtonMobile} from "./user.styled";
import LogoutButton from "./LogoutButton";
import {UserEmailTextfield} from "./UserEmailTextfield";
import {UserPasswordTextfield} from "./UserPasswordTextfield";

export const UserData = () => {
 return (
  <UserDataContainer id="UserTextfieldContainer">
   <UserEmailTextfield />
   <UserPasswordTextfield />
   <LogoutButtonMobile id="LogoutButtonMobile">
    <LogoutButton />
   </LogoutButtonMobile>
  </UserDataContainer>
 );
};
