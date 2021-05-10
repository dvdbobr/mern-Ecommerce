import React from 'react'
import { useHistory } from "react-router-dom";
// import { itemDetails } from '../../redux/actions/productAction'
// import { Link } from 'react-router-dom'
// import {  useDispatch } from 'react-redux'
function Card(props) {
    const history = useHistory();
    // const dispatch = useDispatch()
    const onViewClick = () => {
        // dispatch(itemDetails(props))
        history.push(`/details/${props.id}`)
    }
    const shortenDescription = (description) => {
        return description.slice(0, 25) + "..."
    }
    return (
        <div className="card">
            <img className="cardImg" src={props.img} alt="" />
            <h2>{props.title.split(' ').length > 3 ? props.title.split(' ').slice(0, 3).join(' ') : props.title}</h2>
            <span>Category: {props.category}</span>
            <p>
                {
                    props.description.length <= 35 ? props.description : <>
                        {shortenDescription(props.description)}
                        <br />
                        <span className="readMore" onClick={onViewClick}>Read More</span>
                    </>
                }

            </p>
            <span>Price: ${props.price}</span>
            <div className="cardFunctions">
                {/* <button className="buyBtn">Buy</button> */}
                <button className="viewBtn" onClick={onViewClick}>View</button>
                {/* <Link to={`/details/${props.id}`} onClick={ }>View</Link> */}
            </div>
        </div>
    )
}

export default Card
