
import React from 'react';   /*7.2K (gzipped: 2.9K)*/
import styled from 'styled-components';

import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';


const LoginPageStyles = styled.header`
max-width:380px;
margin:6rem auto 0;

h1{
    font-size:2.25rem;
    margin-bottom:2rem;
    font-weight: 700;
    text-align: center;
}
`
const LoginPage = (props)=>{
    return (
        <LoginPageStyles>
        <header><h1>Login Page</h1></header>
        <FormInput label="Email" type="text"/>
        <FormInput label="Password" type="password"/>
        <Button label="Login" uiStyle="login"/>
        </LoginPageStyles>
    );
}


export default LoginPage;