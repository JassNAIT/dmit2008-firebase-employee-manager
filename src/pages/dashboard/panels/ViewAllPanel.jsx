import React, {useEffect, useState}  from "react";
import styled from "styled-components";
import firebaseApp from 'firebase/firebaseConfig';

import AddEmployeeWidget from "./widgets/AddEmployeeWidget";
import EmployeeDisplayWidget from "./widgets/EmployeeDisplayWidget";

const ViewAllPanelStyles = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  aside {
    width: 480px;
  }
`;

const ViewAllPanel = (props) => {
  const[employees,setEmployees] = useState('')
  useEffect(()=>{
    fetchEmployees()
  }, [])

  function fetchEmployees(){
    let docStore;
    const userId = firebaseApp.auth().currentUser.uid;
    const employeesRef = firebaseApp.firestore().collection(userId).doc('hr').collection('employees')
   // employeesRef.get()
    employeesRef.onSnapshot(snapshot=>{
      docStore = snapshot.docs.map(doc=> doc.data())
      setEmployees(docStore)
    })
  }
  return (
    <section>
      <ViewAllPanelStyles>
        <AddEmployeeWidget />
        <EmployeeDisplayWidget employees={employees}/>
      </ViewAllPanelStyles>
    </section>
  );
};

export default ViewAllPanel;

//let taxrate = 0.05;
//let newthing = newTax(taxRate, 0.2)

/*function newTax(rate,val){

} */