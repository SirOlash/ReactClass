import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sideBar/SideBar";
import Style from "./Layout.module.css";


const Layout = () => {
  return (
    <div className={Style.layOutWrapper}>
        <Header  />
        <div className={Style.mainContent}> 
            <SideBar className={Style.sideBar}/>
            <div className={Style.productContent}> 
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Layout;