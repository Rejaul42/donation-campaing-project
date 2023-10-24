import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonationCard = ({ donation }) => {

    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_and_button_bg } = donation;
    return (
        <Link to={`/donation-details/${id}`}>
            <div style={{ color: Text_and_button_bg }}>
                <div className="card w-full md:w-80 lg:w-72" style={{ backgroundColor: Card_bg }}>
                    <figure><img src={Picture} /></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title my-4 rounded w-1/3 py-2 text-center" style={{ backgroundColor: Category_bg }}>{Category}</h2>
                        <p className=" text-xl font-semibold">{Title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
DonationCard.propTypes = {
    donation: PropTypes.object
}
export default DonationCard;