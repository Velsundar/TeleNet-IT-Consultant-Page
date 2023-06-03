import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homemain from "../HomePage/Home";
import NavBar from "../HomePage/navbar";
import Footer from "../HomePage/Footer";
import CCTV from "../ProductsPage/CCTVCameraPage";
import Security from '../ProductsPage/Security';
import Network from '../ProductsPage/Network';
import Gps from '../ProductsPage/GPSPage';
import HomeAutomation from '../ProductsPage/HomeAutomation';
import SmartBoard from '../ProductsPage/SmartBoard';
import Home from "../HomePage/section2mail";
import PageNotFound from "../ProductsPage/PageNotFound";
import AboutUs from "../mainroutepages/About US";
import OneStopSolution from "../mainroutepages/OnestopSolution";
import ContactUs from '../mainroutepages/contact-us'


const Router = () =>{
    return(
        <BrowserRouter>
                <NavBar/>
                <Home/>
            <Routes>
                <Route exact path='/' element={<Homemain/>}/>
                <Route path='/CCTV' element={<CCTV/>}/>
                <Route path='/security' element={<Security/>}/>
                <Route path='/network' element={<Network/>}/>
                <Route path='/GPS' element={<Gps/>}/>
                <Route path='/automation' element={<HomeAutomation/>}/>
                <Route path='/smartboards' element={<SmartBoard/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
                <Route path='/one-stop-solution' element={<OneStopSolution/>}/>
                <Route path='*' element={<PageNotFound/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Router;


