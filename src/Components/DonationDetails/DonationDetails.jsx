import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './DonationDetails.css'
import swal from "sweetalert";
// import Swal from 'sweetalert2'

const DonationDetails = () => {
    const [donation, setDonation] = useState([])
    const donations = useLoaderData();
    const { id } = useParams();
    

    useEffect(() => {
        const findDonation = donations?.find(item => item.id == id)
        setDonation(findDonation)
    }, [id, donations])
    const { Picture, Category,Text_and_button_bg, Description, Price } = donation;

    const HandleAddDonated = () =>{
        const addDonatedItem = [];
        const getDonatedItem = JSON.parse(localStorage.getItem('donated'));
        if(!getDonatedItem){
            addDonatedItem.push(donation);
            localStorage.setItem('donated', JSON.stringify(addDonatedItem))
            swal("Good job!", "You clicked the button!", "success");
        }
        else{
            addDonatedItem.push(...getDonatedItem, donation);
            localStorage.setItem('donated', JSON.stringify(addDonatedItem));
            swal("You have successfully Donated", "You clicked the button!", "success");
        }
    }
    return (
        <div className="mt-8">
            <div className="card w-full">
                <figure><img className="w-full" src={Picture} alt="Shoes" /></figure>
                <div className="-mt-20 linear">
                    <div className="w-full py-4">
                        <div className="pl-4" onClick={HandleAddDonated}>
                            <button className="text-white px-4 py-2 text-xl font-semibold rounded-md" style={{ backgroundColor: Text_and_button_bg }}>Donate ${Price}</button>
                        </div>
                    </div>

                </div>
                <div className="card-body">
                    <h2 className="card-title my-6 text-4xl font-bold">
                        {Category}
                    </h2>
                    <p>{Description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;