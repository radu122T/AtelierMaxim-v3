import React, {useState,useEffect} from "react"
import {connect} from 'react-redux'
import {removeFromCart, adjustQty} from '../../redux/Shopping/shopping-actions'


const CartItem = ({item, removeFromCart, adjustQty ,cart}) => {

    let it = cart.find((prod)=> prod.id ===item.id)
    const [input, setInput] = useState(item.qty)
    
    const onChangeHandler = (e) => {
        setInput(it.qty)
        adjustQty(item.id, e.target.value)}
    
    useEffect(()=>setInput(it.qty),[it.qty])

    return (
        <div className="cart-item" id = {item.id}>
            <div className="cartProduct">
                <div className="cartProductImg">
                    <img src={item.img} alt="" />
                </div>
                <div className="cartProductDescCant">
                    <p>{item.desc}</p>
                    <div className="buttons">
                <div className="quantityCartDrawer">
                
                    <input className="drawerInput quantity"
                        min="1"
                        max="100"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>

            </div>
                </div>
                
            </div>
            {(item.gravura1 || item.gravura2) && <div className="cartInputs">
                {item.gravura1 && <div className="cartInput1">
                    <p>Gravura copac: {item.gravura1}</p>
                </div>}
                {item.gravura2 && <div className="cartInput2">
                    <p>Gravura suport: {item.gravura2}</p>
                </div>}
            </div>}
            {(item.dimension || item.support) && <div className="cartSuportDimensiuni">
                {item.dimension && <div className="cartDimensiune">
                    <p>Dimensiune: {item.dimension}</p>
                </div>}
                {item.support && <div className="cartSupport">
                    <p>Suport: {item.support}</p>
                </div>}
            </div>}
            
            <div className="details">
                <div className="cartDrawerPrice">
                    <p><span className="cartDrawerPriceSpan">{input} x</span>{item.price} lei</p>
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
