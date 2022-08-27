import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css"; //theme css file
import { Button } from '@mui/material';
import {People} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';


//DATE PICKER COMPONENT
const Search = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const navigate = useNavigate();

  const selectionRange = {
    startDate: startDate ,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.seslection.endDate);
  }

  return (

    <div className='search'>

        <DateRangePicker 
          ranges={[selectionRange]} 
          onChange={handleSelect} 
        />
        
        <h2> Number of guests <People /> </h2>

        <input type="number" min={0} defaultValue={2} />

        <Button onClick={() => navigate('/search')}> Search Airbnb </Button>

    </div>
  )

};

export default Search;