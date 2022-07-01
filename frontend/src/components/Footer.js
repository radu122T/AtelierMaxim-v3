import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="titleFooter">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} >
                        <h4>AtelierulMaxim.ro</h4>
                    </Link>
                </div>
                <section className="footerOne">
                    <Link to="/cart">Cos</Link>
                </section>
                <section className="footerTwo">
                
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/AtelierulMaxim"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="mailto:comenzi@atelierulmaxim.ro"><i className="fa-solid fa-envelope"></i></a>
                </section>
                <section className="footerThree">
                    <span className="copyright" >Copyright <i className="fa-solid fa-copyright"></i>2022 All rights reserved | Made by: <a href="https://radu122t.github.io/MySite/">www.radu122t.io</a></span>
                </section>
            </div>
        </footer>
    )
}

export default Footer
