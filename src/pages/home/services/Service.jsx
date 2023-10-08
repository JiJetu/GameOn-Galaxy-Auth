import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { image, name, game, price, date, description, id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-yellow-400">{name}</h2>
                <h4 className="text-lg font-medium">{game}</h4>
                <div className="flex justify-between">
                    <p className="text-base">$ {price}</p>
                    <p className="text-base flex justify-end">Last-date: {date}</p>
                </div>
                <p className="text-gray-400">{description}</p>
                <div className="w-full">
                    <Link to={`/serviceDetails/${id}`}><button className="w-full bg-gray-300 text-black hover:bg-neutral hover:text-white rounded-r-lg btn">show Details..</button></Link>
                </div>        
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}

export default Service;