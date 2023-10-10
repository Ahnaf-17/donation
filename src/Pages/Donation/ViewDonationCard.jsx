/* eslint-disable react/prop-types */

const ViewDonationCard = ({card}) => {
    const {  img, category_name, title, amount, text_color ,bg_color,btn_color} = card || {};
    return (
        <div>
            <div className="card card-side border lg:m-0 m-2 md:m-5" style={{backgroundColor:bg_color}}>
                <figure><img className="h-full" src={img} alt="Movie" /></figure>
                <div className="card-body">
                <button className="flex justify-center items-center w-20 rounded-[4px]" style={{color:text_color , backgroundColor:btn_color}}>{category_name}</button>                    
                <h2 className="card-title font-bold">{title}</h2>
                    <p className="font-bold" style={{color:text_color}}>${amount}.</p>
                    <div className="card-actions">
                        <button className="btn text-white" style={{backgroundColor:text_color}}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDonationCard;