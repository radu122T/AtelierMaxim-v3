import React, {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import LogoImg from "../../public/images/logoAlb.svg"
const Nav = ({ cart }) => {

	const [cartCount, setCartCount]= useState(0)
	
	useEffect(()=> {
		let count =0
		cart.forEach(item => {
			count += item.qty
		})
		setCartCount(count)
	},[cart, cartCount])

    return (
        <nav>
			<div className="container">
				<ul>
					<li className="back"><i className="fa-solid fa-arrow-left-long"></i> Back</li>
					<li className="menu">
						<a href=""><i className="fa-solid fa-bars"></i></a>
					</li>
					
					<li className="leftSide">
						<a href="mailto:comenzi@atelierulmaxim.ro"> comenzi@atelierulmaxim.ro</a>
					</li>

					<li className="contLogo">
						<Link to="/"> 
						<div className="logo"><img src={LogoImg} alt=""/></div>
						</Link>
					</li>

					<li className="rightSide">
						<Link to="/cart">
						<div className="cart">
							<i className="fa-solid fa-cart-shopping"></i>
							<div id="cartAmount" className="cartAmount">{cartCount}</div>
						</div>
						</Link>
					</li>
				</ul> 
			</div>
		</nav>
    )
}

const mapStateToProps = state => {
	return {
		cart:state.shop.cart
	}
}

export default connect(mapStateToProps)(Nav)



