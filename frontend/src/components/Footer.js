import React from "react"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h4><a href="">AtelierulMaxim.ro</a></h4>
                <section className="footerOne">
                    <a href="#">Cos</a>
                </section>
                <section className="footerTwo">
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-facebook-square"></i></a>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                </section>
                <section className="footerThree">
                    <span className="copyright" >Copyright <i className="fa-solid fa-copyright"></i>2022 All rights reserved | Made by: <a href="https://radu122t.github.io/MySite/">www.radu122t.io</a></span>
                </section>
            </div>
        </footer>
    )
}

export default Footer
