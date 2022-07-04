import React, { useEffect,useState } from "react"
import CartItemForCart from "../components/cartComponents/CartItemForCart"
import Footer from "./../components/Footer"
import { connect } from "react-redux"
import Nav from "../components/Nav"

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [isChecked, setIsChecked] = useState(true);

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
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      }
    return (
        <div className="cartContainer">
            <Nav/>
                <div className="back"><i class="fa-solid fa-arrow-left"></i>Inapoi</div>
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
		        </main>
                {cart.length>0 && 
                <section className="shipping">
			        <h2>Livrare</h2>
			        <div className="personalInfo">
				        <span>email</span>
				        <input type="text"/>
				        <span>telefon</span>
				        <input type="text"/>
				        <span>nume de familie</span>
				        <input type="text"/>
				        <span>prenume</span>
				        <input type="text"/>
				        <span>adresa</span>
				        <input type="text"/>
				        <div className="onTheSameRow">
				    	    <span className="city">oras</span>
				    	    <input type="text" className="input1"/>
				    	    <span className="state">judet</span>
				    	    <input type="text" className="input2"/>
				    	    <span className="cod">cod postal</span>
				    	    <input type="text" className="input3"/>
				        </div>
			        </div>
			        <h2 className="facturare"><input id="fac" type="checkbox" value="Facturare" checked={isChecked} onChange={handleOnChange}/>Facturare cu aceleasi date </h2>
		        </section>}
		
		        {cart.length>0 && !isChecked && 
                <section className="payment">
		    	    <h2>Facturare</h2>
		    	    <div className="personalInfo">
		    	    	<span>nume de familie</span>
		    	    	<input type="text"/>
		    	    	<span>prenume</span>
		    	    	<input type="text"/>
		    	    	<span>adresa</span>
		    	    	<input type="text"/>
		    	    	<div className="onTheSameRow">
		    	    		<span className="city">oras</span>
		    	    		<input type="text" className="input1"/>
		    	    		<span className="state">judet</span>
		    	    		<input type="text" className="input2"/>
		    	    		<span className="cod">cod postal</span>
		    	    		<input type="text" className="input3"/>
		    	    	</div>
		    	    </div>
		        </section>}   
            <div className="totalCart">
                    {cart.length>0 && <span>Pret transport: 20 lei</span>}
                    {cart.length>0 && <span>Pret total: {totalPrice+20} lei</span>}
            </div>
            {cart.length>0 && <div className="paymentButton">
                <button className="checkout">Plata cu cardul</button>
            </div>}
            <Footer />
        </div>
    )}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cart)