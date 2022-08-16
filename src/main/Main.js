import Header from "../header/Header";
import Menu from "../menu/Menu";
import Catalog from "../catalog/Catalog";
import {MainContainer} from "./main.styled";

const Main = () => {
 return (
  <>
   <Menu />
   <MainContainer>
    <Header />
    <Catalog />
   </MainContainer>
  </>
 );
};

export default Main;
