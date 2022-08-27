import { ExpandMore, Search, Language } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (

    <div className='header'>

        <Link to='/'>
          <img 
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
              alt="Airbnb logo" 
              className="header__icon" 
            />
        </Link>



        <div className="header__center">
            <input type="text" />
            <Search />
        </div>

        <div className="header__right">
           <p> Become a host </p>
           <Language/>
           <ExpandMore/>
           <Avatar className='header__avatar'/>
        </div>



    </div>

  )

};

export default Header;