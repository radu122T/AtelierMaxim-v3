import React, { useEffect,useState } from "react"
import CartItemForCart from "../components/cartComponents/CartItemForCart"
import Footer from "./../components/Footer"
import { connect } from "react-redux"
import Nav from "../components/Nav"
import { Link } from "react-router-dom"

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
                <Link to="/">
                    <div className="backCart"><i className="fa-solid fa-arrow-left"></i> Inapoi</div>
                </Link>
                <header className="headerCart">
                    {totalItems === 0 && <h2 className="emptyCart">Cosul este gol</h2>}
                    {totalItems != 0 && <h2 className="cartTitle">Cosul dumneavoastra</h2>}
                </header>
                <div className="cartWithoutHeader">
                    <div className="cartWithoutHeaderAndPayment">
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
                    </div>
                    {cart.length>0 && 
                    <div className="totalAndButtonCart">  
                        <div className="totalCart">
                        <h3>Rezumat comanda</h3>
                        <ul>{cart.map((x)=>{ return <li key={x.key}>{x.desc} <span>x {x.qty}</span></li>})} </ul>
                        <span>Pret transport: 20 lei</span>
                        <span>Pret total: {totalPrice+20} lei</span>
                    </div>
                    <div className="paymentButton">
                        <button className="checkout">Plata cu cardul</button>
                    </div>
                    </div>}
                </div>
            <Footer />
        </div>
    )}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cart)