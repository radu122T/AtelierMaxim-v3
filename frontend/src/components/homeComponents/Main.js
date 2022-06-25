import React from 'react'
import shopItemsData from "../../data/dataProduct"
import Product from "../productComponents/Product"
import { connect } from 'react-redux'

const Main = ({products})=> {
    return (
        <main>
            <section className="shop" id="shop">
                {products.map((prod)=> (
                    <Product key={prod.key} productData={prod} />
                ))}
            </section>
        </main>
    
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }

}


export default connect(mapStateToProps)(Main)


