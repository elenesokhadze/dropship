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
} from "./user.styled";
import LogoutButton from "./LogoutButton";

const User = () => {
 return (
  <>
   <Menu />
   <UserContainer>
    <UserHeading>
     <h3>my profile</h3>
     <LogoutButton />
    </UserHeading>
    <UserInnerContainer>
     <UserDivider />
     <UserInfoContainer>
      <h2>Personal Details</h2>
      <UserProfileContainer>
       <img src={user} alt="user" />
      </UserProfileContainer>
      <UserTextfieldContainer>
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
      </UserTextfieldContainer>
     </UserInfoContainer>
    </UserInnerContainer>
   </UserContainer>
  </>
 );
};

export default User;
