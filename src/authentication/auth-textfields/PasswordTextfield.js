import {useState} from "react";
import {TextField, InputAdornment} from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {IconButton} from "@material-ui/core";

export const PasswordTextfield = ({...formik}) => {
 const [showPassword, setShowPassword] = useState(false);
 const handleClickShowPassword = () => setShowPassword(!showPassword);
 const handleMouseDownPassword = () => setShowPassword(!showPassword);
 return (
  <TextField
   placeholder="Password"
   name="password"
   label="Password"
   variant="outlined"
   value={formik.values.password}
   onBlur={formik.handleBlur}
   error={formik.touched.password && Boolean(formik.errors.password)}
   helperText={formik.touched.password && formik.errors.password}
   type={showPassword ? "text" : "password"}
   onChange={formik.handleChange}
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
