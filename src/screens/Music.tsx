import { useState } from "react"
import CoverArt from "../components/CoverArt";
import { columnSizeType } from "../type";
import { range } from "../util";

const columnsWidth : columnSizeType = {
    2: "w-1/2",
    3: "w-1/3",
    4: "w-1/4",
    5: "w-1/5",
    6: "w-1/6",
    7: "w-1/7",
    8: "w-1/8"
}

const columnsHeight : columnSizeType = {
    2: "h-1/2",
    3: "h-1/3",
    4: "h-1/4",
    5: "h-1/5",
    6: "h-1/6",
    7: "h-1/7",
    8: "h-1/8"
}

export default function Music(){
    const [size, setSize] = useState(8);
    const [isHover, setHover] = useState(false);
    const sizeUp = () => {
        if(size < 8) setSize(prev => prev + 1);
    }
    const sizeDown = () => {
        if(size > 2) setSize(prev => prev - 1);
    }
    return <div className="h-[630px] flex flex-row m-28 justify-center">
        <div className="w-[600px] flex flex-col gap-1">
            {range(size).map((rowNum) => <div key={rowNum} className={`${columnsHeight[size]} w-full flex flex-row gap-1`}>
                    {range(size).map((colNum) => <CoverArt
                         
                        path={"https://e.snmc.io/i/1200/s/041458abc70133ca5dbfffae1b4446c2/3874272"}
                        key={colNum}
                        col={size}/>
                    )}
                </div>    
            )}
            <div>
                <button onClick={sizeUp}className="text-lg">+</button>
                <button onClick={sizeDown}className="text-lg">-</button>
            </div>
        </div>
        <div className="w-[400px]">
            <div className="mx-auto h-28">
                
            </div>
        </div>
    </div>
}
 