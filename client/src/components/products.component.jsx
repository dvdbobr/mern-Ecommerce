import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productAction'
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
            {
                // products ? products.map(product => {
                //     return <div>{product.title}</div>
                // }) : ''
                loading ? <h2>loading...</h2>
                    : products ? products.map(product => {
                        return <h2>{product.title}</h2>
                    }) : ''
            }
        </div>
    )
}

export default Products

