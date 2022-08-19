import {useState} from "react";
import {TextField, InputAdornment, IconButton} from "@material-ui/core";
import {UserTextfieldLabel} from "./user.styled";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export const UserPasswordTextfield = () => {
 const [showPassword, setShowPassword] = useState(false);
 const handleClickShowPassword = () => setShowPassword(!showPassword);
 const handleMouseDownPassword = () => setShowPassword(!showPassword);
 let password = JSON.parse(localStorage.getItem("Password") || null);

 return (
  <div style={{width: "100%"}}>
   <UserTextfieldLabel>Current Password</UserTextfieldLabel>
   <TextField
    size="small"
    variant="outlined"
    disabled
    style={{width: "100%"}}
    value={password}
    type={showPassword ? "text" : "password"}
    InputProps={{
     startAdornment: (
      <InputAdornment position="start">
       <VpnKeyIcon color="primary" />
      </InputAdornment>
     ),
     endAdornment: (
      <InputAdornment position="end">
       <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
       >
        {showPassword ? <Visibility /> : <VisibilityOff />}
       </IconButton>
      </InputAdornment>
     ),
    }}
   />
  </div>
 );
};
