import React, { useEffect } from 'react'
//import axios from 'axios'
import cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../../redux/actions/productAction'
import Navbar from '../../components/navbar/navbar.component'
import Card from '../../components/card/card.component'
import Spinner from '../../components/spinner/spinner.component'

function Home() {
    const dispatch = useDispatch()
    // const [token, setToken] = useState('')
    const productList = useSelector(state => state.productsList)
    const { loading, error, products } = productList
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    useEffect(() => {
        const cookie = cookies.get('ut')
        if (cookie)
            console.log(cookie);
        dispatch(listProducts())
        userInfo ? console.log(userInfo.user) : console.log("not logged in");;
    }, [dispatch, userInfo])
    return (
        <>
            <Navbar />
            <div className="main">
                {
                    loading ? <Spinner />
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
        </>
    )
}

export default Home

