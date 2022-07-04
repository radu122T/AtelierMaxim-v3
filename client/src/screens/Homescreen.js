import React, { useEffect, useState } from "react"
import Nav from "./../components/Nav"
import Footer from "./../components/Footer"
import Header from "./../components/homeComponents/Header"
import Proiect from "./../components/homeComponents/Project"
import Inter from "./../components/homeComponents/Inter"
import Main from "./../components/homeComponents/Main"
import CartDrawer from "./../components/homeComponents/CartDrawer"


const HomeScreen = () => {
   
    return (
        <div className="container-root">
            <Nav />
            <Header />
            <Inter />
            <Main />
            <Proiect />
            <CartDrawer />
            <Footer />
        </div>
    )
}


export default HomeScreen