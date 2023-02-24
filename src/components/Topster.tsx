import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { albumType, columnSizeType } from "../type";
import { range } from "../util";
import CoverArt from "./CoverArt";
import EmptyCoverArt from "./EmptyCoverArt";
const columnsHeight : columnSizeType = {
    2: "h-1/2",
    3: "h-1/3",
    4: "h-1/4",
    5: "h-1/5",
    6: "h-1/6",
    7: "h-1/7",
    8: "h-1/8"
}
interface TopsterProps{
    albums: albumType[];
    size : number;
}
export default function Topster({albums, size} : TopsterProps){
    return <>
        <div className="w-[525px] h-[525px] flex flex-col gap-1 ">
            {range(size).map((rowNum, key) => <div key={key} className={`${columnsHeight[size]} w-full flex flex-row gap-1`}>
                    {range(size).map((colNum, key) =>  <Droppable droppableId={String(rowNum*size+colNum)} key={rowNum*size+colNum}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                        {
                            albums[rowNum*size+colNum]? 
                            <CoverArt
                                key={rowNum*size+colNum}
                                album={albums[rowNum*size+colNum]}
                                index={rowNum*size+colNum}
                                col={size}/>
                                :
                            <EmptyCoverArt col={size}/>
                        }
                        {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                    )}
                </div>    
            )}
        </div>
    </>
}