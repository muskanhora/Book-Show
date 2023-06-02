import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';


const ShowCardDetails=()=>{
    const [data,setData]=useState([]);
     const {id}=useParams();

    async function fetchData(){
        const data= await fetch(`https://api.tvmaze.com/shows/${id}`);
        const json= await data.json();
        setData(json)
        console.log(json);
    }

useEffect(()=>{
    fetchData();
},[])

    return(
        <>
        <div className='p-2 m-1 flex'>
        <img className='h-96 w-96' src={data?.image?.original}/>
        <div className="p-2 ml-5 flex flex-col justify-evenly">
        <h2 className='font-semibold'>Name: {data?.name}</h2>
        <h2 className='font-semibold'>Premiered On: {data?.premiered}</h2>
        <h3 className='font-semibold'>Links: {data?._links?.self.href}</h3>
        <p className="p-1">{data?.summary}</p>
        <a className='font-semibold rounded-lg bg-slate-300 p-2 w-36' href={data?.url}>Visit Official site </a>
        <a className='font-semibold rounded-lg bg-slate-300 p-2 w-44' href={data?._links?.previousepisode.href}> Previous Episode Link</a>
        <Link to="/bookshow">
        <button  className='rounded bg-black text-white w-28 p-1'>Book show</button>
        </Link>
        </div>
        </div>
        </>
    )
}

export default ShowCardDetails;

// import { Link } from 'react-router-dom';
// import axios from 'axios';
// const Product = ({ match }) => {
//   const [data, setData] = useState([]);
// useEffect(() => {
//     fetchProduct();
// }, []);
// const fetchProduct = () => {
//     axios
//       .get(
//         `https://shoppingapiacme.herokuapp.com/shopping/?id=${match.params.id}`
//       )
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.log(err));
//   };