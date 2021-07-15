import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className='searchPage-info'>
               <p>62 stays · 26 august to 30 august · 2 guest</p>
               <h1>Stays nearby</h1> 
               <Button variant='outlined'>
                cancellation Flexibility
               </Button>
               <Button variant='outlined'>
                Type of place
               </Button>
               <Button variant='outlined'>
                price
               </Button>
               <Button variant='outlined'>
                Rooms and beds
               </Button>
               <Button variant='outlined'>
                More filter
               </Button>
            </div>
            <SearchResult
                img="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                location="Indore,Madhya Prdesh"
                title="Stay at this spacious Edwardian House"
                desc="This is the best place to live ,you will get best of the best room."
                star="4.8"
                price="2000₹/night"
                total="2200₹ total"
            />
             <SearchResult
                img="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                location="Indore,Madhya Prdesh"
                title="Stay at this spacious Edwardian House"
                desc="This is the best place to live ,you will get best of the best room."
                star="4.8"
                price="2000₹/night"
                total="2200₹ total"
            />
             <SearchResult
                img="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                location="Indore,Madhya Prdesh"
                title="Stay at this spacious Edwardian House"
                desc="This is the best place to live ,you will get best of the best room."
                star="4.8"
                price="2000₹/night"
                total="2200₹ total"
            />
        </div>
    )
}

export default SearchPage
