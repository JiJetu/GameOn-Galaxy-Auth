import PropTypes from "prop-types"
import moment from 'moment';

const SingleDetails = ({ singleDetail }) => {
    const { image, name, game, date, longDescription, price } = singleDetail;
    console.log(singleDetail);


    return (
        <div className="container mx-auto md:flex gap-5 h-screen">
            <div className="w-4/5 h-3/4">
                <img className="h-full w-full" src={image} alt="" />
                <div>
                    <h2 className="text-2xl font-semibold text-yellow-400">{game}</h2>
                    <p className="text-gray-400">{longDescription}</p>
                </div>
            </div>
            <div className="md:mt-36">
                <div className="text-center space-y-6">
                    <h2 className="text-2xl font-semibold text-yellow-400">{name}</h2>
                    <p className="text-lg"><span className="font-semibold">Going On:</span>  {moment().format("YYYY-M-DD")} to {date}</p>
                    <p className="text-base">Participate with in : <span className="text-lg font-semibold text-yellow-500">$ {price}</span></p>
                    <button className="btn bg-gray-300 text-black hover:bg-neutral hover:text-white rounded-r-lg">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

SingleDetails.propTypes = {
    singleDetail: PropTypes.object
}

export default SingleDetails;