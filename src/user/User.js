import {TextField} from "@material-ui/core";
import user from "../assets/user.jpg";
import Menu from "../menu/Menu";
import {
 UserInnerContainer,
 UserHeading,
 UserContainer,
 UserDivider,
 UserInfoContainer,
 UserProfileContainer,
 UserTextfieldContainer,
 LogoutButtonDesktop,
 LogoutButtonMobile,
} from "./user.styled";
import LogoutButton from "./LogoutButton";

const User = () => {
 return (
  <>
   <Menu />
   <UserContainer id="UserContainer">
    <UserHeading id="UserHeading">
     <h3>my profile</h3>
     <LogoutButtonDesktop>
      <LogoutButton />
     </LogoutButtonDesktop>{" "}
    </UserHeading>
    <UserInnerContainer id="UserInnerContainer">
     <UserDivider />
     <UserInfoContainer id="UserInfoContainer">
      <h2>Personal Details</h2>
      <UserProfileContainer id="UserProfileContainer">
       <img src={user} alt="user" />
      </UserProfileContainer>
      <UserTextfieldContainer id="UserTextfieldContainer">
       <div style={{width: "100%"}}>
        <div style={{width: "100%", paddingBottom: "8px"}}>Current Email</div>
        <TextField size="small" variant="outlined" style={{width: "100%"}} />
       </div>
       <div style={{width: "100%"}}>
        <div style={{width: "100%", paddingBottom: "8px"}}>
         Current Password
        </div>
        <TextField size="small" variant="outlined" style={{width: "100%"}} />
       </div>
       <LogoutButtonMobile>
        <LogoutButton />
       </LogoutButtonMobile>
      </UserTextfieldContainer>
     </UserInfoContainer>
    </UserInnerContainer>
   </UserContainer>
  </>
 );
};

export default User;
