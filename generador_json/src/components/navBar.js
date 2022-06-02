import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/1/1e/Logo_de_Gentera.svg'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}