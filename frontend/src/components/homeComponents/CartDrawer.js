import React, { useEffect,useState } from "react"
import CartItemForDrawer from "../cartComponents/CartItemForDrawer"
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
        <div className="drawerContainer">
		    <div className="cartDrawer" id="cartDrawer">
                <div className="closeDrawerSection">
                    <button id ="closeDrawer" className="closeDrawer"><i className="fa-solid fa-x"></i></button>
                </div>

                <section className="titleCartDrawer">
                    <h2>{cart.length>0 ? "Cosul dumneavoastra" : "Cosul dumneavoastra este gol"}</h2>
                </section>


                {cart.length>0 && <main>
                    <div className="shopping-cart" id="shopping-cart">
                    {cart.map((item) => (
                        <CartItemForDrawer key={item.key}  item={item} />
                    ))}
                    </div>
                </main>}
                <section className="totalDrawer">
                    {cart.length>0 && <span>Pret transport: 20 lei</span>}
                    {cart.length>0 && <span>Pret total: {totalPrice+20} lei</span>}
                </section>
                 {cart.length>0 && <div className="buttonDrawerContainer">
                    <Link to="/cart">
                        <button className="buttonCartDrawer">Vezi cosul</button>
                    </Link>
                </div>}
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