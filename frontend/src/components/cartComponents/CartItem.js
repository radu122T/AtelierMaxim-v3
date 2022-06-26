import React, {useState,useEffect} from "react"
import {connect} from 'react-redux'
import {removeFromCart, adjustQty} from '../../redux/Shopping/shopping-actions'
const CartItem = ({item, removeFromCart, adjustQty,cart}) => {
    let it = cart.find((prod)=> prod.id ===item.id)
    const [input, setInput] = useState(item.qty)
    useEffect(()=>setInput(it.qty),[it.qty])
    const onChangeHandler = (e) => {
        setInput(it.qty)
        adjustQty(item.id, e.target.value)}
    
    return (
        <div className="cart-item" id = {item.id}>
            <div className="cartProduct">
                <div className="cartProductImg">
                    <img src={item.img} alt="" />
                </div>
                <p>{item.desc}</p>
            </div>

            <div className="details">
                <div className="cartDrawerPrice">
                    <p>{item.price} lei</p>
                </div>
            </div>

            <div className="buttons">
                <div className="quantityCartDrawer">
                <label htmlFor="qty"></label>
                    <input className="drawerInput"
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>

            <i onClick= {() => removeFromCart(item.id)} className="xInDrawer fa-solid fa-xmark"></i>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)) ,
        adjustQty: (id, value) => dispatch(adjustQty(id,value)),
        addToCart: (id) => dispatch(addToCart(id)),
    }
}
const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
