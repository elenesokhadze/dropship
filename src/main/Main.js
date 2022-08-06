import Header from "../header/Header";
import "./main.css";
import Aside from "../aside/Aside";
import Menu from "../menu/Menu";
import Catalog from "../catalog/Catalog";

const Main = () => {
 return (
  <div className="container">
   <Menu />
   <Aside />
   <main className="main">
    <div className="main__container">
     <Header />
     <Catalog />
    </div>
   </main>
  </div>
 );
};

export default Main;
