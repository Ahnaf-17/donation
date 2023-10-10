import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCards from "./CategoryCards";


const CategoryDetails = () => {

    const [category, setCategory] = useState();    

    const { id } = useParams();
    const categories = useLoaderData();
    // console.log(id);
    

    useEffect(() => {
        const findCategory = categories.find(category => category.id == id);
        setCategory(findCategory);
    }, [id, categories])
    console.log(categories);




    return (
        <div>
            <CategoryCards category={category}></CategoryCards>
            
        </div>
    );
};

export default CategoryDetails;