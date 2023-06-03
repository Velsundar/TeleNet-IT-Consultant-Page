import React,{useEffect} from 'react';
// import Container from 'react-bootstrap/Container';
// import Home from './section2mail';
// import Footer from '../Footer';
import '../../Styles/Home.css';
import "aos/dist/aos.css";
import { Phone } from 'react-bootstrap-icons';
import { Check2All } from 'react-bootstrap-icons';
import Camera from '../../Styles/Sources/cctv camera png edit.png'
import Whychoose from '../../Styles/Sources/Why_choose_Us_BG.jpeg'
import backgroundimage from '../../Styles/Sources/Networking_image.jpeg'
// import Security from '../Styles/Sources/security_BG.jpeg'

// import  'aos';
import Aos from 'aos';
const Homemain =()=>{
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);
    return(
        <div style={{backgroundImage:`url(${backgroundimage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
        {/* <Home/> */}
        <div className='topcontainer'>
            <div className='bar1' data-aos="fade-right"data-aos-duration="2000"></div>
            <h1 data-aos="fade-right"data-aos-duration="2000" className='heading1'>TeleNet</h1>
            <h1 data-aos="fade-right"data-aos-duration="2500" className='heading2'>"Nothing is <span className='heading2Color'>out of Reach"</span></h1>
            <div data-aos="fade-right"data-aos-duration="3000" className='para1'>
            <p className=''>We are dedicated to maintaining a strong reputation as a leading Security solution provider in all over Tamilnadu region through our customized and budget oriented products. For the past few years, we have won awards, completed innovative projects and established a very strong company culture. We have grown more than we ever could have anticipated. None of it would be possible without our dear clients and our dedicated team.</p>
            </div>
            <h1 className='callus1' data-aos="fade-up-left"data-aos-duration="3000">CALL-US:<span className='callusnumber'><Phone/>{" "}9786575916</span></h1>
            <div className='topcameraback'></div>
            <img src={Camera}className='topcamera' data-aos="fade-left" data-aos-duration="1000" alt=''/>
        </div>
        {/* Cards Section */}
        {/* Cards Section Ends */}
        <div className='whychooseus'>
            <h3 className='whychoosehead' data-aos="zoom-in" data-aos-duration="2000">"For best Customer Service,<span className='whychoosespan'>Reliability And Great Value"</span></h3>
            <div className='whychoosebulletins'>
            <Check2All className='bulleticon'/><span>Unique and flexible business model to suit every client’s service and security need.</span><br/>
            <Check2All className='bulleticon'/><span>Great security solution provider for 22+ years.</span><br/>
            <Check2All className='bulleticon'/><span>Dedicated customer service, at anytimeof your need.</span>
            </div>
            <img src={Whychoose} alt=""/>
        </div>
        {/* Enquire Section Starts */}
        <div className='Enquiresection'>
            <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Enquire now</button>
            <h2>"TELENET IS BOLD,<br/>TELENET IS STRONG,<br/>TELENET IS SECURE<br/></h2>
        </div>
        {/* Enquire section ends */}
        {/* Footer Render */}
        {/* <Footer/> */}
        </div>
    )
}
export default Homemain;