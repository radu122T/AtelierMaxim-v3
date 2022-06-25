import React, {useState} from "react"
import {connect} from 'react-redux'
import {removeFromCart, adjustQty} from '../../redux/Shopping/shopping-actions'
const CartItem = ({item, removeFromCart, adjustQty}) => {
    const [input, setInput] = useState(item.qty)
    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQty(item.id, e.target.value)
    }
    return (
        <div className="cart-item">
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
                <div className="minus">
                    <i className="fa-solid fa-minus"></i>
                </div>
                
                <div className="quantityCartDrawer">
                <label htmlFor="qty"></label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="plus">
                <i  className="fa-solid fa-plus"></i>
                </div>
            </div>

            <i onClick= {() =>removeFromCart(item.id)} className="xInDrawer fa-solid fa-xmark"></i>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)) ,
        adjustQty: (id, value) => dispatch(adjustQty(id,value)) 
    }
}

export default connect(null, mapDispatchToProps)(CartItem)