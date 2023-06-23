import React from 'react';
// import NavBar  from '../navbar'
import { Envelope } from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { SocialIcon } from 'react-social-icons';
import { Cart3 } from 'react-bootstrap-icons';

// Resposnive imports bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../../Styles/navbar.css"
// import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
      <>
      {/* <NavBar/> */}
      <Row className='row'>
      <Container className='maildiv1 col'>
      <Envelope />{" "}
      <span className='sm-fs-1'>info@telenet.com</span>
      {" |"}{" "}
      <Phone/>{" "}
      <span>+91-9786575916</span>
      <button className='carticon'><Cart3 /></button>
      <div className='SocialIcons'>
      <SocialIcon url="https://twitter.com/Google" target='blank_' style={{ height: 30,width:30 }} />{" "}
      <SocialIcon url="https://www.instagram.com/actorvijay/" target='blank_' style={{ height: 30,width:30 }} />{" "}
      <SocialIcon url="https://in.pinterest.com/" target='blank_' style={{ height: 30,width:30}} />
      </div>
      </Container>
      </Row>
      </>
    );
  }

export default Home;
  