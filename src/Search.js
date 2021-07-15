import React, { useState } from 'react'
import './Search.css'
import {DateRangePicker} from 'react-date-range';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { IoIosPeople } from 'react-icons/io';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

function Search() {
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const history=useHistory();
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:'selection'

    };
    function handleSelect(ranges){
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }
    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]}
            onChange={handleSelect}/>
            <h2>Number of Guests <IoIosPeople/></h2>
            <input type="number" placeholder='Type the number of guest' min={0} defaultValue={2}/>
            <Button onClick={()=>history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search
