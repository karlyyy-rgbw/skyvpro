import './Home.css';  
import logo from '../my_imports/logo1.png';  
import cardImage from '../my_imports/Untitled design.png';    
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/Navbar';  
import { Link } from 'react-router-dom';  
import Card from 'react-bootstrap/Card';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion } from 'framer-motion';

function Home() {  
  const progressData = [  
    { skill: 'Figma', value: 80 },  
    { skill: 'Capcut', value: 80 },  
    { skill: 'Python', value: 55 },  
    { skill: 'C++', value: 50 },  
    { skill: 'HTCSJS', value: 90 },  
    { skill: 'React', value: 40 },  
  ];  
  return (  
    <Container className="padding">  
      <Container className="bluebos" style={{ width: '100%', maxWidth: '1200px', height: 'auto%' }}>  
        <Navbar expand="lg" style={{ backgroundColor: 'transparent', color: 'white' }} data-bs-theme="dark">  
          <Container>  
            <Navbar.Brand as={Link} to="/Home">About</Navbar.Brand>  
            <img src={logo} alt="Logo" className="logo" style={{ position: 'absolute', top: '15px', right: '20px', width: '30px', height: '30px'}}/>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
              <Nav className="me-auto">  
                <Nav.Link as={Link} to="/">My Profile</Nav.Link>  
                <Nav.Link as={Link} to="/background">Background</Nav.Link>  
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>  
                <Nav.Link as={Link} to="/services">Services</Nav.Link>  
              </Nav>  
            </Navbar.Collapse>  
          </Container>  
        </Navbar>  

        <Row style={{ marginTop: '10px',  marginLeft: '10px'}}>  
          <Col className='k' md={5} style={{marginLeft: '70px'}}>  
          <h2 className='titlee'>ABOUT <span className='yell'>ME</span></h2>  
            <p className='pp'>  
              <span className="highlight">Batang Komsay | Software Engineer Wannabe</span> a youthful passionate to learn the intricacies of programming, the spirit of innovation and determination, to improve his skills and make his mark in the software industry.
            </p>    
          </Col>  

          <Col md={5}>  
              <Card.Img variant="top" src={cardImage} style={{width:'20rem'}}/>  

          </Col>  
        </Row>  
        <Row>
          <div className='Vio'>
            <div>
            <p className='ints'>
              INTERESTS
            </p>
            </div>
          </div>
        </Row>
          <Row style={{marginLeft: '40px'}}>
              <Col md={3}><div className='Box'><img src='../my_imports/camera.svg' alt='Photography' className='category-image' /><p className='int'>photography</p></div></Col>
              <Col md={3}><div className='Box'><img src='../my_imports/pen.svg' alt='Photography' className='category-image' /><p className='int'>graphics</p></div></Col>
              <Col md={3}><div className='Box'><img src='../my_imports/browser-edge.svg' alt='Photography' className='category-image' /><p className='int'>web dev</p></div></Col>
              <Col md={3}><div className='Box'><img src='../my_imports/lightning-charge-fill.svg' alt='Photography' className='category-image' /><p className='int'>sports</p></div></Col>
          </Row>
          <Row style={{marginLeft: '40px'}}>
              <Col md={3}><div className='Box'><img src='../my_imports/controller.svg' alt='Photography' className='category-image' /><p className='int'>esports</p></div></Col>
              <Col md={3}><div className='Box'><img src='../my_imports/currency-bitcoin.svg' alt='Photography' className='category-image' /><p className='int'>crypto</p></div></Col>
              <Col md={3}><div className='Box'><img src='../my_imports/activity.svg' alt='Photography' className='category-image' /><p className='int'>arts</p></div></Col>
              <Col md={3}><div className='Box'><img src='../my_imports/tree.svg' alt='Photography' className='category-image' /><p className='int'>pets</p></div></Col>
          </Row>
          <Row style={{marginTop:'20px'}}>
          <div className='Vio2'>
            <div>
            <p className='ints'>
              PROGRESS
            </p>
            </div>
          </div>
        </Row>
        <Row style={{ marginLeft: '40px', marginTop: '20px' }}>  
  {progressData.map((skill) => (  
    <Col md={6} key={skill.skill} style={{ marginBottom: '20px' }}>  
      <div className='progress-bar-container'>  
        <p className='init'>{skill.skill}</p> {/* Added class 'init' */}  
        <motion.div  
  className='progress-bar yell'   
  initial={{ width: 0 }}  
  animate={{ width: `${skill.value}%` }}  
  transition={{ duration: 1 }}  
  style={{ backgroundColor: 'yellow', height: '20px', borderRadius: '5px' }} // Inline styling for yellow background  
>  
  <span className='progress-text'>{skill.value}%</span>  
</motion.div>  
      </div>  
    </Col>  
  ))}  
</Row>
      <Row>
        <Col md={3}>
      <Card style={{ width: '18rem',marginTop:'10px'}}>
      <Card.Img variant="top" src="../my_imports/yas.jpg" />
      <Card.Body>
        <Card.Title className='karen'><p>Karen M. Celso <span className='karen2'>writer, Naga Collegian</span></p></Card.Title>
        <Card.Text>
        "As a writer working closely with Karl, I can confidently recommend them for any web development or graphic design project. Karl possesses an impressive skill set that harmoniously blends technical expertise with creative flair. Their designs not only capture attention but also effectively communicate the message we aim to convey. Collaborating with Karl has been a pleasure, as their insights and creativity always elevate our projects to the next level."
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col md={3}>
      <Card style={{ width: '18rem',marginTop:'10px'}}>
      <Card.Img variant="top" src="../my_imports/404405060_3147742042186766_907126596061845650_n.jpg" />
      <Card.Body>
      <Card.Title className='karen'><p>Josh B. Mojica <span className='karen2'>CEO, Kangkong Chips</span></p></Card.Title>
        <Card.Text>
        "I enthusiastically recommend Karl for any role in web development and graphic design. His innovative approach to projects at KC Chips consistently resulted in outstanding websites that combined aesthetic appeal with seamless functionality. Karl’s technical expertise, coupled with his creativity and attention to detail, made a significant impact on our team’s success. He is not just a talented developer and designer but also a reliable team player."
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col md={3}>
      <Card style={{ width: '18rem',marginTop:'10px'}}>
      <Card.Img variant="top" src="../my_imports/images.jpeg" />
      <Card.Body>
      <Card.Title className='karen'><p>Daniel B. Bonito <span className='karen2'>BSCS, NCF</span></p></Card.Title>
        <Card.Text>
        "Karl is an incredible web developer and graphic designer. During our time working together at Naga College Foundation, I was consistently impressed by his ability to create engaging and user-friendly interfaces. His technical skills are remarkable, and his collaborative spirit makes him a joy to work with. Karl's commitment to excellence and his innovative ideas greatly contributed to our projects, and I wholeheartedly endorse him for any opportunity he pursues."
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col md={3}>
      <Card style={{ width: '18rem',marginTop:'10px'}}>
      <Card.Img variant="top" src="../my_imports/ff72b31e-b36b-4b0c-8821-2543572aff87_Albert+Einstein.webp" />
      <Card.Body>
      <Card.Title className='karen'><p>Albert Einstein <span className='karen2'>professor, NCF</span></p></Card.Title>
        <Card.Text>
        "It is my pleasure to recommend Karl, who excelled in my we dev courses at NCF. His passion for web development and graphic design was evident in his projects, where he showcased not only technical proficiency but also a keen eye for aesthetics. Karl’s work was innovative and thoughtful, earning him high praise from both peers and faculty. I have no doubt that his skills and creativity will make him a valuable asset in any future endeavor."
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>  
    </Container>  
  );  
}  

export default Home;