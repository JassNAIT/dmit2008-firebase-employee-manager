import React, {useContext} from 'react';
import styled from 'styled-components'
import { Redirect, useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import AuthContext from './../../auth/AuthContext';

import ViewAllPanel from './panels/ViewAllPanel';
import EditPanel from './panels/EditPanel';
import DeletePanel from './panels/DeletePanel';
import AddPanel from './panels/AddPanel';

const DashBoardStyles = styled.section ` 
      display:flex;
`

const SideBar = styled.aside `
position:relative;
z-index:1;  
width: 256px;
box-shadow: 0 0 5px 0 grey;
height: calc(100vh - 64px);
padding: 2rem;
header{
    margin-bottom:1rem;
    font-size: 13px;
}
h1{
    font-size: 1rem;
    font-weight:bold;

}
p{
    margin-bottom:1rem;
    color:grey;
}
a{
    text-decoration:none;
    font-size:14px;
}
li{
    opacity:0.7;
    font-size: 12px;
    margin-bottom: 0.35rem;
}
`

const Panels = styled.section `  
background-color: #f4f4f4;
height: calc(100vh - 64px);
width: calc(100% - 256px);
`
const DashBoard = (props) => {
      // access the authContext
      const auth = useContext(AuthContext)
      console.log('Dashboard Render')
      console.log(auth)
      const {path, url} = useRouteMatch()
      //const temp 
      if(auth.isUser){
  
     return (
            <DashBoardStyles>              
                 <SideBar>
                <header>
                    <h1>Firebase</h1>
                    <p>whats all the fuss about</p>
                </header>
                <ul>
                     <li><Link to={`${url}`} >View All</Link></li>
                     <li><Link to={`${url}/add`}>Add Content</Link></li>
                     <li><Link to={`${url}/edit`}>Remove Content</Link></li>
                     <li><Link to={`${url}/delete`}>Edit Content</Link></li>
                 </ul>
            </SideBar>
            <Panels>
                <Switch>
                   <Route exact path={path}><ViewAllPanel/></Route>
                   <Route path={`${path}/edit`}><EditPanel/></Route>
                   <Route path={`${path}/delete`}><DeletePanel/></Route>
                   <Route path={`${path}/add`}><AddPanel/></Route>
                </Switch>
            </Panels>   
    
        </DashBoardStyles>
     )     
    }else{
        return <Redirect to ="/login"/>

    }
    
        
}
 
export default DashBoard;