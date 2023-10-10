/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Category = ({category}) => {

    const {id,img,category_name,title,bg_color,text_color,btn_color} = category;

    return (
        <div>
            <Link to={`/cards/${id}`}>
            <div className="card rounded-[8px] lg:m-0 m-3 md:m-3 bg-base-100 border">
                <figure><img className="w-full rounded-none" src={img} alt="Shoes" /></figure>
                <div style={{backgroundColor:bg_color}} className=" ">
                    <button className="mt-3 ml-4 px-2 py-1 rounded-[4px]" style={{color:text_color , backgroundColor:btn_color}}>{category_name}</button>
                    <p style={{color:text_color}} className="font-bold mt-3 ml-4 mb-5" >{title}</p>
                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Category;