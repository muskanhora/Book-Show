import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/Components/Header"
import Footer from "./src/Components/Footer";
import Body from "./src/Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ShowCardDetails from "./src/Components/ShowCardDetails";
import BookShow from "./src/Components/BookShow";

const Applayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
const approute=createBrowserRouter([
    {
        path:"",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/showInfo/:id",
                element:<ShowCardDetails/>
            },
            {
                path:"/bookshow",
                element:<BookShow/>
            }
        ]
    }
])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approute}/>);
