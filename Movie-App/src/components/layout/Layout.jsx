import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sideBar/SideBar";
import Style from "./Layout.module.css";


const Layout =() => {
  return (
    <div className={Style.layOutWrapper}>
        <Header className ={Style.sideBarOutlet}></Header>
        <div>
            <SideBar></SideBar>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
export default Layout;