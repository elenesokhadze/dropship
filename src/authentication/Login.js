import {Formik, Form} from "formik";
import {useCallback} from "react";
import {Link, useHistory} from "react-router-dom";
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
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase";

function LoginForm() {
 const [showPassword, setShowPassword] = useState(false);
 const handleClickShowPassword = () => setShowPassword(!showPassword);
 const handleMouseDownPassword = () => setShowPassword(!showPassword);
 const auth = getAuth(app);
 const history = useHistory();

 const loggedIn = useCallback(() => {
  history.push("/catalog");
 }, [history]);

 const initialValues = {
  email: "",
  password: "",
 };

 const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
 });
 let email = JSON.parse(localStorage.getItem("Email") || null);
 let password = JSON.parse(localStorage.getItem("Password") || null);

 const performLogIn = () => {
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    loggedIn();
    alert("Successfully Logged In");
    // ...
   })
   .catch((error) => {
    const errorCode = error.code;
    alert(errorCode);
   });
 };
 return (
  <Formik
   initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={performLogIn}
  >
   {(formik) => {
    return (
     <Form className="form__wrapper">
      <div className="form__dialog form__dialog--login">
       <div className="form__header form__header--login">
        <div className="form__logo">
         <img src={logo} alt="" />
        </div>
        <h3 className="form__title">Members Log In</h3>
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
       <div className="login__button">
        <PrimaryButton type="submit" disabled={!formik.isValid}>
         Submit
        </PrimaryButton>
       </div>
       <span className="social__title"></span>
       <span className="login__info">
        Don't have an account?{" "}
        <strong>
         <Link className="login-to-signUp" to="/register">
          Sign Up
         </Link>
        </strong>
       </span>
      </div>
     </Form>
    );
   }}
  </Formik>
 );
}

export default LoginForm;
