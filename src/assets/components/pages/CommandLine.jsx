import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';
import { Image } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';

function CommandLine(){
    const [open, setOpen] = useState(false);

    useEffect(() => {
        
        const timer = setTimeout(() => {
          setOpen(true);
        }, 300);
     
        return () => clearTimeout(timer);
      }, []); 

    const navigate = useNavigate();

    const navigateOnClick = () =>{
      navigate("/intro");
    }
    return(
        <Container fluid>
        <Row>
          <Col md={4}>
         
            <div className="title text-light">
            <Fade in={open} style={{ transitionDuration: '3s', transitionTimingFunction: 'ease-in-out'}}>
                <div className="animation-fade-text">
                <h1>React JS</h1>
                <p>React JS: Master the fundamentals of React JS</p>
                </div>
          
              </Fade>
              <Button variant="dark" style={{ width: '18rem',height: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                ENROLL THIS COURSE FOR
                <div className="badge bg-success rounded-pill text-center" style={{ color: 'white', fontSize: '13px', height: 'auto', width: '3.4rem'}}>
                    FREE
                </div>
                </Button>

                <div className="teacher">
                    <div className="imag">

                  
                <Image className="fern" src="https://avatars.githubusercontent.com/u/109398894?v=4" roundedCircle />  </div>
                   <div className="sensei">
                   <p> <b>Instructor: YuriKun11</b> </p>
                    </div> 
                    </div>
            </div>
            
            
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Card className="text-light border border-dark" style={{ width: '100%', height: 'auto', backgroundColor: '#121516' }}>
               
                <Card.Body>   
                    <h4>Course Overview</h4>
                    <p>Zero to Beginner</p>
                    <p>4 Lessons</p>
                    <p>Hands-on Experience</p>
                    <p>Lifetime Access</p>
                    <p>Learn at your own pace</p> 
                    </Card.Body>
            </Card>

            
          </Col>
         
        </Row>


        <div className="lesson-title">
        <h1 className="text-light">Lessons</h1>
        </div>
     
        <div className="lesson-contents">       

        <Row>
        <Col xs={12} lg={3}>
            <Card onClick={navigateOnClick} className="text-light border border-dark glow-on-hover" style={{ width: '100%', height: '13rem', backgroundColor: '#121516' }}>
                <Card.Body>   
                <div className="effect">
                    <h4>1</h4><br /><br />
                    <h4>INTRODUCTION</h4>
                    <p>Why you should learn React</p>
                    </div>
                    </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={3}>
        <Card  onClick={navigateOnClick} className="text-light border border-dark glow-on-hover" style={{ width: '100%', height: '13rem', backgroundColor: '#121516' }}>
                <Card.Body>   
                    <h4>2</h4><br /><br />
                    <h4>VARIABLES</h4>
                    <p>Learn variables</p>
                     
                    </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={3}>
        <Card  onClick={navigateOnClick} className="text-light border border-dark glow-on-hover" style={{ width: '100%', height: '13rem', backgroundColor: '#121516' }}>
                <Card.Body>   
                    <h4>3</h4><br /><br />
                    <h4>DATA TYPES</h4>
                    <p>Learn different data types</p>
                     
                    </Card.Body>
            </Card>
        </Col>
        <Col xs={12} lg={3}>
        <Card  onClick={navigateOnClick} className="text-light border border-dark glow-on-hover" style={{ width: '100%', height: '13rem', backgroundColor: '#121516' }}>
                <Card.Body>   
                    <h4>4</h4><br /><br />
                    <h4>LOOPS</h4>
                    <p>Learn Loops</p>
                     
                    </Card.Body>
            </Card>
        </Col>
      </Row>

        </div>
      </Container>
    );
}

export default CommandLine