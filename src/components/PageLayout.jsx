import { Outlet,useLocation } from "react-router"
import { useEffect } from "react";
import { Header } from "./Header"
import { Footer } from "./Footer"

export const PageLayout=()=>{
    const {pathname}=useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
    return (<>
    <Header/>
    <Outlet/>
    <Footer/>

    </>)
}


