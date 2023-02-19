import { useState } from "react"
import AlbumInfo from "../components/AlbumInfo";
import Topster from "../components/Topster";
import { BsMusicPlayerFill} from "react-icons/bs";
import { HiPlus, HiMinus, HiMagnifyingGlass } from "react-icons/hi2";
import { RxComponent2 } from "react-icons/rx";
import CoverFlow from "../components/CoverFlow";
export default function Music(){
    const [size, setSize] = useState(5);
    const [topsterMode, setTopsterMode] = useState(true);
    const toggleMode = () => {
        setTopsterMode(prev => !prev);
    }
    const sizeUp = () => {
        if(size < 8) setSize(prev => prev + 1);
    }
    const sizeDown = () => {
        if(size > 2) setSize(prev => prev - 1);
    }
    return <>
        <div className="min-h-screen px-52">
            <div className="flex flex-row gap-4 pb-4">
                {
                    topsterMode? 
                    <button onClick={toggleMode} className="btn-primary"><BsMusicPlayerFill/></button>
                    :<button onClick={toggleMode} className="btn-primary"><RxComponent2/></button>
                }
                {topsterMode && <button onClick={sizeUp} className="btn-primary"><HiPlus/></button>}
                {topsterMode && <button onClick={sizeDown} className="btn-primary"><HiMinus/></button>}
                <button className="btn-primary"><HiMagnifyingGlass/></button>

            </div>
            <div className=" flex flex-row justify-between">
                {topsterMode? <Topster size={size}/> : <CoverFlow/>}
                <AlbumInfo/>
            </div>
        </div>
    </>
}
 