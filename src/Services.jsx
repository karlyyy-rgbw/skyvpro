import './Services.css';  
import logo from '../my_imports/logo1.png';  
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/Navbar';  
import { Link } from 'react-router-dom';  
import Card from 'react-bootstrap/Card';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Button from 'react-bootstrap/Button'; 
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function Projects() {  

  return (  
    <Container className="padding">  
      <Container className="bluebos" style={{ width: '100%', maxWidth: '1200px' }}>  
        <Navbar expand="lg" style={{ backgroundColor: 'transparent', color: 'white' }} data-bs-theme="dark">  
          <Container>  
            <Navbar.Brand as={Link} to="/projects">Services</Navbar.Brand>  
            <img src={logo} alt="Logo" className="logo" style={{ position: 'absolute', top: '15px', right: '20px', width: '30px', height: '30px'}}/>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
              <Nav className="me-auto">  
                <Nav.Link as={Link} to="/">My Profile</Nav.Link>   
                <Nav.Link as={Link} to="/home">About</Nav.Link>  
                <Nav.Link as={Link} to="/background">Background</Nav.Link>    
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>  
              </Nav>  
            </Navbar.Collapse>  
          </Container>  
        </Navbar>  
        <div className='Karl'>
        <div className='logo'><img className='log' src='../my_imports/logo1.png'></img></div>
        <div className='serv'><p className='titlee1'>Serv<span className='yell'>ices</span><br></br></p>  </div>
        <div>    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
        <div><Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion></div>
        <div><Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion></div>
        </div>
        <Row className='titlee'>  
          <p id='edbg'>Con <span className='yell'>Tact </span></p>  
        </Row>  
      </Container>  
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Name" />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Inquiry</Form.Label>
        <Form.Control type="password" placeholder="Describe What You Need " />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
    <Row>
        <Col md={3}>  
          <Card className='recCard' style={{ width: '18rem'}}>  
            <Card.Img className='lomel' variant="top" src='../my_imports/308104809_10160744312588939_5658224302303139349_n.jpg' />  
            <Card.Body>  
              <Card.Title>Melchor Villanueva</Card.Title>  
              <Card.Text style={{ fontStyle: 'italic'}}>  
                "Karl possesses a unique ability to think outside the box, often approaching problems with innovative solutions..."  
              </Card.Text>  
            </Card.Body>  
          </Card>  
        </Col>  
        <Col md={3}>  
          <Card className='recCard' style={{ width: '18rem'}}>  
            <Card.Img className='lomel' variant="top" src='../my_imports/newyorktimes-svgrepo-com (1).svg' />  
            <Card.Body>  
              <Card.Title>The New York Times</Card.Title>  
              <Card.Text style={{ fontStyle: 'italic'}}>  
                ""He is a visionary UI creator who transforms user experiences into seamless and engaging journeys.""  
              </Card.Text>  
            </Card.Body>  
          </Card>  
        </Col>  
        <Col md={3}>  
          <Card className='recCard' style={{ width: '18rem'}}>  
            <Card.Img className='lomel' variant="top" src='../my_imports/441953132_772885594967825_7659918906469719232_n.jpg' />  
            <Card.Body>  
              <Card.Title>Feedbacks</Card.Title>  
              <Card.Text style={{ fontStyle: 'italic'}}>  
                "Definitely my best decision for the month so far -_-"  
              </Card.Text>  
              <Button as={Link} to="/home" style={{ backgroundColor: '#00687b', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>more</Button>  
            </Card.Body>  
          </Card>  
        </Col>  
        <Col md={3} style={{ padding: '20px', textAlign: 'right' }}>  
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">  
    <img src="../my_imports/Facebook_Logo_2023.png" alt="Facebook" style={{ width: '50px', marginLeft: '0' }} />  
  </a>  
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">  
    <img src="../my_imports/Instagram_logo_2022.svg.png" alt="Instagram" style={{ width: '50px', marginLeft: '10px' }} />  
  </a>  
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">  
    <img src="../my_imports/Logo_of_twitter.jpg" alt="Twitter" style={{ width: '50px', marginLeft: '10px' }} />  
  </a>  
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">  
    <img src="../my_imports/Octicons-mark-github.svg.png" alt="GitHub" style={{ width: '50px', marginLeft: '10px' }} />  
  </a>  
</Col>
       </Row>
    </Container>  
  );  
}  

export default Projects;