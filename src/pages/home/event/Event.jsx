import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from './googleAPIKEY';
import { FaMapMarkerAlt } from 'react-icons/fa';


const AnyReactComponent = ({ text }) => <div style={{color: "red"}}><FaMapMarkerAlt className='text-2xl'></FaMapMarkerAlt></div>;

const Event = () => {
    const defaultProps = {
        center: {
            lat: 23.8041,
            lng: 90.4152
        },
        zoom: 14
    };

    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-4 md:my-9">Our <span className="text-yellow-400">Next Event</span> On</h2>
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleAPIKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Event;