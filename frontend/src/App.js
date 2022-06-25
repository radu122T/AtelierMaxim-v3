import { BrowserRouter as Router,
    Route,
    Routes,
    Navigate} from 'react-router-dom'
import React from "react"
import "./reset.css"
import "./App.css"
import HomeScreen from "./screens/HomeScreen"
import Cart from "./screens/Cart"
import SingleItem from './screens/SingleItem'
import { connect } from 'react-redux'


const App = ({currentItem}) => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/product/:id" element={!currentItem ? <Navigate to="/" replace/> : <SingleItem/>} />
                <Route path="*" element={<HomeScreen/>} />
                
            </Routes>
        </Router>
    )
    }

    const mapStateToProps = state => {
        return {
            currentItem: state.shop.currentItem
        }
    }
export default connect(mapStateToProps)(App);
