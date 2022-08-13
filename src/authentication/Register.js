import {Formik, Form} from "formik";
import * as Yup from "yup";
import "./authentication.css";
import logo from "../assets/logo.png";
import {TextField, InputAdornment} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {useState} from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {IconButton} from "@material-ui/core";
import {PrimaryButton} from "../button/PrimaryButton";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from "../firebase";

function Register() {
 const [showPassword, setShowPassword] = useState(false);
 const handleClickShowPassword = () => setShowPassword(!showPassword);
 const handleMouseDownPassword = () => setShowPassword(!showPassword);
 const [email, setEmail] = useState(null);
 const [password, setPassword] = useState(null);

 const performRegister = (values, {setSubmitting}) => {
  setEmail(values.email);
  setPassword(values.password);
  localStorage.setItem("Email", JSON.stringify(email));
  localStorage.setItem("Password", JSON.stringify(password));

  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    alert("Successfully created an account");
    // ...
   })
   .catch((error) => {
    const errorCode = error.code;
    alert(errorCode);
    // ..
   });
  setSubmitting(false);
 };

 const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
 };

 const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirmation: Yup.string()
   .oneOf([Yup.ref("password"), ""], "Passwords must match")
   .required("Required"),
 });

 const auth = getAuth(app);

 return (
  <Formik
   initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={performRegister}
  >
   {(formik) => {
    return (
     <Form className="form__wrapper">
      <div className="form__dialog form__dialog--register">
       <div className="form__header">
        <div className="form__logo">
         <img src={logo} alt="" />
        </div>
        <h3 className="form__title">Sign Up</h3>
       </div>
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
         formik.touched.passwordConfirmation &&
         formik.errors.passwordConfirmation
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
       <div className="register__button">
        <PrimaryButton type="submit" disabled={!formik.isValid}>
         Sign Up
        </PrimaryButton>
       </div>
       <span className="social__title"></span>
       <span className="login__info">
        Already have an account?{" "}
        <strong>
         <a className="login-to-signUp" href="/login">
          Sign in
         </a>
        </strong>
       </span>
      </div>
     </Form>
    );
   }}
  </Formik>
 );
}

export default Register;
