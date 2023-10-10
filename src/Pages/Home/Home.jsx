import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {

    const categories = useLoaderData();
    // console.log(categories);
    const [selectItem, setSelectItem] = useState(categories);
    // console.log(selectItem);
    const handleSearch = (text) =>{
        const newItem = categories.filter((category)=> category.category_name.toLowerCase().includes(text.toLowerCase()));
        setSelectItem(newItem);
    }

    return (
        <div >
            <Banner handleSearch={handleSearch}></Banner>
            <div className="max-w-6xl mx-auto">
            <Categories categories={selectItem}></Categories>
            </div>
        </div>
    );
};

export default Home;