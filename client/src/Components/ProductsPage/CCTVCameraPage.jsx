import React,{useState,useEffect} from 'react';
import '../../Styles/CCTVPage.css'
import backgroundimage from'../../Styles/Sources/cctv_page_BG.jpg';
import section2CCTV from '../../Styles/Sources/CCTV_Page_Section2.png'
// import axios from 'axios';

const CCTV =()=>{
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/CCTV')
        .then(res => res.json())
        .then(res => setProducts(res))
    })
return(
    <div className='fetcheddatas' style={{backgroundImage:`url(${backgroundimage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed',backgroundColor:'rgba(255, 255, 255, 9)'}}>
        <div className='cctvheadings1'>
            <h1>CCTV Camera</h1>
            <p>Opting For The Security In The Future</p>
        </div>
        {products.map(u=>(
            <div className='CCTVmaindiv'>
                <img src={u.url} className='CctvImages' height="100" width="100" style={{ borderRadius: '50%' }} alt='Not found'></img>
                <h1 className='cctvheadings'>{u.name}</h1>
                <p>Price: {u.Price}</p>
                <button>{u.add}</button>
            </div>
        ))}
        <div className='section2'>
            <div className='sec2imagebg'>
                <img src={section2CCTV} alt=''></img>
            </div>
            <h1>Humans Can sleep but <b>CCTV Won't</b> Sleep</h1>
            <p>This is the best security in the world. Install a CCTV camera  To protect your office from the fear of theft. we setup at a very low price. Webcam Security is not a  standalone app, it is part of camera FTP’s Home & Business Security service</p>
        </div>
    </div>
)
}
export default CCTV;