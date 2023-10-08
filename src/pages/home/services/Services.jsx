import Service from "./Service";
import PropTypes from 'prop-types'

const Services = ({services}) => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-4 md:my-9">Our <span className="text-yellow-400">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mb-8 md:mb-24">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {
    services: PropTypes.object
} 

export default Services;