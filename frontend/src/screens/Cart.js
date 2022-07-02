import React, { useEffect,useState } from "react"
import CartItem from "../components/cartComponents/CartItem"
import Footer from "./../components/Footer"
import { connect } from "react-redux"
import Nav from "../components/Nav"

const Cart = ({ cart }) => {
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
        <div>
            <Nav/>
            <main>
		    	<div className="shopping-cart" id="shopping-cart">
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <span>Total: ({totalItems} produse</span>
                <span>{totalPrice} lei</span>
		    </main>
            <Footer />
        </div>
    )}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cart)