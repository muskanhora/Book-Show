import { useEffect, useState } from "react";

const BookShow=()=>{
    const [input,setInput]=useState({});

    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput((values)=>({...values,[name]: value}))
    }
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(input);
            localStorage.setItem('dataKey', JSON.stringify(input));
          }
  
  

    return(
        <>
        <form className="flex flex-col min-h-screen p-4" onSubmit={handleSubmit}>
            <label> Name:
                <input onChange={handleChange} className="border p-1 m-2 rounded" type="text" value={input.name} name="name"/>
            </label>
            <label> Age:
                <input className="border p-1 ml-5 rounded" name="age" type="text" value={input.age} onChange={handleChange}/>
            </label>
            <label className="mt-2"> Show Time: 
                <input className="p-2 m-2" onChange={handleChange} type="radio" name="showTime" value="12:30"/>12:30 pm
                <input className="p-2 m-2" onChange={handleChange} type="radio" name="showTime" value="3:15"/>3:15 pm
                <input className="p-2 m-2" onChange={handleChange} type="radio" name="showTime" value="6:00"/>6:00 pm
            </label>
            <input type="submit" className="bg-black text-white w-24 m-2 p-2 rounded-lg" value="Book"/>
        </form>
        </>
    )
}
export default BookShow;


