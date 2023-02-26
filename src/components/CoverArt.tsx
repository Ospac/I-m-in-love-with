import { useState } from "react";
import { useRecoilState } from "recoil";
import { albumGrabState, albumsState } from "../atoms";
import { albumType, CoverArtProps, ISize } from "../type"

export const columnsWidth : ISize = {
    2: "w-[262px]",
    3: "w-[175px]",
    4: "w-[131px]",
    5: "w-[105px]",
    6: "w-[87px]",
    7: "w-[75px]",
    8: "w-[65px]"
}
export const columnsHeight : ISize = {
    2: "h-[262px]",
    3: "h-[175px]",
    4: "h-[131px]",
    5: "h-[105px]",
    6: "h-[87px]",
    7: "h-[75px]",
    8: "h-[65px]"
}

export default function CoverArt({col, album, index} : CoverArtProps){
    const [grab, setGrab] = useRecoilState(albumGrabState);
    const [list, setList] = useRecoilState(albumsState);
    const onDragOver = (e : React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const onDragStart = (e : React.DragEvent<HTMLDivElement>) => {
        if(!(e.target instanceof HTMLDivElement)) return; 
        if(e.target.dataset?.pos === undefined) return;
        setGrab({pos: Number(e.target.dataset.pos), album : album});
        // e.target.classList.add("grabbing");
        e.dataTransfer.effectAllowed = "move";
    }
    
    const onDragEnd = (e : React.DragEvent<HTMLDivElement>) => {
        // e.target.classList.remove("grabbing");
        e.dataTransfer.dropEffect = "move";
    }
    
    const onDrop = (e : React.DragEvent<HTMLDivElement>) => {
        //event.target이 document, element, window이 될수 있기에 early return
        if(!(e.target instanceof HTMLDivElement)) return; 
        const targetPosition   = Number(e.target.dataset.pos);
        if(grab.pos === -1){
            const newList = [...list];
            newList[targetPosition] = {
                ...(grab.album)
            };
            setList(newList);
        }else{
            const newList = [...list];
            newList[grab.pos] = {
                name: "",
                artist: "",
                image: []
            }
            newList[targetPosition] = {
                ...(grab.album)
            }
            setList(newList);
        }
        
    }
    if(album.image[2] === undefined) return <div 
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        data-pos={index}
        className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center shadow-sm hover:opacity-60 bg-white bg-opacity-10`}/>
    else return <div draggable
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        data-pos={index}
        style={{backgroundImage: `url(${album?.image[2]["#text"]}`}} 
        className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center hover:opacity-60`}/>
}