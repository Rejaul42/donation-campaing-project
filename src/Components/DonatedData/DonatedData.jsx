import PropTypes from 'prop-types';
const DonatedData = ({ item }) => {
    const { Picture, Title, Category, Category_bg, Card_bg, Text_and_button_bg, Price } = item;
    return (
        <div>
            <div className="" style={{ backgroundColor: Card_bg }}>
                <div className="flex gap-4">
                    <img src={Picture} className=" rounded-lg" />
                    <div>
                        <div className="card-body" style={{color: Text_and_button_bg}}>
                            <p className='my-2 w-2/5 rounded py-1 text-center' style={{ backgroundColor: Category_bg }}>{Category}</p>
                        </div>
                        <h1 className="text-2xl font-bold">{Title}</h1>
                        <p className="my-2 font-semibold" style={{ color: Text_and_button_bg }}>${Price}</p>
                        <button className=" py-2 px-4 rounded-md text-white" style={{ backgroundColor: Text_and_button_bg }}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
DonatedData.propTypes = {
    item: PropTypes.object
}
export default DonatedData;