import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CategoryDetails from "../components/Categories/CategoryDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/info.json')
            },
            {
               path: '/donation',
               element: <Donation></Donation> 
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>,
                loader:()=> fetch('/info.json')
            },
            {
                path: '/cards/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ()=> fetch('/info.json')
            }
        ]
    }
])

export default router;