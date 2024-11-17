import React, { useEffect, useState } from 'react';  
import './EdBg.css';  
import logo from '../my_imports/logo1.png';  
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/Navbar';  
import { Link } from 'react-router-dom';  
import Card from 'react-bootstrap/Card';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Carousel from 'react-bootstrap/Carousel';  
import ProgressBar from 'react-bootstrap/ProgressBar';  
import { motion } from 'framer-motion'; // Import framer-motion  

function EdBg() {  
  const [isVisible, setIsVisible] = useState(false);  
  const [progress1, setProgress1] = useState(0);  
  const [progress2, setProgress2] = useState(0);  

  useEffect(() => {  
    const timer = setTimeout(() => {  
      setIsVisible(true);  
      // Animate progress bars  
      setProgress1(85);  
      setProgress2(90);  
    }, 100); // Optional: delay before animation starts  
    return () => clearTimeout(timer);  
  }, []);  

  return (  
    <Container className={`padding fade-in ${isVisible ? 'visible' : ''}`}>  
      <Container className="bluebos" style={{ width: '100%', maxWidth: '1200px', height: 'auto' }}>  
        <Navbar expand="lg" style={{ backgroundColor: 'transparent', color: 'white' }} data-bs-theme="dark">  
          <Container>  
            <Navbar.Brand as={Link} to="/background">Background</Navbar.Brand>  
            <img src={logo} alt="Logo" className="logo" style={{ position: 'absolute', top: '15px', right: '20px', width: '30px', height: '30px'}}/>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
              <Nav className="me-auto">  
                <Nav.Link as={Link} to="/">My Profile</Nav.Link>   
                <Nav.Link as={Link} to="/home">About</Nav.Link>  
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>    
                <Nav.Link as={Link} to="/services">Services</Nav.Link>   
              </Nav>  
            </Navbar.Collapse>  
          </Container>  
        </Navbar>  

        <Row className='titlee'>  
          <p id='edbg'>Educational <span className='yell'>Background</span></p>  
        </Row>  

        {/* Education Section */}  
        <Row>  
          <Col md={6}>  
            <h4 className='ints'>Tertiary Education</h4>  
            <Card className="mb-3">  
              <Card.Body>  
                <Card.Title>Master of Science in Computer Science</Card.Title>  
                <Card.Text>  
                  University of Technology, 2018 - 2020<br />  
                  <strong>Achievements:</strong> Graduated with honors<br />  
                  <strong>Thesis:</strong> "Machine Learning Applications in Data Analysis"  
                </Card.Text>  
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress1}%` }} transition={{ duration: 2 }}> {/* Animate Width */}  
                  <ProgressBar now={progress1} label={`Overall Score: ${progress1}%`} />  
                </motion.div>  
              </Card.Body>  
            </Card>  
          </Col>  

          <Col md={6}>  
            <h4 className='ints'>Undergraduate Education</h4>  
            <Card className="mb-3">  
              <Card.Body>  
                <Card.Title>Bachelor of Science in Information Technology</Card.Title>  
                <Card.Text>  
                  University of Science, 2015 - 2018<br />  
                  <strong>Achievements:</strong> Dean's List, Programming Contest Winner  
                </Card.Text>  
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress2}%` }} transition={{ duration: 2 }}> {/* Animate Width */}  
                  <ProgressBar now={progress2} label={`Overall Score: ${progress2}%`} />  
                </motion.div>  
              </Card.Body>  
            </Card>  
          </Col>  
        </Row>  

        {/* Additional Education Section */}  
        <Row>  
          <Col>  
            <h4 className='ints'>Certifications</h4>  
            <Card className="mb-3">  
              <Card.Body>  
                <ul>  
                  <li>Certified Web Developer - 2021</li>  
                  <li>Data Science with Python - Coursera, 2020</li>  
                  <li>Project Management Professional (PMP) - 2022</li>  
                </ul>  
              </Card.Body>  
            </Card>  
          </Col>  
        </Row>  

        {/* Skills Section */}  
        <Row>  
          <Col>  
            <h4 className='ints'>Skills and Competencies</h4>  
            <Card className="mb-3">  
              <Card.Body>  
                <ul>  
                  <li>Programming Languages: Python, Java, JavaScript</li>  
                  <li>Web Technologies: HTML, CSS, React, Bootstrap</li>  
                  <li>Databases: MySQL, MongoDB</li>  
                  <li>Tools: Git, Docker, AWS</li>  
                </ul>  
              </Card.Body>  
            </Card>  
          </Col>  
        </Row>  
        
        <Carousel>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src='../my_imports/Beige Brown Classic Illustrated Professional Recognition Certificate (1).png'  
              alt="Programming Certificate"  
            />  
            <Carousel.Caption className='hey'>  
              <h3>Programming Achievement</h3>  
              <p>Certified in Python Programming with advanced projects in machine learning.</p>  
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src='../my_imports/Blue White Bordered Certificate Of Achievement Certificate.png'  
              alt="Web Design Certificate"  
            />  
            <Carousel.Caption className='hey'>  
              <h3>Graphic Design Achievement</h3>  
              <p>Completed a professional course in Graphic Design, focusing on Adobe Creative Suite.</p>  
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src='../my_imports/Gold and Classy Appreciation Certificate.png'  
              alt="Full Stack Development Certificate"  
            />  
            <Carousel.Caption className='hey'>  
              <h3>Full Stack Development</h3>  
              <p>Awarded for completing the Full Stack Developer Certification, mastering front-end and back-end technologies.</p>  
            </Carousel.Caption>  
          </Carousel.Item>  
        </Carousel>  
      </Container>  
    </Container>    
  );  
}  

export default EdBg; 