import { Link } from "react-router-dom";

export default function Header(){
    return <nav className="flex flex-row justify-between items-center fixed top-0 w-full h-12 text-xs text-stone-700 bg-red-700">
            <div className="flex flex-row justify-between items-center px-14 gap-3">
                <ul className="flex flex-row justify-between gap-4 items-center">
                    <li className="relative flex flex-col justify-center font-bold text-sm"><Link to='/'>Home</Link></li>
                    <li className="relative flex flex-col justify-center font-bold text-sm"><Link to='music'>Music</Link></li>
                    <li className="relative flex flex-col justify-center font-bold text-sm"><Link to='#'></Link></li>
                </ul>
            </div>
            <div className="flex flex-row justify-between items-center px-14 gap-3">
                <ul className="flex flex-row justify-between gap-4 items-center">
                    <li className="relative flex flex-col justify-center font-bold text-sm"><Link to='auth/signin'></Link></li>
                    <li className="relative flex flex-col justify-center font-bold text-sm"><Link to='auth/signup'></Link></li>
                </ul>
            </div>
         </nav>

}