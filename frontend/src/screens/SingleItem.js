import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import { adjustQty,addToCart } from '../redux/Shopping/shopping-actions'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Proiect from "../components/homeComponents/Project"


const SingleItem = ({currentItem,cart,adjustQty,addToCart}) => {
    let it = cart.find((prod)=> prod.id ===currentItem.id)
    console.log(cart)
    
    const [input, setInput] = useState(1);
    const [quantity, setQuantity] = useState(1)
    useEffect(()=> setQuantity(document.querySelector('.singleItemInput').value),[input])
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const add1 = () =>{
        if(!it){
            addToCart(currentItem.id)
        }
        
    } 

    console.log(quantity)

    const add = () =>{adjustQty(currentItem.id, quantity)}
    
    return (
        <div>
            <Nav/>
        <main className='singleItemMain'>
        <section className="firstSectionProdus">
            <img src={currentItem.img} alt=""/>
        </section>
        <section className="secondSectionProdus">
            <h1>{currentItem.desc}</h1>
            
                <ul>
                    <li>
                        <div className="leftProduct">
                            <span>Greutate:</span>
                        </div>
                        <div className="rightProduct">
                            <span className="greutate">{currentItem.greutate}kg</span>
                        </div>
                    </li>
                    <li>
                        <div className="leftProduct">
                            <span>Suport:</span>
                        </div>
                        <div className="rightProduct support">
                            <button>DA</button>
                            <button>NU</button>
                        </div>
                    </li>
                    <li id="custom-select">
                        <div className="leftProduct">
                            <span>Gravura:</span>
                        </div>
                        <div className="rightProduct">
                            <div className="support">
                                <button>Fara</button>
                                <button>Suport</button>
                                <button>Copac</button>
                            </div>
                        </div>
                    </li>
                    <li className="lastInput">
                        <div className="leftProduct">
                            <span>Cantitate:</span>
                        </div>
                        <div className="rightProduct quantityButtons"> 
                            <label htmlFor="qty"></label>
                            <input className="singleItemInput" 
                                min="1"
                                type="number"
                                id="qty1"
                                name="qty"
                                value={input}
                                onChange = {handleChange}
                            />
                        </div>
                    </li>
                </ul>
                <section className="lastSectionProdus">
                    <div>
                        <h3>15lei</h3>
                        <span className="lastSpan">(TVA inclus)</span>
                    </div>
                    <button onClick={()=>{add();add1()}} className="cartAdd">Adauga in cos</button>
                </section>
        </section>
    </main>
    <Proiect />
    <Footer />
    </div>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
        cart:state.shop.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id,value)),
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)
