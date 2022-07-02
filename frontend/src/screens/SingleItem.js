import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {addToCart,addDimension,addSuport,addGravura1,addGravura2 } from '../redux/Shopping/shopping-actions'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Proiect from "../components/homeComponents/Project"
import {ToastContainer, toast, Zoom, Bounce,Flip} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const SingleItem = ({currentItem,addDimension,addToCart,addSuport,addGravura1,addGravura2}) => {
    

    const [switchGravuraCopac,setSwitchGravuraCopac] = useState(false)
    const [switchGravuraSupport,setSwitchGravuraSupport] = useState(false)
    const [switchFaraGravura,setSwitchFaraGravura] = useState(true)
    const [gravuraSuportInput,setGravuraSuportInput] = useState("")
    const [gravuraCopacInput,setGravuraCopacInput] = useState("")
    const [dimension, setDimension] = useState("16x16cm")
    const [supportButton,setSupportButton] = useState("Da")
    const [highlight1, setHighlight1] = useState(false)
    const [highlight2, setHighlight2] = useState(false)
    const supportGravura = () => {
        setSwitchGravuraSupport(prev=>!prev)
    }

    const fara = () => {
        setSwitchFaraGravura(prev=>!prev)
        setSwitchGravuraSupport(false)
        setSwitchGravuraCopac(false)
        setGravuraSuportInput("")
        setGravuraCopacInput("")
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
        setSupportButton("Da")
        setHighlight1(prev=>!prev)
    }
    const supportNU = () => {
        setSupportButton("Nu")
        setHighlight2(prev=>!prev)
    }
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

    const handleChangeDimension = (event) => {
        setDimension(event.target.value)
    }

    const add = () => {
        addToCart(currentItem.id)
        addDimension(currentItem.id,dimension)
        addSuport(currentItem.id,supportButton)
        addGravura1(currentItem.id,gravuraCopacInput)
        addGravura2(currentItem.id,gravuraSuportInput)
        toast.success("Produs adaugat in cos!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                            <div className="singleItemDimensionContainer rightProduct">
                                <div className="singleItemDimension">
                                    <select value={dimension} onChange={handleChangeDimension}>
                                        {options.map((option) => (
                                            <option key={option.key} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="leftProduct">
                                <span>Suport:</span>
                            </div>
                            <div className="rightProduct support suport">
                                <button style={ highlight1 ^ !highlight2? { background:"#c1c1c1"} : {background:"#E6E6E6"}} onClick={supportDA}>Da</button>
                                <button style={ highlight2 ^ highlight1 ?  { background:"#c1c1c1"} : {background:"#E6E6E6"}} onClick={supportNU}>Nu</button>
                            </div>
                        </li>
                        <li id="custom-select">
                            <div className="leftProduct">
                                <span>Gravura:</span>
                            </div>
                            <div className="rightProduct">
                                <div className="support gravuraChoice">
                                    <button onClick={both}>Fara</button>
                                    <button onClick={supportGravura}>Suport</button>
                                    <button onClick={copac}>Copac</button>
                                </div>
                            </div>
                        </li>
                        {switchFaraGravura && switchGravuraCopac && <li id='gravura1' className='gravuraInputs'>
                        <div className='leftProduct'>
                            <label >Gravura pe copac:</label>
                        </div>
                        <div className='rightProduct'>
                            <input className="copacInput"
                                type="text"
                                value={gravuraCopacInput}
                                onChange={onChangeHandlerCopac}
                            />
                        </div>
                    </li>}
                    {switchFaraGravura && switchGravuraSupport && <li id='gravura2' className='gravuraInputs'>
                        <div className='leftProduct'>
                            <label >Gravura pe suport:</label>
                        </div>
                        <div className='rightProduct'>
                            <input className="supportInput"
                                type="text"
                                value={gravuraSuportInput}
                                onChange={onChangeHandlerSupport}
                            />
                        </div>
                        
                    </li>}

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
            
            <ToastContainer
                toastStyle={{ backgroundColor: "white",color: "black" }}
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Flip}
                limit={2}
            />
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
        addGravura1:(id,value)=>dispatch(addGravura1(id,value)),
        addGravura2:(id,value)=>dispatch(addGravura2(id,value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)
