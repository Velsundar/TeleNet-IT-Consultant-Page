import React,{useEffect, useState} from 'react';
import GPSbg from '../../Styles/Sources/GPS_BG.jpg'
import GPScar from '../../Styles/Sources/gps_car_image.png'
import GPSLpin from '../../Styles/Sources/GPS_Location_Pin.jpeg'
import '../../Styles/GPSPage.css'
import "aos/dist/aos.css";
// import  'aos';
import Aos from 'aos';


const Gps =()=>{
    const[gps,setgps]=useState([]);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

      useEffect(()=>{
        fetch('http://localhost:8000/gps')
        .then(res => res.json())
        .then(res => setgps(res))
    })


    return(
        <>
        <div className='GPS_main' style={{backgroundImage:`url(${GPSbg}`,backgroundAttachment:'fixed',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'400px',position:'relative'}}>
            <h1 data-aos="zoom-in-up" data-aos-duration="2000">Vehicle Tracking</h1>
            <p data-aos="zoom-in-up" data-aos-duration="3000">"Track Your Vehicle, Anywhere...Anytime"</p>
        </div>
        <div className='GPS_SEC2' style={{position:'relative'}}>
            <h1>Do You Need To Track Your Vehicle</h1>
            <p className='GPS_SEC2p1' data-aos="fade-right" data-aos-duration="2000"><b>"Keep Your Eye On Your Vehicle</b> , Track Your Vehicle In REALTIME "</p>
            <p className='GPS_SEC2p2' data-aos="fade-right" data-aos-duration="2500">Infotel is India’s popular GPS tracking brand used for asset GPS Tracking security,Our user friendly gps system let the manage their assets [Car, Bike,Truck, Bus] from across the globe.</p>
            <img className='carimage' src={GPScar} alt='' data-aos="fade-left" data-aos-duration="1000"></img>
            <img className='Lpin' src={GPSLpin} alt='' data-aos="fade-left" data-aos-duration="1000"></img>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#AFE1AF" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
        <h1 className='GPS_Products'><u>Products:</u></h1><br/>
        {gps.map(g=>(
        <div className='GPS_SEC3'>
            <img src={g.url} className='GpsImages' height="100" width="100" style={{ borderRadius: 'none',border:'1px solid grey' }} alt='Not found'></img>
            <h1 className='cctvheadings'>{g.name}</h1>
            <p><b>Price:</b>{g.Price}</p>
            <p><b>Description:</b>{g.desc}</p>
            <button>{g.add}</button>
        </div>
        ))}
        </>
    )
}
export default Gps;