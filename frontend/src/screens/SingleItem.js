import React from 'react'
import {connect} from 'react-redux'
import { addToCart } from '../redux/Shopping/shopping-actions'

const SingleItem = ({currentItem}) => {
    return (
        <div>
            <img src={currentItem.img} alt='' />
            <div>
            <p>{currentItem.desc}</p>
            <p>{currentItem.price}</p>
            </div>
            <button onClick={()=> addToCart(currentItem.id)}>Add to Cart</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTocart: (id) => dispatch(addToCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)