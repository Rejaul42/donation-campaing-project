// import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import DonationCard from "../../Components/DonationCard/DonationCard";
import { useEffect, useState } from "react";


const Home = () => {
    // const donations = useLoaderData();
    const [donations, setDonations] = useState([]);

    useEffect(()=>{
        fetch('item.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
                    {
                        donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;