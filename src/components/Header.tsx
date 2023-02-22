import { Link } from "react-router-dom";

export default function Header(){
    return <nav className="flex-row-between top-0 w-full h-52 text-xs px-52 text-gray-900 bg-transparent">
            <div className="flex-row-between gap-3">
                <ul className="flex flex-row justify-between gap-4 items-center">
                    <li className="flex-col-center font-thin text-2xl"><Link to='/'>I'm in love with this.</Link></li>
                </ul>
            </div>
            <div className="flex-row-between px-14 gap-3">
                <ul className="flex flex-row justify-between gap-4 items-center font-extralight text-xl">
                    <li className="flex-col-center"><Link to='music'>music</Link></li>
                    <li className="flex-col-center"><Link to='movie'>movie</Link></li>
                    <li className="flex-col-center"><Link to='book'>book</Link></li>
                </ul>
            </div>
         </nav>

}