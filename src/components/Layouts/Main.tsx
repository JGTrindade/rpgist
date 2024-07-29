import {Outlet} from "react-router-dom";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";

export default function Main() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}
