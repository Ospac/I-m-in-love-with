import { columnSizeType } from "../type"

const columnsWidth : columnSizeType = {
    2: "w-1/2",
    3: "w-1/3",
    4: "w-1/4",
    5: "w-1/5",
    6: "w-1/6",
    7: "w-1/7",
    8: "w-1/8"
}
interface CoverArtProps{
    col : number,
    path: string
}
export default function CoverArt({col, path} : CoverArtProps){
    return <div style={{backgroundImage: `url(${path})`}} className={`${columnsWidth[col]} h-full bg-slate-600 rounded-lg bg-cover bg-center`}></div>
}