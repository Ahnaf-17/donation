import { useEffect, useState } from "react";
import ViewDonationCard from "./ViewDonationCard";

const Donation = () => {


    const [viewDonation, setViewDonation] = useState([]);

    const [seeMore, setSeeMore] = useState(4)
    const [noData, setNoData] = useState()
    useEffect(() => {
        const donatedItem = JSON.parse(localStorage.getItem('donated'));
        if (donatedItem) {
            setViewDonation(donatedItem)
        } else {
            //    swal()
            console.log("no data found");
            setNoData("You haven't donated yet")
        }

    }, [])

    return (
        <div className="mt-10 max-w-6xl mx-auto">
            {
                noData ? <p className="flex justify-center items-center mt-20 text-2xl font-semibold">You have not donated yet</p> :
                    <div>
                        <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
                            {
                                viewDonation.slice(0, seeMore).map(card => <ViewDonationCard key={card.id} card={card}></ViewDonationCard>)
                            }
                        </div>
                        {
                            viewDonation.length >4 &&
                            <div className="flex justify-center items-center mt-5">
                            <div className={seeMore === viewDonation.length && `hidden`}>
                                <button onClick={() => setSeeMore(viewDonation.length)}
                                    className="btn bg-[#009444] text-white
                                 items-center">See More</button>
                            </div>
                        </div>
                        }
                    </div>
            }
        </div>
    );
};

export default Donation;
// style={{display:"flex", justifyContent: "center", textAlign:"center", marginTop: "10px"}}