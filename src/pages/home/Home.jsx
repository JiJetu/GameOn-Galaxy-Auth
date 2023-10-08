import { useLoaderData } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "./banner/Banner";
import Services from "./services/Services";

const Home = () => {
    const services = useLoaderData();


    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services services={services}></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;