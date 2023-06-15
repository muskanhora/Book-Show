import  parse  from "html-react-parser";
import { Link } from "react-router-dom";

const ShowCard=({image,name,type,language,rating,genres,runtime,summary,id})=>{
    let imageSrc=image?.original;
    return(
        <div className="m-2 p-5 shadow-xl flex">
        <img className="p-2 h-64" src={imageSrc}/>
        <div className="flex flex-col justify-evenly p-2">
        <h2 className="font-bold text-2xl"> {name}</h2>
        <span className="flex font-bold"> <h3 className="font-semibold text-base "> Type: {type}</h3> 
        <h3 className="font-semibold text-base pl-5"> Language: {language}</h3>
        <h3 className="font-semibold text-base pl-5"> Run Time: {runtime} minutes</h3>
        <h3 className="font-semibold text-base pl-5">⭐ {rating.average?rating.average:"-"}</h3>
        </span>
        <h3 className="font-semibold text-base">Genre: {genres.join(" | ")}</h3>
        <p className="font-semibold p-1">{parse(summary)}</p>
        {
        <Link to={"/showInfo/"+id}>
        <button className="border bg-slate-300 w-32 p-1 m-2 rounded-xl" >More Info</button>
        </Link>
        }
        </div>
        </div>
    )
}
export default ShowCard;