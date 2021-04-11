import React, {useState} from 'react'; 
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from './../firebase/firebaseConfig';
//import AuthContext from './../auth/AuthContext';
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button';

const RegisterPageStyles = styled.aside`
    width: 480px;
    margin: 6rem auto 0;
    header{
        text-align: center;
        margin-bottom: 3rem;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .create-account{
        margin-top: 2rem;
    }
`

const RegisterPage = (props)=>{
   // const auth = useContext(AuthContext)
    const [email,setEmail] = useState(null)
    const [password, setPassword] = useState(null)

        const [currentUser, setCurrentUser] = useState(null);    
        const handleSubmit = (e) => {
          e.preventDefault();    
          try {
            firebaseApp.auth().createUserWithEmailAndPassword(email, password);      
            setCurrentUser(true);
          } catch (error) {
            alert(error);
          }
        };


    if(currentUser){  
        return <Redirect to="/login"/>
    }else{
        return (
            <RegisterPageStyles>
            <header>
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>No Credit Card Required</p>
            </header>       
            <FormInput label="Name" type="text"/>
            <FormInput label="Email Address" type="email" onChange={(e)=>setEmail(e.target.value.trim())}/>
            <FormInput label="Password (min 6 characters)" type="password" onChange = {(e)=> setPassword(e.target.value.trim())}/>
            <Button className="create-account" uiStyle="login" onClick={handleSubmit} label="Create a free account"/>
            </RegisterPageStyles>
        );
    }
}

export default RegisterPage