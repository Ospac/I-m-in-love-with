import { columnSizeType } from "../type"

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
interface CoverArtProps{
    col : number,
    path: string
}
export default function CoverArt({col, path} : CoverArtProps){
    if(path === "") return <div className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center shadow-sm hover:opacity-60 bg-white bg-opacity-10`}></div>
    else return <div style={{backgroundImage: `url(${path})`}} className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center hover:opacity-60`}></div>
}