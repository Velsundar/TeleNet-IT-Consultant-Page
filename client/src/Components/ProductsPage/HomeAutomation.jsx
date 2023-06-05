import React,{useEffect} from 'react';
import Aos from 'aos';
import '../../Styles/Security_page.css'
import { PlugFill } from 'react-bootstrap-icons';
import { Headset } from 'react-bootstrap-icons';
import { AwardFill } from 'react-bootstrap-icons';
import HomeautoBG from '../../Styles/Sources/Home_Auto_BG.jpeg'
import Touchpad from '../../Styles/Sources/Home_Auto_1.jpeg'
import AutoDoors from '../../Styles/Sources/Home_Auto_Doors.jpeg'
import AutoLights from '../../Styles/Sources/Home_Auto_Lights.png'
import AutoCurtains from '../../Styles/Sources/Home_Auto_Curtain.jpeg'



const HomeAutomation =()=>{
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return(
        <>
        <div className='GPS_main' style={{backgroundImage:`url(${HomeautoBG}`,backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'300px',position:'relative'}}>
            <h1 data-aos="zoom-in-up" data-aos-duration="2000" style={{top:'110px',left:'320px'}}>Home Automation</h1>
            <p data-aos="zoom-in-up" data-aos-duration="3000" style={{color:'',fontSize:'25px',top:'200px'}}>"We Give You The Touch Of Future. Not Just That , We Make It Affordable For Everyone Too"</p>
        </div>
        <div className='Home_Autosec2' style={{position:'relative',backgroundColor:"lightgrey",height:'500px'}}>
            <h1 className='sec2Head' data-aos="fade-right" data-aos-duration="1000">"Planning For An Automation ? <span className='sec2Headspan'>We are here for You</span></h1>
            <p data-aos="fade-right" data-aos-duration="2000"className='secpara1'>Peace Of Mind Guaranteed !</p>
            <div className='Sec2_FutureDesc'>
                <h3 data-aos="fade-left" data-aos-duration="1000">Future Of Automatic</h3>
                <hr/>
                <p data-aos="fade-left" data-aos-duration="1000">We listen to your requirements and we make your living smarter, safer and more convenient. You will be the most satisfied, we beat every competition with the love and care you need.</p>
                <button data-aos="fade-left" data-aos-duration="1000">Enquire now</button>
            </div>
            <img src={Touchpad} alt='' data-aos="fade-right" data-aos-duration="1000"></img>
        </div>
        <div className='Secure_Sec3' style={{position:'relative',backgroundColor:"White Smoke"}}>
        <h1 className='Sec2Firehead' data-aos="fade-left" data-aos-duration="1000">Automated Doors</h1>
            <p data-aos="fade-left" data-aos-duration="1000">Our company TeleNet is auto entry home automation and automatic security systems and provides best service in importing, distributing and installing entrance automation systems that are problem free and easy to operate.</p>
            <div className='BurglarBulletin' data-aos="fade-left" data-aos-duration="1000">
            <PlugFill className='bulleticon'/><span>Activation Sensors</span><br/>
            <PlugFill className='bulleticon'/><span>Fix door panel</span><br/>
            <PlugFill className='bulleticon'/><span>Door operator</span><br/>
            <PlugFill className='bulleticon'/><span>Safety Sensor</span>
            </div>
            <img src={AutoDoors} alt='' data-aos="fade-right"></img>
            <Headset className='headseticon1'/>
            <AwardFill class='AwardIcon1'/>
            <h5 className='supporthead1'>24/7 Support</h5>
            <h5 className='warrantyhead1'>1 Year Warranty</h5>
        </div>
        <div className='Secure_Sec4' style={{position:'relative',backgroundColor:"White Smoke"}}>
        <h1 className='Sec2Firehead' data-aos="fade-right" data-aos-duration="1000">Automatic Lights</h1>
            <p data-aos="fade-right" data-aos-duration="2000">Lighting controls can help save energy – and money by automatically turning light levels when full brightness isn’t necessary or otherwise controlling the lighting in and around your home.</p>
            <div className='FirewallBulletin' data-aos="fade-right" data-aos-duration="3000">
            <PlugFill className='bulleticon'/><span>Dimmers</span><br/>
            <PlugFill className='bulleticon'/><span>Motion Sensors</span><br/>
            <PlugFill className='bulleticon'/><span>Occupancy sensors & Photo sensors</span>
            </div>
            <img src={AutoLights} alt='' data-aos="fade-left" data-aos-duration="1000" style={{boxShadow:'1px 2px 8px 4px grey'}}></img>
            <Headset className='headseticon'/>
            <AwardFill class='AwardIcon'/>
            <h5 className='supporthead'>24/7 Support</h5>
            <h5 className='warrantyhead'>1 Year Warranty</h5>
        </div>
        <div className='Secure_Sec5' style={{position:'relative',backgroundColor:"White Smoke"}}>
        <h1 className='Sec2Firehead' data-aos="fade-left" data-aos-duration="1000">Automated curtains</h1>
            <p data-aos="fade-left" data-aos-duration="1000">Thanks to motorized curtains and digital assistants, with voice commands that dream is substantially closer to reality. advances in the field have come a long way, making these once expensive tech additions much more feasible.</p>
            <div className='BurglarBulletin' data-aos="fade-left" data-aos-duration="1000">
            <PlugFill className='bulleticon'/><span>Quite and durable Motors</span><br/>
            <PlugFill className='bulleticon'/><span>Remote control and Timer</span><br/>
            <PlugFill className='bulleticon'/><span>Easy Integration : Alexa, Google Home, Smart Life</span><br/>
            </div>
            <img src={AutoCurtains} alt='' data-aos="fade-right"style={{boxShadow:'1px 2px 8px 4px grey'}}></img>
            <Headset className='headseticon1'/>
            <AwardFill class='AwardIcon1'/>
            <h5 className='supporthead1'>24/7 Support</h5>
            <h5 className='warrantyhead1'>1 Year Warranty</h5>
        </div>
        </>
    )
}
export default HomeAutomation;