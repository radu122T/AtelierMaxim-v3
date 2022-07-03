import React, { useEffect,useState } from "react"
import CartItemForCart from "../components/cartComponents/CartItemForCart"
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
        <div className="cartContainer">
            <Nav/>
                <header className="headerCart">
                    {totalItems === 0 && <h2 className="emptyCart">Cosul este gol</h2>}
                    {totalItems != 0 && <h2 className="cartTitle">Cosul dumneavoastra</h2>}
                </header>
                <main className="mainCart">
		        	<div className="shopping-cart" id="shopping-cart">
                        {cart.map((item) => (
                            <CartItemForCart key={item.id} item={item} />
                        ))}
                    </div>
                        
                    <div className="totalCart">
                    {cart.length>0 && <span>Total: {totalItems} produse</span>}
                    {cart.length>0 && <span>Pret: {totalPrice} lei</span>}
                    </div>
                        
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