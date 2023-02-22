import { useState } from "react";
import { columnSizeType } from "../type";
import { range } from "../util";
import CoverArt from "./CoverArt";
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
    size : number
}
export default function Topster({size} : TopsterProps){
    return <>
        <div className="w-[525px] h-[525px] flex flex-col gap-1 ">
            {range(size).map((rowNum) => <div key={rowNum} className={`${columnsHeight[size]} w-full flex flex-row gap-1`}>
                    {range(size).map((colNum) => <CoverArt
                        path={""}
                        key={colNum}
                        col={size}/>
                    )}
                </div>    
            )}
        </div>
    </>
}