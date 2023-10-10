/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { json } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';


const CategoryCards = ({ category }) => {

    // const {id,img,category_name,title,bg_color,text_color,btn_color} = category;
    const { id, img, category_name, title, amount, details, text_color } = category || {};

    const handleDonation = () => {
        // console.log("tip porse");
        const showDonatedList = [];
        const donatedItem = JSON.parse(localStorage.getItem('donated'));

        if (!donatedItem) {
            showDonatedList.push(category);
            localStorage.setItem('donated', JSON.stringify(showDonatedList));
            swal("Good job!", "Donation successful", "success");


        }
        else {

            const isAdded = donatedItem.find(category => category.id == id)
            if (!isAdded) {
                showDonatedList.push(...donatedItem, category);
                localStorage.setItem('donated', JSON.stringify(showDonatedList));
                swal("Good job!", "Donation successful", "success");

            } else {
                swal("Error", "Already donated", "error");
            }


        }



    }



    return (
        <div className='max-w-6xl mt-10 mx-auto'>
            <div className="hero p-4">
                <div className="w-full text-center flex flex-col">
                    <figure className='relative  w-full rounded-2xl"'>
                        <img className='w-full lg:h-[600px] relative' src={img} alt="" />
                        <div className="absolute bottom-0 left-0 bg-black w-full bg-opacity-50 rounded-b-2xl ">
                            <button onClick={handleDonation} className="btn border-none m-5 lg:flex items-center justify-start" style={{ backgroundColor: text_color, color: 'white' }} >Donate ${amount}</button>
                            {/* <ToastContainer></ToastContainer> */}
                        </div>
                    </figure>
                    <div className="text-left mt-5">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="py-6">{details}.</p>
                    </div>
                </div>
            </div> 
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default CategoryCards;
