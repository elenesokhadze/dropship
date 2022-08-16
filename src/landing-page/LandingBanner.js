import {Link} from "react-router-dom";
import {PrimaryButton} from "../button/PrimaryButton";
import {
 LandingSignupContainer,
 LandingContentTitle,
 LandingContentContainer,
 LandingBannerContainer,
 LandingBannerLogo,
} from "./landingPage.styled";
import LogoWhiteBlue from "../assets/logo-white-blue.svg";

export const LandingBanner = () => {
 return (
  <LandingBannerContainer id="LandingBannerContainer">
   <LandingContentContainer id="LandingContentContainer">
    <LandingBannerLogo src={LogoWhiteBlue} alt="dropship"></LandingBannerLogo>
    <LandingContentTitle id="LandingContentTitle">
     we got your supply chain covered
    </LandingContentTitle>
    <LandingContentTitle id="LandingContentTitle">
     365 days a year!
    </LandingContentTitle>
   </LandingContentContainer>
   <Link to="/register" style={{textDecoration: "none"}}>
    <LandingSignupContainer id="LandingSignupContainer">
     <PrimaryButton>sign up now</PrimaryButton>
    </LandingSignupContainer>
   </Link>
  </LandingBannerContainer>
 );
};
