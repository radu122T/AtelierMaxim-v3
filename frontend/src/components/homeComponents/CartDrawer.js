import React, { useEffect,useState } from "react"
import CartItem from "../cartComponents/CartItem"
import { connect } from "react-redux"
import closeDrawer from "../CloseDrawer"
import { Link } from "react-router-dom"
const CartDrawer = ({cart}) => {
	useEffect(()=>{
        if (cart.length>0)
		{closeDrawer()}})
	const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

	useEffect(()=> {
        let items= 0
        let price = 0

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })

        setTotalPrice(price)
        setTotalItems(items)
    }, [cart,totalPrice, totalItems, setTotalPrice, setTotalItems])
    

    return (
		<div className="cartDrawer" id="cartDrawer">
            <div className="closeDrawerSection">
                <button id ="closeDrawer" className="closeDrawer"><i className="fa-solid fa-x"></i></button>
            </div>
            
            <section className="titleCartDrawer">
                <h2>Cosul dumneavoastra</h2>
            </section>

            <section className="toperDrawer">
                    <span>Produs</span>
                    <span>Pret</span>
                    <span className="qtyTitle">Cantitate</span>
			</section>
            <main>
                <div className="shopping-cart" id="shopping-cart">
                {cart.map((item) => (
                    <CartItem key={item.key}  item={item} />
                ))}
                </div>
            </main>
            <section className="totalDrawer">
                <span>Pret transport: 20 lei</span>
                <span>Pret total: {totalPrice+20} lei</span>
            </section>
            <div className="buttonDrawerContainer">
                <Link to="/cart">
                    <button className="buttonCartDrawer">Vezi cosul</button>
                </Link>
            </div>
		</div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(CartDrawer)