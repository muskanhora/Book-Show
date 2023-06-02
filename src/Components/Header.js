import { BiTv } from "react-icons/bi";

const Header=()=>{
    return(
        <>
        <nav className="bg-black text-white flex justify-between m-1 p-2 ">
            <BiTv size="3rem"/>
            <ul className="flex">
                <li className="m-1 p-2 font-bold">Home</li>
                <li className="m-1 p-2 font-bold">Shows</li>
            </ul>
        </nav>
        </>
    )
}
export default Header;