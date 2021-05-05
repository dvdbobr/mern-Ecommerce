import React, { useEffect } from 'react'
//import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productAction'
import Navbar from './navbar.component'
import Card from './card.component'
function Products() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productsList)
    const { loading, error, products } = productList
    useEffect(() => {
        // const getProducts =async() =>{
        //     const data = await axios.get('/api/products')
        //     console.log(data);
        // }
        // getProducts()
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
            <Navbar />
            <div className="main">
                {
                    loading ? <h2>loading...</h2>
                        : error ? <h2>{error}</h2> :
                            <div className="cardContainer">
                                {
                                    products ? products.map(product => {
                                        return <Card
                                            id={product.productID}
                                            img={product.url}
                                            title={product.title}
                                            category={product.category}
                                            description={product.description}
                                            price={product.price}
                                        />
                                    }) : ''
                                }
                            </div>
                }
            </div>
        </div>
    )
}

export default Products

