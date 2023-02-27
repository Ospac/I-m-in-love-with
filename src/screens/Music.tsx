import { useState } from "react"
import AlbumInfo from "../components/AlbumInfo";
import Topster from "../components/Topster";
import { BsMusicPlayerFill} from "react-icons/bs";
import { HiPlus, HiMinus, HiMagnifyingGlass } from "react-icons/hi2";
import { RxComponent2 } from "react-icons/rx";
import CoverFlow from "../components/CoverFlow";
import SearchAlbum from "../components/SearchAlbum";
import useDnd from "../hooks/useDnd";
export default function Music(){
    const { onDrop, onDragEnd, onDragOver } = useDnd();
    const [size, setSize] = useState(5);
    const [topsterMode, setTopsterMode] = useState(true);
    const [searchMode, setSearchMode] = useState(false);
    const toggleTopsterMode = () => setTopsterMode(prev => !prev);
    const toggleSearchMode = () => setSearchMode(prev => !prev);
    const sizeUp = () => {
        if(size < 8) setSize(prev => prev + 1);
    }
    const sizeDown = () => {
        if(size > 2) setSize(prev => prev - 1);
    }
    return <>
        <div className="min-h-screen px-52" onDrop={onDrop} onDragEnd={onDragEnd} onDragOver={onDragOver}>
            <div className="flex flex-row justify-between pb-4 w-[525px]">
                <input className="btn-primary w-56 focus:outline-none  placeholder:text-zinc-700" placeholder="title"></input>
                <div className="flex flex-row gap-4">
                    {topsterMode? 
                    <button onClick={toggleTopsterMode} className="btn-primary"><BsMusicPlayerFill/></button>
                    :<button onClick={toggleTopsterMode} className="btn-primary"><RxComponent2/></button>}
                    {topsterMode && <button onClick={sizeUp} className="btn-primary"><HiPlus/></button>}
                    {topsterMode && <button onClick={sizeDown} className="btn-primary"><HiMinus/></button>}
                    <button onClick={toggleSearchMode} className="btn-primary"><HiMagnifyingGlass/></button>
                </div>
            </div>
            <div className=" flex flex-row justify-between">
                {topsterMode? <Topster size={size}/> : <CoverFlow/>}
                {searchMode? <SearchAlbum/>:<AlbumInfo/>}
            </div>
        </div>
    </>
}
 