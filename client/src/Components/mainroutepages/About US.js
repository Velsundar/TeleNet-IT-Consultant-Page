import React,{useEffect} from 'react';
import '../../Styles/About_Us.css'
 import "aos/dist/aos.css";
import Aos from 'aos';
import Aboutusimage from '../../Styles/Sources/CCTV_aboutus page image.jpg'
import img2 from '../../Styles/Sources/girl_working_in_laptop-transformed.jpeg'

const AboutUs = () =>{
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return(
        <div>
            <div className='TopDivAboutUs'>
                <p data-aos="fade-right"data-aos-duration="2000">A Satisfied Customer Is The<br/> Best Business Strategy Of All</p>
                <div className='underline'></div>
                <h1 data-aos="fade-right"data-aos-duration="3500">About Us</h1>
                <img src={Aboutusimage} alt='' data-aos="fade-up"></img>
            </div>
            <div className='Section2'>
                <img src={img2}alt=''></img>
                {/* <div className='section2texts'> */}
                <h6>Aiming To Be The Best</h6>
                <h3>Who We Are</h3>
                <div className='elementdivider'></div>
                <h4>We Bring The Security Solutions To You...Anywhere, All The Time!</h4>
                <p>Established in the year 2023, Infotel specializes  in serving hundreds of Corporate and residential clients across Thanjavur and Trichy region, especially in areas where customers never had the  services and faced challenges in availing security solutions.</p>
                {/* </div> */}
            </div>
        </div>
    )
}
export default AboutUs;