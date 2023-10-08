import Navbar from "../../../navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDetails from "./SingleDetails";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
    const [ singleDetail, setSingleDetail ] = useState({})

    const services = useLoaderData();

    const {id} = useParams()

    useEffect(() => {
        const findCard = services?.find(service => service.id == id)

        setSingleDetail(findCard);
    },[id, services])

    console.log(singleDetail);

    return (
        <div>
            <Navbar></Navbar>
            <SingleDetails singleDetail = {singleDetail}></SingleDetails>
        </div>
    );
};

export default ServiceDetails;