import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const AppBarStyles = styled.nav`
  box-shadow:0 0 3px 1px grey;
  background-color:#ffffff;
  background:#f15b29;
  align-items:center;
  position:relative;
  z-index:4;

  ul{
      display:flex;
      justify-content:center;
      height:64px;
      padding:1.5rem;
  }
  li{
      margin:0 1rem;
  }
  a{
      text-decoration:none;
      color:white;
      font-weight:bold;
  }
`

const AppBar = () => {
    return (
          <AppBarStyles>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
          </AppBarStyles>
    );
}

export default AppBar;