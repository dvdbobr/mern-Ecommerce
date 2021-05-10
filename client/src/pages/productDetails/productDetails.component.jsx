import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar.component'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts, productDetails } from '../../redux/actions/productAction'
import Card from '../../components/card/card.component'
import Spinner from '../../components/spinner/spinner.component'
import axios from 'axios'
function ProductDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory();
    const productID = params.id
    const [qty, setQty] = useState(1)
    //const selectedItem = useSelector(state => state.productsList.selectedItem)
    const productInfo = useSelector(state => state.productDetails)
    const productList = useSelector(state => state.productsList)
    const { loading, error, products } = productList
    const { loadingSelected, errorSelected, selectedProduct } = productInfo
    const [allproducts, setAllProducts] = useState([])
    const addToCartHandler = () => {
        history.push(`/cart/${productID}?qty=${qty}`)
    }

    useEffect(() => {
        const getAllProducts = async () => {
            const result = await axios.get('/api/products')
            setAllProducts(result.data);
        }
        getAllProducts()
        dispatch(listProducts())
        dispatch(productDetails(productID))
    }, [dispatch, productID])
    return (
        <>
            <Navbar />
            {
                <div className="detailsContainer">
                    {
                        loadingSelected ? <Spinner /> : errorSelected ? <h1 className="selectedError">{errorSelected}</h1> :
                            <div className="productDetailContainer">
                                <div className="productDetailInnerContainer">

                                    <img src={selectedProduct.url} alt="" />
                                    <div className="productDetails">
                                        <h2>{selectedProduct.title}</h2>
                                        <p>{selectedProduct.description}</p>
                                        <span>Price: ${selectedProduct.price}</span>
                                        {/* <button className="buyBtn">Buy</button> */}
                                    </div>
                                    <div className="productDetailsCart">
                                        <table>
                                            <tr>
                                                <td>Price:</td>
                                                <td>${selectedProduct.price}</td>

                                            </tr>
                                            <tr>
                                                <td>Status:</td>
                                                <td>{
                                                    selectedProduct.countInStock > 0 ?
                                                        <span className="success">In Stock</span> :
                                                        <span className="danger">Unavailable</span>
                                                }
                                                </td>
                                            </tr>
                                            {selectedProduct.countInStock > 0 &&
                                                <tr>
                                                    <td>Qty:</td>
                                                    <td>
                                                        <select value={qty} onChange={e => setQty(e.target.value)} id="">
                                                            {[...Array(selectedProduct.countInStock).keys()].map(x => (
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                </tr>
                                            }
                                        </table>

                                        <button className="addToCartBtn" onClick={addToCartHandler}>Add To Cart</button>
                                        {/* <div className="productDetailsCartRow">Price: <span>{selectedProduct.price}</span></div> */}
                                        {/* {
                                            selectedProduct.countInStock > 0 ? (
                                                <>
                                                    <div className="productDetailsCartRow">
                                                        Status: <span className="success">
                                                            In Stock
                                                        </span>
                                                    </div>

                                                </>
                                            ) :
                                                <span className="danger">Out Of Stock</span>
                                        } */}
                                    </div>

                                </div>
                            </div>
                    }
                    {
                        !errorSelected ? loading ? <Spinner />
                            : error ? <h2>{error}</h2> : allproducts &&
                                <>
                                    <h1 className="relatedTitle">Related items</h1>
                                    <div className="cardContainer">
                                        {
                                            allproducts.filter(p => {
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
                                </> : null
                    }
                </div>
            }
        </>
    )
}

export default ProductDetails
