import React from 'react'
import { useState , useEffect} from 'react'
import { Col, Fade, Row, Alert,Container } from 'react-bootstrap'
import headerImg from "../assets/img/header-img.jpg"

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const [email, setEmail] = useState("aamirlodhia35@gmail.com");
    const [show, setShow] = useState(false) ; 
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

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

    
  return (
    <section className='banner' id='home'>
        <container>
            <Row className='align-items-centre'>
                <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome To My Portfolio</span>
                <h1>Heya, <h1>I am Aamir Lodhia</h1><span className='wrap'>{text}</span></h1>
                <p>An undergraduate in Computer Science Engineering with specialization in Artificial 
                    Intelligence and Robotics entry-level experience, specializing in Python and C++, 
                    software development, full stack web development and data science. Adept at 
                    collaborating with diverse teams to achieve project objectives.</p>
                <button onClick={() => console.log("connect")}>Lets Connect</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="header Img" />
                </Col>
            </Row>
        </container>

    </section>
  )
}
