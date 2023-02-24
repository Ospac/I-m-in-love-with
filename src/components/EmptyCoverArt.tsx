import { albumType, columnSizeType } from "../type"

const columnsWidth : columnSizeType = {
    2: "w-[262px]",
    3: "w-[175px]",
    4: "w-[131px]",
    5: "w-[105px]",
    6: "w-[87px]",
    7: "w-[75px]",
    8: "w-[65px]"
}
const columnsHeight : columnSizeType = {
    2: "h-[262px]",
    3: "h-[175px]",
    4: "h-[131px]",
    5: "h-[105px]",
    6: "h-[87px]",
    7: "h-[75px]",
    8: "h-[65px]"
}
interface IEmptyCoverArt{
    col: number
}
export default function EmptyCoverArt({col} : IEmptyCoverArt){
    return <div className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center shadow-sm hover:opacity-60 bg-white bg-opacity-10`}/>
}