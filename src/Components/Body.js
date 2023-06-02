import React from "react";
import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const Body=()=>{
const [data,setData]=useState([]);

async function fetchData(){
    const data= await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json= await data.json();
    console.log(json);
    setData(json);
}

useEffect(()=>{
    fetchData();
},[])

    return(
        <>
        <div className="min-h-screen flex flex-wrap">
            {
                data.map((item,index)=>{
                    return(
                        <>
                              <ShowCard {...item.show} key={index}/>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default Body;