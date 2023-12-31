import React from 'react'
import { Row , Col , Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import item1 from '../assets/img/meter1.svg'
import item2 from '../assets/img/meter2.svg'
import item3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  
    return (
    <section className='skill' id='skills'>
        <Container>
        <Row>
            <Col>
            <div className='skill-bx'>
                <h2>
                    Skills
                </h2>
                <p>My portfolio showcase's proficiency in front-end and/ basic back-end development, as well as full-stack development, with experience in responsive design, accessibility, performance optimization and effective communication and collaboration skills. These skills demonstrate the ability to create high-quality, functional, and user-friendly web applications while working effectively within a team.</p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div className='item'>
                        <img src={item1} alt="" />
                        <h5>Web Development</h5>
                    </div>
                    <div className='item'>
                        <img src={item2} alt="" />
                        <h5>Java Script</h5>
                    </div>
                    <div className='item'>
                        <img src={item3} alt="" />
                        <h5>Web Design</h5>
                    </div>
                    <div className='item'>
                        <img src={item1} alt="" />
                        <h5>React JS</h5>
                    </div>
                    <div className='item'>
                        <img src={item2} alt="" />
                        <h5>REST Api's</h5>
                    </div>
                    <div className='item'>
                        <img src={item1} alt="" />
                        <h5>Project Management</h5>
                    </div>
                    <div className='item'>
                        <img src={item3} alt="" />
                        <h5>Speaking Skills</h5>
                    </div>
                </Carousel>
            </div>
                
            </Col>
        </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} />
    </section>
  )
}
