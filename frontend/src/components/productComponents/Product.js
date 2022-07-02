import React, {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addToCart, loadCurrentItem,addDimension,addSuport } from "../../redux/Shopping/shopping-actions"


const Product = ({cart,productData ,addToCart, loadCurrentItem,addDimension,addSuport})=> {
    const [dimension, setDimension] = useState("16x16cm")
    // const [supportButton,setSupportButton] = useState("Da")
    // const [highlight1, setHighlight1] = useState(false)
    // const [highlight2, setHighlight2] = useState(false)
    // const supportDA = () => {
    //     setSupportButton("Da")
    //     setHighlight1(prev=>!prev)
    // }
    // const supportNU = () => {
    //     setSupportButton("Nu")
    //     setHighlight2(prev=>!prev)
    // }
    const options = [

        {
            key:"1",
            label: "16x16cm",
            value: "16x16cm",
        },
        {
            key:"2",
            label: "32x32cm",
            value: "32x32cm",
        },
        ];

    const drawer = ()=> {addToCart(productData.id)
        addDimension(productData.id,dimension)
        // addSuport(productData.id,supportButton)
        const containerDrawer = document.querySelector(".drawerContainer")
        cartDrawer.style.display="flex"
        if (cartDrawer.style.display="flex")
            containerDrawer.style.display="flex"
        }
        const handleChangeDimension = (event) => {
            setDimension(event.target.value)
        }
        
    return (
        <div className={`item ${productData.display} ${productData.tip}`}>
            <div>
                <Link to={`/product/${productData.id}`}>
                    <img onClick={()=> loadCurrentItem(productData)} src={productData.img} alt="produs"/>
                </Link>
                <div className="details">
                    <p>{productData.desc}</p>
                    
                    <div className="productDetailsDimensionContainer">
                        <div className="productDetailsDimension">
                            
                            <select value={dimension} onChange={handleChangeDimension}>
                                {options.map((option) => (
                                    <option key={option.key} value={option.value}>{option.label}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    {/* <div className="detailsProductSupport">
                            <button style={ highlight1 ^ !highlight2 ? { background:"#c1c1c1"} : {background:"white"}} onClick={supportDA}>Da</button>
                            <button style={ highlight2 ^ highlight1 ?  { background:"#c1c1c1"} : {background:"white"}} onClick={supportNU}>Nu</button>
                    </div> */}
                <h2> {productData.price} Lei</h2>
                </div>
                
                <div className="productButtons">
                    <button onClick={()=>drawer()} className='addToCart' id='addToCart'>Adauga in cos</button>
        
                        <button onClick={()=> loadCurrentItem(productData)}><Link to={`/product/${productData.id}`}><span>Personalizeaza</span></Link></button>
                    
                </div>
            </div>
        </div>  
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
        addDimension: (id,value) => dispatch(addDimension(id,value)),
        addSuport:(id,value)=>dispatch(addSuport(id,value)),
    }
}
const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
        cart:state.shop.cart
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)