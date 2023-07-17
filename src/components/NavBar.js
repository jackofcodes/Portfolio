import React from 'react'
import {useState , useEffect} from 'react'
import logo from '../assets/img/logo.svg'
import github from "../assets/img/gh_image.png";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import {Navbar , Nav, Container ,Alert} from "react-bootstrap";

export default function NavBar() {
    const [activeLink , setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [email, setEmail] = useState("aamirlodhia35@gmail.com");
    const [show, setShow] = useState(false) ; 

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50)
            {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll" , onScroll);

    },[])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setShow(true);
    });
  };

  if (show){  
    return (  
      <div className="App">  
     <Container className='p-4'>  
     <Alert variant="success" onClose={() => setShow(false)} dismissible >  
     <Alert.Heading>Email copied to clipboard</Alert.Heading>   
     </Alert>  
  </Container>  
      </div>  
    ); 
  } 

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <h1 className='logo'>Aamir</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/aamir-lodhia-3401a3179/'><img src={navIcon1} alt=""/></a>
                        <a href='https://www.facebook.com/aamir.lodhia'><img src={navIcon2} alt=""/></a>
                        <a href='https://www.instagram.com/_itz_aamirrr/'><img src={navIcon3} alt=""/></a>
                        <a href='https://github.com/jackofcodes'><img src={github} alt=""/></a>
                    </div>
                    <button className='vvd' onClick={copyToClipboard}><span>Lets Connect</span></button>
                    
                </span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}
