/* eslint-disable react/prop-types */

import Category from "./Category";

const Categories = ({categories}) => {

    //  console.log(categories)
    return (
        <div className="">
            
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                {
                    categories.map(category => <Category key={category.id} category={category} ></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;