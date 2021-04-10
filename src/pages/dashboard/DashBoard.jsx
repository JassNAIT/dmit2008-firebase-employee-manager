
import React, {useContext} from 'react';
import styled from 'styled-components'
import { Redirect } from 'react-router';
import AuthContext from './../../auth/AuthContext';

const DashBoardStyles = styled.section `
display:flex;
`

const SideBar =  styled.aside`
width:256px;
box-shadow:0 0 5px 1px grey inset;
height: calc(100vh - 64px);
position :relative;
z-index:1;
`
const Panels= styled.section`
width:calc(100% - 256px);
height: calc(100vh - 64px);
background-color:#f4f4f4;
`

const DashBoard = (props) =>{
    // access the authContext
    const auth = useContext(AuthContext)
    console.log('Dashboard Render')
    console.log(auth)
    if(auth.isUser){
        return (
            <DashBoardStyles>
             <SideBar>
                 <header>
                     <h1>
                         Firebase WhatsApp
                     </h1>
                     <p>Firebase who new</p>
                 </header>
                 <ul>
                     <li>View All</li>
                     <li>Add</li>
                     <li>Remove</li>
                     <li>Edit</li>
                 </ul>
             </SideBar>
             <Panels></Panels>
            </DashBoardStyles>
        );
    }else{
        return <Redirect to ="/login"/>

    }

}

export default DashBoard;