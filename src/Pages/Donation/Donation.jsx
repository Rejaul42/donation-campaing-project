import { useEffect, useState } from "react";
import DonatedData from "../../Components/DonatedData/DonatedData";

const Donation = () => {
    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] =useState(false);
    
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated'));
        if (donatedItems) {
            setDonated(donatedItems);
        }
        else {
            setNoFound('No data fount')
        }
    }, []);


    
    return (
        <div>
            {
                noFound ? <p className="flex text-5xl font-bold h-screen justify-center items-center">{noFound}</p> :
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                        {
                            isShow? donated.map(item => <DonatedData key={item.id} item={item}></DonatedData>)
                            : donated.slice(0,4).map(item => <DonatedData key={item.id} item={item}></DonatedData>)
                        }
                    </div>
            }
            {
                donated.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-4 py-2 bg-blue-300 rounded-lg mt-8 font-semibold block mx-auto">{isShow? 'Show Less' : 'Show More'}</button>
            }
        </div>
    );
};

export default Donation; <p>Donation pages</p>