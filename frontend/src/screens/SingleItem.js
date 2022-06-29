import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {addToCart,addDimension,addSuport } from '../redux/Shopping/shopping-actions'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Proiect from "../components/homeComponents/Project"
import { ADD_SUPPORT } from '../redux/Shopping/shopping-types'


const SingleItem = ({currentItem,addDimension,addToCart,addSuport}) => {
    

    const [switchGravuraCopac,setSwitchGravuraCopac] = useState(false)
    const [switchGravuraSupport,setSwitchGravuraSupport] = useState(false)
    const [switchFaraGravura,setSwitchFaraGravura] = useState(true)
    const [gravuraSuportInput,setGravuraSuportInput] = useState("")
    const [gravuraCopacInput,setGravuraCopacInput] = useState("")
    const [dimension, setDimension] = useState("16x16")
    const [supportButton,setSupportButton] = useState("NU")

    const supportGravura = () => {
        setSwitchGravuraSupport(prev=>!prev)
    }

    const fara = () => {
        setSwitchFaraGravura(prev=>!prev)
        setSwitchGravuraSupport(false)
        setSwitchGravuraCopac(false)
    }
    const faraBack= () => {
        setSwitchFaraGravura(prev=>!prev)
    }

    const both = () => {
        fara()
        faraBack()
    }
    const copac = () => {
        setSwitchGravuraCopac(prev=>!prev)
    }
    const onChangeHandlerCopac = (event) => {
        setGravuraCopacInput(event.target.value)
    } 
    const onChangeHandlerSupport = (event) => {
        setGravuraSuportInput(event.target.value)
    }
    
    const supportDA = () => {
        setSupportButton("DA")
    }
    const supportNU = () => {
        setSupportButton("NU")
    }
    const options = [
        {
            key:"1",
            label: "16x16",
            value: "16x16",
        },
        {
            key:"2",
            label: "32x32",
            value: "32x32",
        },
        ];

    const handleChangeDimension = (event) => {
        setDimension(event.target.value)
    }

    const add = () => {
        addToCart(currentItem.id)
        addDimension(currentItem.id,dimension)
        addSuport(currentItem.id,supportButton)
    }

    return (
        <div className="singleItemContainer">
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
                                <span>Dimensiuni:</span>
                            </div>
                            <div className="rightProduct">
                            <select value={dimension} onChange={handleChangeDimension}>
                                {options.map((option) => (
                                    <option key={option.key} value={option.value}>{option.label}</option>
                                    ))}
                            </select>
                            </div>
                        </li>
                        <li>
                            <div className="leftProduct">
                                <span>Suport:</span>
                            </div>
                            <div className="rightProduct support">
                                <button onClick={supportDA}>DA</button>
                                <button onClick={supportNU}>NU</button>
                            </div>
                        </li>
                        <li id="custom-select">
                            <div className="leftProduct">
                                <span>Gravura:</span>
                            </div>
                            <div className="rightProduct">
                                <div className="support">
                                    <button onClick={both}>Fara</button>
                                    <button onClick={supportGravura}>Suport</button>
                                    <button onClick={copac}>Copac</button>
                                </div>
                            </div>
                        </li>
                    {switchFaraGravura && switchGravuraCopac && <div>
                        <label>Gravura pe Copac</label>
                        <input className="copacInput"
                            type="text"
                            value={gravuraCopacInput}
                            onChange={onChangeHandlerCopac}
                        />
                    </div>}
                    {switchFaraGravura && switchGravuraSupport && <div>
                        <label>Gravura pe suport</label>
                        <input className="supportInput"
                            type="text"
                            value={gravuraSuportInput}
                            onChange={onChangeHandlerSupport}
                        />
                    </div>}

                    </ul>
                    <section className="lastSectionProdus">
                        <div>
                            <h3>{currentItem.price} lei</h3>
                            <span className="lastSpan">(TVA inclus)</span>
                        </div>
                        <button onClick={()=>{add()}} className="cartAdd">Adauga in cos</button>
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
        addToCart: (id) => dispatch(addToCart(id)),
        addDimension: (id,value) => dispatch(addDimension(id,value)),
        addSuport:(id,value)=>dispatch(addSuport(id,value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)
