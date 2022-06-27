import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addToCart, loadCurrentItem } from "../../redux/Shopping/shopping-actions"


const Product = ({productData ,addToCart, loadCurrentItem})=> {
    
    const drawer = ()=> {addToCart(productData.id)
        cartDrawer.style.display="flex"
        }
    return (
        <div className={`item ${productData.display} ${productData.tip}`}>
            <div>
                <Link to={`/product/${productData.id}`}>
                    <img onClick={()=> loadCurrentItem(productData)} src={productData.img} alt="produs"/>
                </Link>
                <div className="details">
                    <p>{productData.desc}</p>
                    <div className="priceQuantity">
                        <div className="buttons">
                        <span>Cantitate:</span>
                        </div>
                    </div>
                    <h2> {productData.price} Lei</h2>
                </div>
                <div className="productButtons">
                    <button onClick={()=>drawer()} className='addToCart' id='addToCart'>Adauga in cos</button>
                    <Link to={`/product/${productData.id}`}>
                        <button onClick={()=> loadCurrentItem(productData)}><>Personalizeaza</></button>
                    </Link>
                </div>
            </div>
        </div>  
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)