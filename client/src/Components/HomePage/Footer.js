import React from 'react';
import "../../Styles/Footer.css"
import { Envelope } from 'react-bootstrap-icons';
import { Phone } from 'react-bootstrap-icons';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import logo from '../../Styles/Sources/TELENET_Logo.png'


const Footer =()=>{
    return(
    <>
    <div className='Footer'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#AFE1AF" fill-opacity="1" d="M0,192L34.3,202.7C68.6,213,137,235,206,229.3C274.3,224,343,192,411,192C480,192,549,224,617,234.7C685.7,245,754,235,823,202.7C891.4,171,960,117,1029,128C1097.1,139,1166,213,1234,229.3C1302.9,245,1371,203,1406,181.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <div className='FootContact'>
            <h2>CONTACT US</h2>
            <div className='footContactLine'></div>
            <Phone/>{' '}<span className='FootNumber'><a href='tel:9786575916'>9786575916</a></span><br/>
            <Envelope/>{' '}<span className='FootMail'><a href='mailto:sundaravelmech@gmail.com'>Info@Telenet.com</a></span>
        </div>
        <div className='FootAddress'>
            <h2>Address</h2>
            <div className='footContactLine'></div>
            <p>No.39,<br/>Bypass,<br/>Thanjavur-613501.</p>
        </div>
        <div className='FootServices'>
            <h2>SERVICES</h2>
            <div className='footContactLine'></div>
            <ul className='footerServicesBullets'>
                <li><Link to='/CCTV'>CCTV Camera</Link></li>
                <li><Link to='/security'>Security</Link></li>
                <li><Link to='/network'>Network</Link></li>
                <li><Link to='/GPS'>Vehicle tracking</Link></li>
                <li><Link to='/automation'>Home Automation</Link></li>
                <li><Link to='/smartboards'>Smart Board</Link></li>
            </ul>
        </div>
        <a href='Home'><img src={logo} alt='Not Found' className='FootLogo'/></a>
        <div className='SocialIcons1'>
            <h2>Follow Us</h2>
            <div className='footContactLine'></div><br/>
            <SocialIcon url="https://twitter.com/Google" target='blank_' style={{ height: 40,width:40 }} />{" "}
            <SocialIcon url="https://www.instagram.com/actorvijay/" target='blank_' style={{ height: 40,width:40 }} />{" "}
            <SocialIcon url="https://in.pinterest.com/" target='blank_' style={{ height: 40,width:40}} />
      </div>

    </div>
    </>
    )
}
export default Footer;