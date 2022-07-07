import React, { useEffect,useState, useRef } from "react"
import CartItemForCart from "../components/cartComponents/CartItemForCart"
import Footer from "./../components/Footer"
import { connect } from "react-redux"
import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import PaymentForm from "../components/cartComponents/PaymentForm"
import ShippingForm from "../components/cartComponents/ShippingForm"



const Cart = ({ cart }) => {
    useEffect(()=>{window.scrollTo(0, 0)},[]);
    const [error, setError] = useState(false);
    const [skipCount, setSkipCount] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        shipping: { values: null, validated: false },
        payment: { values: null, validated: false },
    });
    const [clicked,setClicked] = useState(false)

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
        setIsChecked(!isChecked)
    }
    
    const shippingref = useRef()
    const paymentref = useRef()
    useEffect(() => {
        if (skipCount) setSkipCount(false);
        if(!skipCount){
            if (!formData.shipping.validated) {setError(true)}
            if (formData.shipping.validated && !isChecked) {
                {if(formData.payment.validated)
                    {setError(false)
                        console.log({formData})}
                else{
                    setError(true)
                }
            }}
            else if (formData.shipping.validated && isChecked) {
                setError(false)
                console.log({formData})
            }
        
            setClicked(false)
        }

    }, [clicked]);
    
    async function handleSubmit() {
        
        await shippingref.current.Submit();
        if (paymentref.current) {await paymentref.current.Submit();}
        
        setClicked(true)
        
    }
    
    function handleChangeshipping(data) {
        setFormData({ ...formData, shipping: data });
    }
    
    function handleChangepayment(data) {
        setFormData({ ...formData, payment: data });
    }


    return (
        
            <div className="cartContainer">
        
            <Nav/>
                <div className="backCart">
                    <Link to="/">
                        <div className="backCart"><i className="fa-solid fa-arrow-left"></i> Inapoi</div>
                    </Link>
                </div>
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
                    <div className="shippingForms">
                        {cart.length>0 && <ShippingForm onChange={handleChangeshipping} refId={shippingref} />}
                        {cart.length>0 && <h2 className="facturare"><input id="fac" type="checkbox" value="Facturare" checked={isChecked} onChange={handleOnChange}/>Facturare cu aceleasi date </h2>}
                        {cart.length>0 && !isChecked && <PaymentForm onChange={handleChangepayment} refId={paymentref} />}
                    </div>
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
                    <button onClick={handleSubmit} className="checkout">Plata cu cardul</button>
                </div>
                {error && <div id="error">*Campurile pentru livrare nu sunt completate.</div>}
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