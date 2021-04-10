
import React, {useState, useContext} from 'react';   /*7.2K (gzipped: 2.9K)*/
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';
//import firebaseApp from './../firebase/firebaseConfig';
import firebaseApp from './../firebase/firebaseConfig';
import AuthContext from './../auth/AuthContext';
import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';



const LoginPageStyles = styled.aside`
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
    const auth = useContext(AuthContext)
    const [email,setEmail] = useState('jkaur79@nait.ca')
    const [password, setPassword] = useState('123456')
    console.log(email)
    console.log(password)
    const [isValid,setIsValid] = useState(false)
        console.log('render');
        console.log(auth);

    const handleClick =(e)=>{
        console.log(e);
        //test our auth
        console.log(firebaseApp)
        //firebaseApp.firestore()
        //firebaseApp.storage()
        //firebaseApp.auth().signInWithEmailAndPassword('jkaur79@nait.ca','12345')
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .then(userCredential=>{
            console.log(userCredential.user.email)
            console.log(userCredential.user.uid)
            console.log(userCredential.user.displayName)
            console.log(userCredential.user.emailVerified)
            auth.isUser = true;
            setIsValid(true)
        })
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }
    const handleChange =(e)=>{
          console.log(e.target.value)
    }
  
    if(isValid){
        return <Redirect to="/dashboard"/>
    }else{
        return (
            <LoginPageStyles>
            <header><h1>Login Page</h1></header>
            <FormInput label="Email" type="text" onChange={(e)=>setEmail(e.target.value.trim())}/>
            <FormInput label="Password" type="password" onChange = {(e)=> setPassword(e.target.value.trim())}/>
            <Button label="Login" uiStyle="login" onClick={handleClick}/>
            </LoginPageStyles>
        );
    }
}



export default LoginPage;

/*fn{{onChange:handleChange}}{

}*/