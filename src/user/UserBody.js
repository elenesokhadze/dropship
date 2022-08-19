import user from "../assets/user.jpg";
import {
 UserBodyContainer,
 UserDivider,
 UserInfoContainer,
 UserProfileContainer,
} from "./user.styled";
import {UserData} from "./UserData";

export const UserBody = () => {
 return (
  <UserBodyContainer id="UserBodyContainer">
   <UserDivider />
   <UserInfoContainer id="UserInfoContainer">
    <h2>Personal Details</h2>
    <UserProfileContainer id="UserProfileContainer">
     <img src={user} alt="user" />
    </UserProfileContainer>
    <UserData />
   </UserInfoContainer>
  </UserBodyContainer>
 );
};
