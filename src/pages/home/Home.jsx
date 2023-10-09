import { useLoaderData } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import Event from "./event/Event";
import Team from "./team/Team";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    const services = useLoaderData();

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services services={services.data}></Services>
            <Event></Event>
            <Team team={services.team}></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;