import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {TextField, InputAdornment} from "@material-ui/core";

export const EmailTextfield = ({...formik}) => {
 return (
  <TextField
   placeholder="E-mail"
   name="email"
   label="E-mail"
   variant="outlined"
   value={formik.values.email}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   error={formik.touched.email && Boolean(formik.errors.email)}
   helperText={formik.touched.email && formik.errors.email}
   style={{width: "80%", color: "grey"}}
   InputProps={{
    startAdornment: (
     <InputAdornment position="start">
      <MailOutlineIcon color="primary" />
     </InputAdornment>
    ),
   }}
  />
 );
};
