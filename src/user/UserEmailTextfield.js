import {TextField} from "@material-ui/core";
import {UserTextfieldLabel} from "./user.styled";

export const UserEmailTextfield = () => {
 let email = JSON.parse(localStorage.getItem("Email") || null);

 return (
  <div style={{width: "100%"}}>
   <UserTextfieldLabel>Current Email</UserTextfieldLabel>
   <TextField
    size="small"
    variant="outlined"
    style={{width: "100%"}}
    value={email}
    disabled
   />
  </div>
 );
};
