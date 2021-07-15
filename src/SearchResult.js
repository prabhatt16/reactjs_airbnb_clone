import React from 'react'
import { BsHeart, BsStarFill } from 'react-icons/bs';
import './SearchResult.css'


function SearchResult({
    img,
    location,
    title,
    desc,
    star,
    price,
    total,}) {
    return (
        <div className="searchResult">
           <img src={img} alt=""/>
            <BsHeart className="search-heart"/>
            <div className="searchResult-info">
                <div  className="info-top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{desc}</p>
                </div>
                <div  className="info-bottom">
                    <div className="search-stars">
                        <BsStarFill className="search-star "/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="search-price">
                        <h3>{price}</h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
