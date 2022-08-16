import LandingBackground from "../assets/landing-background.jpeg";
import {LandingImageContainer} from "./landingPage.styled";
import {LandingHeader} from "./LandingHeader";
import {LandingBanner} from "./LandingBanner";

const LandingPage = () => {
 return (
  <>
   <LandingHeader />
   <LandingImageContainer id="LandingImageContainer">
    <img src={LandingBackground} alt="landing-background" />
   </LandingImageContainer>
   <LandingBanner />
  </>
 );
};

export default LandingPage;
