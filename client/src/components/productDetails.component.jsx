import React, { useEffect } from 'react'
import Navbar from './navbar.component'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../redux/actions/productAction'
function ProductDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const selectedItem = useSelector(state => state.productsList.selectedItem)

    useEffect(() => {
        dispatch(listProducts())
        // console.log(products[prod])
    }, [dispatch])
    return (
        <>
            <Navbar />
            {
                <div className="detailsContainer">
                    {
                        selectedItem ?
                            <div className="productDetailContainer">
                                <div className="productDetailInnerContainer">

                                    <img src={selectedItem.img} alt="" />
                                    <div className="productDetails">
                                        <h2>{selectedItem.title}</h2>
                                        <p>{selectedItem.description}</p>
                                        <span>${selectedItem.price}</span>
                                        <button className="buyBtn">Buy</button>
                                    </div>

                                </div>
                            </div>

                            : <h1>no item was chosen</h1>
                    }
                </div>
            }
        </>
    )
}

export default ProductDetails
