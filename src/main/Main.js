import Header from "../header/Header";
import Aside from "../aside/Aside";
import Menu from "../menu/Menu";
import Catalog from "../catalog/Catalog";
import {MainContainer} from "./main.styled";

const Main = () => {
 return (
  <>
   <Menu />
   <Aside />
   <MainContainer>
    <Header />
    <Catalog />
   </MainContainer>
  </>
 );
};

export default Main;
