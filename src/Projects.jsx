import './Projects.css';  
import logo from '../my_imports/logo1.png';  
import cardImage from '../my_imports/Untitled design.png';    
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/Navbar';  
import { Link } from 'react-router-dom';  
import Card from 'react-bootstrap/Card';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Button from 'react-bootstrap/Button'; 
import Accordion from 'react-bootstrap/Accordion';

function Projects() {  
  const projects = [  
    {  
      title: 'Parang',  
      description: 'A psychological thriller short film that mends human greed and pandemic.',  
      image: '../my_imports/267784314_121731433668570_3635513272324133705_n.jpg',  
      link: 'https://www.facebook.com/107345468440500/videos/271847461673590',  
    },  
    {  
      title: 'Ms. Gay Pamukid Stage Cover',  
      description: 'A promotional graphic for "Mx. Gay Pamukid 24," showcasing vibrant colors and flashy elements typical of a pageant, with a focus on the event name in a stylized font.',  
      image: '../my_imports/mx.jpg',  
      link: 'https://www.facebook.com/photo.php?fbid=852117187044665&set=pb.100067391754786.-2207520000&type=3',  
    },  
    {  
      title: 'On What Makes a Good Design',  
      description: 'Good design balances form and function, engaging users through intuitive navigation and appealing aesthetics. It adapts responsively across devices to ensure a seamless experience, prioritizing user needs.',  
      // Uncomment the following line to display an image instead of a video.  
      image: cardImage,  
      // If you want to showcase a video instead, you can add a video property here.  
      // video: 'https://www.example.com/path-to-your-video.mp4',  
      link: 'https://www.example.com',  
    },  
  ];  

  return (  
    <Container className="padding">  
      <Container className="bluebos" style={{ width: '100%', maxWidth: '1200px' }}>  
        <Navbar expand="lg" style={{ backgroundColor: 'transparent', color: 'white' }} data-bs-theme="dark">  
          <Container>  
            <Navbar.Brand as={Link} to="/projects">Projects</Navbar.Brand>  
            <img src={logo} alt="Logo" className="logo" style={{ position: 'absolute', top: '15px', right: '20px', width: '30px', height: '30px'}}/>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
              <Nav className="me-auto">  
                <Nav.Link as={Link} to="/">My Profile</Nav.Link>   
                <Nav.Link as={Link} to="/home">About</Nav.Link>  
                <Nav.Link as={Link} to="/background">Background</Nav.Link>    
                <Nav.Link as={Link} to="/services">Services</Nav.Link>  
              </Nav>  
            </Navbar.Collapse>  
          </Container>  
        </Navbar>  
        <Row className='titlee'>  
          <p id='edbg'>Pro <span className='yell'>Jects</span></p>  
        </Row>  
        <p id='edbgd'>Gra <span className='yelld'>phics</span></p>  
        <Row className="mt-4">  
          {projects.map((project, index) => (  
            <Col key={index} md={4} className="mb-4">  
              <Card>  
                {/* Check for video property to display video if available */}  
                {project.video ? (  
                  <video controls style={{ width: '100%' }}>  
                    <source src={project.video} type="video/mp4" />  
                    Your browser does not support the video tag.  
                  </video>  
                ) : (  
                  <Card.Img variant="top" src={project.image} />  
                )}  
                <Card.Body>  
                  <Card.Title>{project.title}</Card.Title>  
                  <Card.Text>{project.description}</Card.Text>  
                  <Button variant="primary" href={project.link} target="_blank">View Project</Button>  
                </Card.Body>  
              </Card>  
            </Col>  
          ))}  
        </Row>  
        <p id='edbgd'>Web <span className='yelld'>Devs</span></p> 
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>EpicEmailTemplatesBundle.com</Accordion.Header>
        <Accordion.Body>
        This website showcases a comprehensive bundle of email templates designed for various purposes, catering to businesses and individuals aiming to enhance their email marketing efforts. The templates feature modern designs with user-friendly layouts, making it easy to create professional-looking emails quickly. The collection includes templates for different industries and occasions, offering customization options that allow users to maintain brand consistency while effectively communicating their messages. The emphasis on visual elements ensures that emails capture attention, improve engagement rates, and drive conversions.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Magezon.com</Accordion.Header>
        <Accordion.Body>
        Magezon presents a dynamic platform that includes a variety of web development tools, notably highlighting its new page builder feature. The website is visually engaging and offers an intuitive interface that simplifies the design process for developers and designers alike. Users can expect powerful functionalities, including drag-and-drop editing, pre-made templates, and customizable layouts, which empower them to create dynamic and responsive websites without extensive coding knowledge. Magezon's commitment to enhancing user experience is evident in the comprehensive support and resources it provides, making it a preferred choice among those looking to streamline their web development workflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>BestPortfolioWebsiteTemplates.com</Accordion.Header>
        <Accordion.Body>
        This site focuses on providing an array of portfolio website templates tailored for creatives across diverse fields, such as photography, fashion, and digital design. The templates are crafted to showcase work in a visually appealing manner, combining aesthetic appeal with functional design elements that enhance user navigation. Each template is designed to be easily customizable, allowing users to personalize colors, layouts, and content to reflect their unique style and personality. This platform serves as a valuable resource for artists and professionals looking to establish a strong online presence that effectively highlights their skills and projects.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>EpicEmailTemplatesBundle.com</Accordion.Header>
        <Accordion.Body>
        Echoing the theme of the first website, this section reaffirms the versatile email template offerings. It provides additional details about the range of templates available, emphasizing their adaptability to different marketing strategies and campaigns. The website likely features a user-friendly interface that allows visitors to preview templates before purchase, ensuring they select options that best fit their needs. With an emphasis on high-quality design, these templates are ideal for users looking to create impactful email content that resonates with recipients and drives engagement.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> 
        <Row className="mt-4">  
        <Col md={3} className="mb-4">  
    <Card className="project-card">  
      <Card.Img variant="top" src="../my_imports/8986d9e0-3eb7-4e89-92be-784e9dd405ae.avif" />  
      <Card.Body>  
        <Card.Title>Epic Email Templates Bundle</Card.Title>  
        </Card.Body>  
    </Card>  
  </Col>  
  <Col md={3} className="mb-4">  
    <Card className="project-card">  
      <Card.Img variant="top" src="../my_imports/image-32-1024x526.png" />  
      <Card.Body>  
        <Card.Title>Magezon</Card.Title>  
        </Card.Body>  
    </Card>  
  </Col>  
  <Col md={3} className="mb-4">  
    <Card className="project-card">  
      <Card.Img variant="top" src="../my_imports/1342500347.webp" />  
      <Card.Body>  
        <Card.Title>Virtual Reality Experience</Card.Title>  
        </Card.Body>  
    </Card>  
  </Col>  

  {/* Additional project cards */}  
  <Col md={3} className="mb-4">  
    <Card className="project-card">  
      <Card.Img variant="top" src="../my_imports/8986d9e0-3eb7-4e89-92be-784e9dd405ae.avif" />  
      <Card.Body>  
        <Card.Title>Epic Email Templates Bundle</Card.Title>  
        </Card.Body>  
    </Card>  
  </Col>  
</Row>
      </Container>  
    </Container>  
  );  
}  

export default Projects;