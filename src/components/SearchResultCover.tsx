import { useState } from "react";
import useDnd from "../hooks/useDnd";
import { albumType } from "../type";
export interface  SearchResultCoverProps{
    album: albumType,
}
export default function SearchResultCover({album} : SearchResultCoverProps){
    const {onDragOver, onDragStart, onDragEnd, onDrop} = useDnd();  
    const [isHovering, setIsHovering] = useState(false);
    return isHovering? <div className="w-[105px] h-[105px]">
        <div
        draggable
        onDragOver={onDragOver}
        onDragStart={(e)=> onDragStart(e, album)}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        data-pos="-1"
        className="rounded-lg bg-cover bg-center blur-sm h-full transition-all"
        style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(4, 4, 4, 0)), url(${album?.image[2]["#text"]}`}}
        onMouseOut={() => setIsHovering(false)}
        onClick={() => setIsHovering(false)}
        >
        </div>
        <div className="relative flex flex-col z-10 bottom-[105px] p-2 break-all">
            <span className="text-[0.65rem] font-bold">{album.name}</span>
            <span className="text-[0.65rem]">{album.artist}</span>
        </div>  
    </div> :
    <div draggable
        onDragOver={onDragOver}
        onDragStart={(e)=> onDragStart(e, album)}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onClick={() => setIsHovering(true)}
        data-pos="-1"
        style={{backgroundImage: `url(${album?.image[2]["#text"]}`}} 
        className="w-[105px] h-[105px] rounded-lg bg-cover bg-center hover:opacity-60"/>
}