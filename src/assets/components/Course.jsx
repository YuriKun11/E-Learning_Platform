import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';

function Course() {

  const [goToCommandPage, setGotoCommandPage] = React.useState(false);

  useEffect(() => {
    const cardBodies = document.querySelectorAll('.card-body');

    cardBodies.forEach(cardBody => {
      const cardTitle = cardBody.querySelector('.card-title');
      const cardText = cardBody.querySelector('.card-text');

      cardBody.addEventListener('mouseenter', function() {
        cardText.style.display = 'block';
        setTimeout(() => {
          cardText.style.opacity = '1';
          cardText.style.transform = 'translateY(-20px)';
          cardTitle.style.transform = 'translateY(-240%)';
        });
      });

      cardBody.addEventListener('mouseleave', function() {
        cardText.style.opacity = '0';
        cardText.style.transform = 'translateY(100%)';
        cardTitle.style.transform = 'translateY(0)';
        cardText.style.display = 'none';
      });
    });
  }, []); 

  const navigate = useNavigate();


  // if(goToCommandPage){
  //   return <Navigate to="/commands" />;
  // }

  // const handleClick = () =>{
  //   setGotoCommandPage(true)
  // }

  return (

    <Container fluid>
        
      <Row>
      <Col xs={12} lg={8}>
         
            <Card onClick={()=> navigate("/commands")} className="position-relative text-light border border-dark glow-hover" style={{ width: '100%', height: '16rem', backgroundColor: '#121516' }}>
              <Card.Body>
                <div className="tag" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h1></h1>
                  <div className="badge bg-success rounded-pill py-1 text-center d-flex align-items-center justify-content-center" style={{ width: '3.4rem', color: 'white', fontSize: '13px', height: '25px', textAlign: 'center' }}>
                    Free
                  </div>
                </div>
                <div className="card-title" style={{ position: 'absolute', bottom: '0', left: '1', width: '100%', display: 'block', padding: '7px', transition: 'transform 0.6s ease 0s' }}>
                  <h5 className="card-title">Learn React JS</h5>
                </div>
                <div className="card-text" style={{ transform: 'translateY(100%)', position: 'absolute', bottom: '0', left: '1', width: '100%', opacity: '0', display: 'none', padding: '7px', transition: 'opacity 0.2s ease 0s, transform 0.6s ease 0s' }}>
                  <p className="card-text" style={{ color: '#b2b8c5' }}>React js: Master the Fundamentals of React js</p>
                  <Button variant="dark" style={{ width: '8rem' }} onClick={()=> navigate("/commands")}>Enroll now</Button>
                </div>
              </Card.Body>
            </Card>
        
        </Col>

        
         {/* {showAnotherComponent && <NavigationBar />} */}
        
        {/* Repeat the same structure for other columns */}

        <div className="col-12 col-lg-4">
   
        <Card className="position-relative text-light border border-dark glow-hover" style={{ width: '100%', height: '16rem', backgroundColor: '#121516' }}>
          <Card.Body>
            <div className="tag" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="images/github.png" alt="" />
              <div className="badge bg-primary rounded-pill py-1 text-center d-flex align-items-center justify-content-center" style={{ width: '6.4rem', color: 'white', fontSize: '13px', height: '25px', textAlign: 'center' }}>
                Coming soon
              </div>
            </div>
            <div className="card-title" style={{ position: 'absolute', bottom: '0', left: '1', width: '100%', display: 'block', padding: '7px', transition: 'transform 0.6s ease 0s' }}>
              <h5 className="card-title">Learn Git & GitHub</h5>
            </div>
            <div className="card-text" style={{ transform: 'translateY(100%)', position: 'absolute', bottom: '0', left: '1', width: '100%', opacity: '0', display: 'none', padding: '7px', transition: 'opacity 0.2s ease 0s, transform 0.6s ease 0s' }}>
              <p className="card-text" style={{ color: '#b2b8c5' }}>Master version control with Git, Learn collaborative coding on Github.</p>
              <Button variant="dark" style={{ width: '8rem' }}>Enroll now</Button>
            </div>
          </Card.Body>
        </Card>
   
    </div>
   

    <div className="col-12 col-lg-4">
   
        <Card className="position-relative text-light border border-dark glow-hover" style={{ width: '100%', height: '16rem', backgroundColor: '#121516' }}>
          <Card.Body>
            <div className="tag" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="images/github.png" alt="" />
              <div className="badge bg-primary rounded-pill py-1 text-center d-flex align-items-center justify-content-center" style={{ width: '6.4rem', color: 'white', fontSize: '13px', height: '25px', textAlign: 'center' }}>
                Coming soon
              </div>
            </div>
            <div className="card-title" style={{ position: 'absolute', bottom: '0', left: '1', width: '100%', display: 'block', padding: '7px', transition: 'transform 0.6s ease 0s' }}>
              <h5 className="card-title">Learn Java</h5>
            </div>
            <div className="card-text" style={{ transform: 'translateY(100%)', position: 'absolute', bottom: '0', left: '1', width: '100%', opacity: '0', display: 'none', padding: '7px', transition: 'opacity 0.2s ease 0s, transform 0.6s ease 0s' }}>
              <p className="card-text" style={{ color: '#b2b8c5' }}>Master the fundamentals of Java.</p>
              <Button variant="dark" style={{ width: '8rem' }}>Enroll now</Button>
            </div>
          </Card.Body>
        </Card>
     
    </div>

    <div className="col-12 col-lg-4">
    
        <Card className="position-relative text-light border border-dark glow-hover" style={{ width: '100%', height: '16rem', backgroundColor: '#121516' }}>
          <Card.Body>
            <div className="tag" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="images/github.png" alt="" />
              <div className="badge bg-primary rounded-pill py-1 text-center d-flex align-items-center justify-content-center" style={{ width: '6.4rem', color: 'white', fontSize: '13px', height: '25px', textAlign: 'center' }}>
                Coming soon
              </div>
            </div>
            <div className="card-title" style={{ position: 'absolute', bottom: '0', left: '1', width: '100%', display: 'block', padding: '7px', transition: 'transform 0.6s ease 0s' }}>
              <h5 className="card-title">Javascript</h5>
            </div>
            <div className="card-text" style={{ transform: 'translateY(100%)', position: 'absolute', bottom: '0', left: '1', width: '100%', opacity: '0', display: 'none', padding: '7px', transition: 'opacity 0.2s ease 0s, transform 0.6s ease 0s' }}>
              <p className="card-text" style={{ color: '#b2b8c5' }}>Master the fundamentals of Javascript.</p>
              <Button variant="dark" style={{ width: '8rem' }}>Enroll now</Button>
            </div>
          </Card.Body>
        </Card>
    
    </div>

    <div className="col-12 col-lg-4">
     
        <Card className="position-relative text-light border border-dark glow-hover" style={{ width: '100%', height: '16rem', backgroundColor: '#121516' }}>
          <Card.Body>
            <div className="tag" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="images/github.png" alt="" />
              <div className="badge bg-primary rounded-pill py-1 text-center d-flex align-items-center justify-content-center" style={{ width: '6.4rem', color: 'white', fontSize: '13px', height: '25px', textAlign: 'center' }}>
                Coming soon
              </div>
            </div>
            <div className="card-title" style={{ position: 'absolute', bottom: '0', left: '1', width: '100%', display: 'block', padding: '7px', transition: 'transform 0.6s ease 0s' }}>
              <h5 className="card-title">Data Structures and Algorithm</h5>
            </div>
            <div className="card-text" style={{ transform: 'translateY(100%)', position: 'absolute', bottom: '0', left: '1', width: '100%', opacity: '0', display: 'none', padding: '7px', transition: 'opacity 0.2s ease 0s, transform 0.6s ease 0s' }}>
              <p className="card-text" style={{ color: '#b2b8c5' }}>Learn Algorithms</p>
              <Button variant="dark" style={{ width: '8rem' }}>Enroll now</Button>
            </div>
          </Card.Body>
        </Card>
      
    </div>

    <div className="col-12 col-lg-4">
       
          <Card className="position-relative text-light border border-dark glow-hover" style={{ width: '100%', height: '16rem', backgroundColor: '#121516' }}>
            <Card.Body>
              <div className="tag" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1></h1>
                <div className="badge bg-primary rounded-pill py-1 text-center d-flex align-items-center justify-content-center" style={{ width: '6.4rem', color: 'white', fontSize: '13px', height: '25px', textAlign: 'center' }}>
                  Coming soon
                </div>
              </div>
              <div className="card-title" style={{ position: 'absolute', bottom: '0', left: '1', width: '100%', display: 'block', padding: '7px', transition: 'transform 0.6s ease 0s' }}>
                <h5 className="card-title">React.js</h5>
              </div>
              <div className="card-text" style={{ transform: 'translateY(100%)', position: 'absolute', bottom: '0', left: '1', width: '100%', opacity: '0', display: 'none', padding: '7px', transition: 'opacity 0.2s ease 0s, transform 0.6s ease 0s' }}>
                <p className="card-text" style={{ color: '#b2b8c5' }}>Master the fundamentals of React js.</p>
                <Button variant="dark" style={{ width: '8rem' }}>Enroll now</Button>
              </div>
            </Card.Body>
          </Card>
      
      </div>

      {/* Empty divs for other columns */}
      <div className="col-12 col-md-4"></div>
      <div className="col-12 col-md-4"></div>
      <div className="col-12 col-md-4 text-light">
        <p className="end">Learn more</p>
      </div>
        {/* Add more columns as needed */}

      </Row>

      {/* Add footer */}
    
    </Container>
  
  );
}

export default Course;
