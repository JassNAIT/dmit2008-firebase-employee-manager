import React from 'react'; 
import styled from 'styled-components';
import Logo from './../components/icons/Logo';
import {Link} from 'react-router-dom';
const HomePageStyles = styled.header`
text-align: center;
margin:6rem auto 0;
svg{
    width:80px;
}
h1{
    font-size:2.25rem;
    font-weight:bold;
    margin-bottom: 1rem;
}
p{
    color:#767484;
    margin-bottom: 2rem;
}
.add-login-links{
   background-color:#f15b29;
   padding:1rem 2rem 1rem 2rem;
   text-decoration:none;
   margin-right: 1rem;
   color: white;
   border-radius: 4px;
}
.add-signup-links{
    background-color: #03a9f4;
    padding: 1rem 2rem 1rem 2rem;
    text-decoration: none;
    color: white;
    border-radius: 4px;
}
`
const HomePage = (props)=>{
    return (
        <HomePageStyles>
            <Logo/>
            <h1>Employee Manager</h1>
            <p>Focus on people and we'll focus on the paperwork</p>
            <Link to="/login" className="add-login-links">Login</Link>
            <Link to="/register"className="add-signup-links">Register</Link>
        </HomePageStyles>
    );
}

export default HomePage;