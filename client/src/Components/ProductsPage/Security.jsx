import React,{useEffect} from 'react';
import Aos from 'aos';
import SecurityBg from '../../Styles/Sources/security_BG.jpeg'
import { PlugFill } from 'react-bootstrap-icons';
import Firealarm from '../../Styles/Sources/Security_Firewall.jpeg'
import Burglar from '../../Styles/Sources/Security_Burglar.png'
import Lock from '../../Styles/Sources/Security_Door_Lock.jpeg'
import Biometric from '../../Styles/Sources/Security_Biometric.jpeg'
import { Headset } from 'react-bootstrap-icons';
import { AwardFill } from 'react-bootstrap-icons';
import '../../Styles/Security_page.css'

const Security =()=>{
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return(
        <>
        <div className='GPS_main' style={{backgroundImage:`url(${SecurityBg}`,backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'400px',position:'relative'}}>
            <h1 data-aos="zoom-in-up" data-aos-duration="2000">Security</h1>
            <p data-aos="zoom-in-up" data-aos-duration="3000">"The Most Reliable Home Security"</p>
        </div>
        <div className='SECURE_Sec2' style={{position:'relative',backgroundColor:"white"}}>
            <h1 className='Sec2Firehead' data-aos="fade-right" data-aos-duration="1000">Firewall Alarm</h1>
            <p data-aos="fade-right" data-aos-duration="2000">Firewall alarm is like a Antivirus.It will save your computer from the unwanted restricted datas like hacking, virus, etc...This firewall will be available in hardware based and software based.</p><br/><br/><br/>
            <div className='FirewallBulletin' data-aos="fade-right" data-aos-duration="3000">
            <PlugFill className='bulleticon'/><span>Unique and flexible business model to suit every client’s service and security need.</span><br/>
            <PlugFill className='bulleticon'/><span>Great security solution provider for 22+ years.</span><br/>
            <PlugFill className='bulleticon'/><span>Dedicated customer service, at anytimeof your need.</span>
            </div>
            <img src={Firealarm} alt='' data-aos="fade-left" data-aos-duration="1000"></img>
            <Headset className='headseticon'/>
            <AwardFill class='AwardIcon'/>
            <h5 className='supporthead'>24/7 Support</h5>
            <h5 className='warrantyhead'>1 Year Warranty</h5>
        </div>
        <div className='Secure_Sec3' style={{position:'relative',backgroundColor:"White Smoke"}}>
        <h1 className='Sec2Firehead' data-aos="fade-left" data-aos-duration="1000">Burglar Alarm</h1>
            <p data-aos="fade-left" data-aos-duration="1000"> Burglar is used for security sounds to protect thieves and unwanted persons from your office. Burglar alarms are networks of integrated electronic devices working together with a central control panel to protect against theft and other possible illegal alarms.</p><br/><br/><br/>
            <div className='BurglarBulletin' data-aos="fade-left" data-aos-duration="1000">
            <PlugFill className='bulleticon'/><span>Wired alarm system</span><br/>
            <PlugFill className='bulleticon'/><span>Bells only alarm</span><br/>
            <PlugFill className='bulleticon'/><span>Wireless alarm System</span><br/>
            <PlugFill className='bulleticon'/><span>Smart alarm System</span>
            </div>
            <img src={Burglar} alt='' data-aos="fade-right"></img>
            <Headset className='headseticon1'/>
            <AwardFill class='AwardIcon1'/>
            <h5 className='supporthead1'>24/7 Support</h5>
            <h5 className='warrantyhead1'>1 Year Warranty</h5>
        </div>
        <div className='Secure_Sec4' style={{position:'relative',backgroundColor:"White Smoke"}}>
        <h1 className='Sec2Firehead' data-aos="fade-right" data-aos-duration="1000">Digital lock</h1>
            <p data-aos="fade-right" data-aos-duration="2000">Electronic or Digital or battery-operated locks that do not require the use of physical keys for access. they are used as an alternative automated features giving more creative security solution depending on its intended use.</p>
            <div className='FirewallBulletin' data-aos="fade-right" data-aos-duration="3000">
            <PlugFill className='bulleticon'/><span>Smart way to protect your home</span><br/>
            <PlugFill className='bulleticon'/><span>Say Bye to old Lock</span><br/>
            <PlugFill className='bulleticon'/><span>Switch To the Digital lock</span>
            </div>
            <img src={Lock} alt='' data-aos="fade-left" data-aos-duration="1000"></img>
            <Headset className='headseticon'/>
            <AwardFill class='AwardIcon'/>
            <h5 className='supporthead'>24/7 Support</h5>
            <h5 className='warrantyhead'>1 Year Warranty</h5>
        </div>
        <div className='Secure_Sec5' style={{position:'relative',backgroundColor:"White Smoke"}}>
        <h1 className='Sec2Firehead' data-aos="fade-left" data-aos-duration="1000">Bio-Metric Attendance</h1>
            <p data-aos="fade-left" data-aos-duration="1000">For a quick biometrics definition: Biometrics are biological measurements — or physical characteristics — that can be used to identify individuals. For example, fingerprint mapping, facial recognition, and retina scans are all forms of biometric technology, but these are just the most recognized options.</p>
            <div className='BurglarBulletin' data-aos="fade-left" data-aos-duration="1000">
            <PlugFill className='bulleticon'/><span>Identification or verification</span><br/>
            <PlugFill className='bulleticon'/><span>Perfect</span><br/>
            <PlugFill className='bulleticon'/><span>Identifying Individuals who are under surveillance</span><br/>
            </div>
            <img src={Biometric} alt='' data-aos="fade-right"></img>
            <Headset className='headseticon1'/>
            <AwardFill class='AwardIcon1'/>
            <h5 className='supporthead1'>24/7 Support</h5>
            <h5 className='warrantyhead1'>1 Year Warranty</h5>
        </div>
        </>
    )
}
export default Security;