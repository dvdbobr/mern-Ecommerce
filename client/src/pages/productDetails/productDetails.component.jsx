import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/navbar.component'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../../redux/actions/productAction'
import Card from '../../components/card/card.component'
function ProductDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const selectedItem = useSelector(state => state.productsList.selectedItem)
    const productList = useSelector(state => state.productsList)
    const { loading, error, products } = productList
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
                    {
                        loading ? <h2>loading...</h2>
                            : error ? <h2>{error}</h2> :
                                <>
                                    <h1 className="relatedTitle">Related items</h1>
                                    <div className="cardContainer">
                                        {
                                            products.filter(p => {
                                                return p.productID !== selectedItem.id
                                            }).map(product => {
                                                return product.category === selectedItem.category ? <Card
                                                    id={product.productID}
                                                    img={product.url}
                                                    title={product.title}
                                                    category={product.category}
                                                    description={product.description}
                                                    price={product.price}
                                                /> : null
                                            })
                                        }
                                    </div>
                                </>
                    }
                </div>
            }
            <div className="relatedProducts">

            </div>
        </>
    )
}

export default ProductDetails
