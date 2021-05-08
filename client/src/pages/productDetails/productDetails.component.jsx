import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/navbar.component'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts, productDetails } from '../../redux/actions/productAction'
import Card from '../../components/card/card.component'
import Spinner from '../../components/spinner/spinner.component'
function ProductDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const productID = params.id
    const selectedItem = useSelector(state => state.productsList.selectedItem)
    const productInfo = useSelector(state => state.productDetails)
    const productList = useSelector(state => state.productsList)
    const { loading, error, products } = productList
    const { loadingSelected, errorSelected, selectedProduct } = productInfo
    useEffect(() => {
        console.log(params.id);
        dispatch(listProducts())
        dispatch(productDetails(productID))
        // console.log(products[prod])
    }, [dispatch, productID])
    return (
        <>
            <Navbar />
            {
                <div className="detailsContainer">
                    {
                        loadingSelected ? <Spinner /> : errorSelected ? <h2>{errorSelected}</h2> :
                            selectedProduct ?
                                <div className="productDetailContainer">
                                    <div className="productDetailInnerContainer">

                                        <img src={selectedProduct.url} alt="" />
                                        <div className="productDetails">
                                            <h2>{selectedProduct.title}</h2>
                                            <p>{selectedProduct.description}</p>
                                            <span>${selectedProduct.price}</span>
                                            <button className="buyBtn">Buy</button>
                                        </div>

                                    </div>
                                </div>

                                : <h1>no item was chosen</h1>
                    }
                    {
                        loading ? <Spinner />
                            : error ? <h2>{error}</h2> :
                                <>
                                    <h1 className="relatedTitle">Related items</h1>
                                    <div className="cardContainer">
                                        {
                                            products.filter(p => {
                                                return p.productID !== selectedProduct.productID
                                            }).map(product => {
                                                return product.category === selectedProduct.category ? <Card
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
