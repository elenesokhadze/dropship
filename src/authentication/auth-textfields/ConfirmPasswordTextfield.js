import {useState} from "react";
import {TextField, InputAdornment} from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {IconButton} from "@material-ui/core";

export const ConfirmPasswordTextfield = ({...formik}) => {
 const [showPassword, setShowPassword] = useState(false);
 const handleClickShowPassword = () => setShowPassword(!showPassword);
 const handleMouseDownPassword = () => setShowPassword(!showPassword);

 return (
  <TextField
   placeholder="Confirm Password"
   name="passwordConfirmation"
   label="Confirm Password"
   variant="outlined"
   value={formik.values.passwordConfirmation}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   error={
    formik.touched.passwordConfirmation &&
    Boolean(formik.errors.passwordConfirmation)
   }
   helperText={
    formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
   }
   type={showPassword ? "text" : "password"}
   style={{width: "80%", color: "grey"}}
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
 );
};
