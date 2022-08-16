import {Formik, Form} from "formik";
import {useCallback} from "react";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import {PrimaryButton} from "../button/PrimaryButton";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase";
import {
 FormDialog,
 FormHeader,
 FormWrapper,
 FormTitle,
 FormLogo,
 BackToSignup,
 LoginInfo,
 AuthButtonContainer,
} from "./authentication.styled";
import {EmailTextfield} from "./auth-textfields/EmailTextfield";
import {PasswordTextfield} from "./auth-textfields/PasswordTextfield";

function LoginForm() {
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
     <Form>
      <FormWrapper id="FormWrapper">
       <FormDialog id="FormDialog">
        <FormHeader id="FormHeader">
         <FormLogo id="FormLogo" onClick={() => history.push("/")}>
          <img src={logo} alt="dropship" />
         </FormLogo>
         <FormTitle id="FormTitle">Log In</FormTitle>
        </FormHeader>
        <EmailTextfield {...formik} />
        <PasswordTextfield {...formik} />
        <AuthButtonContainer id="AuthButtonContainer">
         <PrimaryButton type="submit" disabled={!formik.isValid}>
          Submit
         </PrimaryButton>
        </AuthButtonContainer>
        <LoginInfo id="LoginInfo">
         Don't have an account?{" "}
         <BackToSignup href="/register">Sign Up</BackToSignup>
        </LoginInfo>
       </FormDialog>
      </FormWrapper>
     </Form>
    );
   }}
  </Formik>
 );
}

export default LoginForm;
