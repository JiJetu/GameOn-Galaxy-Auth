import PropTypes from "prop-types"
import moment from 'moment';

const SingleDetails = ({ singleDetail }) => {
    const { image, name, game, date, longDescription, price } = singleDetail;
    console.log(singleDetail);


    return (
        <div className="container mx-auto flex gap-5 h-screen">
            <div className="w-4/5 h-3/4">
                <img className="h-full w-full" src={image} alt="" />
                <div>
                    <h2 className="text-2xl font-semibold text-yellow-400">{game}</h2>
                    <p className="text-gray-400">{longDescription}</p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-yellow-400">{name}</h2>
                <p className="text-base flex justify-end">Enroal: {moment().format("YYYY-M-DD")} to {date}</p>
            </div>
        </div>
    );
};

SingleDetails.propTypes = {
    singleDetail: PropTypes.object
}

export default SingleDetails;