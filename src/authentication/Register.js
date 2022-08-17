import {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from "../firebase";
import logo from "../assets/logo.png";
import {PrimaryButton} from "../button/PrimaryButton";
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
import {ConfirmPasswordTextfield} from "./auth-textfields/ConfirmPasswordTextfield";

function Register() {
 const history = useHistory();

 const signedUp = useCallback(() => {
  history.push("/catalog");
 }, [history]);

 const performRegister = (values, {setSubmitting}) => {
  localStorage.setItem("Email", JSON.stringify(values.email));
  localStorage.setItem("Password", JSON.stringify(values.password));

  createUserWithEmailAndPassword(auth, values.email, values.password)
   .then((userCredential) => {
    // Signed in
    signedUp();
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
     <Form>
      <FormWrapper id="FormWrapper">
       <FormDialog id="FormDialog">
        <FormHeader id="FormHeader">
         <FormLogo id="FormLogo" onClick={() => history.push("/")}>
          <img src={logo} alt="dropship" />
         </FormLogo>
         <FormTitle id="FormTitle">Sign Up</FormTitle>
        </FormHeader>
        <EmailTextfield {...formik} />
        <PasswordTextfield {...formik} />
        <ConfirmPasswordTextfield {...formik} />
        <AuthButtonContainer id="AuthButtonContainer">
         <PrimaryButton type="submit" disabled={!formik.isValid}>
          Sign Up
         </PrimaryButton>
        </AuthButtonContainer>
        <LoginInfo id="LoginInfo">
         Already have an account?{" "}
         <BackToSignup href="/login">Log in</BackToSignup>
        </LoginInfo>
       </FormDialog>
      </FormWrapper>
     </Form>
    );
   }}
  </Formik>
 );
}

export default Register;
