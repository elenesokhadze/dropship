import {Link} from "react-router-dom";
import {PrimaryButton} from "../button/PrimaryButton";
import {
 LandingLogoContainer,
 LandingHeaderContainer,
 LandingHeaderNav,
 LandingImageContainer,
 LandingSignupContainer,
 LandingContentTitle,
 LandingContentContainer,
 LandingBannerContainer,
 LandingPageNavItem,
 LandingPageNavItemSignup,
} from "./landingPage.styled";

const LandingPage = () => {
 return (
  <div>
   <LandingHeaderContainer>
    <LandingLogoContainer>
     <img
      src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png"
      alt="headerlogo"
     />
    </LandingLogoContainer>
    <LandingHeaderNav>
     <Link to="/catalog" style={{textDecoration: "none"}}>
      <LandingPageNavItem>catalog</LandingPageNavItem>
     </Link>
     <Link to="/register" style={{textDecoration: "none"}}>
      <LandingPageNavItemSignup>sign up</LandingPageNavItemSignup>
     </Link>
     <Link to="/login" style={{textDecoration: "none"}}>
      <LandingPageNavItem isLogin>login</LandingPageNavItem>
     </Link>
    </LandingHeaderNav>
   </LandingHeaderContainer>
   <LandingImageContainer>
    <img
     width="100%"
     src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/hero-1.jpg"
     alt="landing-background"
    />
   </LandingImageContainer>
   <LandingBannerContainer>
    <LandingContentContainer>
     <img
      src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/356Logo.svg"
      alt="dropship"
     />
     <LandingContentTitle>WE GOT YOUR SUPPLY CHAIN COVERED</LandingContentTitle>
     <LandingContentTitle>365 DAYS A YEAR!</LandingContentTitle>
    </LandingContentContainer>
    <Link to="/register" style={{textDecoration: "none"}}>
     <LandingSignupContainer>
      <PrimaryButton>sign up now</PrimaryButton>
     </LandingSignupContainer>
    </Link>
   </LandingBannerContainer>
  </div>
 );
};

export default LandingPage;
