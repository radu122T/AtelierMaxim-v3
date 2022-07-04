import React, {useState,useEffect} from "react"
import {connect} from 'react-redux'
import {adjustQty, removeFromCart} from '../../redux/Shopping/shopping-actions'


const CartItemForCart = ({item, adjustQty, removeFromCart ,cart}) => {

    let it = cart.find((prod)=> prod.id ===item.id)
    const [input, setInput] = useState(item.qty)
    
    const onChangeHandler = (e) => {
        setInput(it.qty)
        adjustQty(item.id, e.target.value)}
    
    useEffect(()=>setInput(it.qty),[it.qty])

    return (
        <div className="cartItemCartPage" id = {item.id}>
            
            <div className="cartImg">
                <img src={item.img} alt="" />
            </div>
            <div className="cartDesc">
                <p className="descP">{item.desc}</p>
                <div className="quantityCartPage">
                    <label>Cantitate: </label>
                    <input className="drawerInputCartPage quantityCartPage"
                        min="1"
                        max="100"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                {(item.gravura1 || item.gravura2) && <div className="cartInputsCartPage">
                {item.gravura1 && <div className="cartInput1CartPage">
                    <p>Gravura copac: {item.gravura1}</p>
                </div>}
                {item.gravura2 && <div className="cartInput2CartPage">
                    <p>Gravura suport: {item.gravura2}</p>
                </div>}
            </div>}
            {(item.dimension || item.support) && <div className="cartSuportDimensiuniCartPage">
                {item.dimension && <div className="cartDimensiuneCartPage">
                    <p>Dimensiune: {item.dimension}</p>
                </div>}
                {item.support && <div className="cartSupportCartPage">
                    <p>Suport: {item.support}</p>
                </div>}
            </div>}
            
            </div>

            <div className="detailsCartPage">
                <div className="cartPagePrice">
                    <p><span className="cartPagePriceSpan">{input}x </span> <span className="priceCartPage">{item.price} lei</span></p>
                </div>
            </div>
            <i onClick= {() => removeFromCart(item.id)} className="xInCart fa-solid fa-xmark"></i>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)) ,
        adjustQty: (id, value) => dispatch(adjustQty(id,value)),
    }
}
const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItemForCart)
