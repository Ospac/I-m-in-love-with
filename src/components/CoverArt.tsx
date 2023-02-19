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
interface CoverArtProps{
    col : number,
    path: string
}
export default function CoverArt({col, path} : CoverArtProps){
    return <div style={{backgroundImage: `url(${path})`}} className={`${columnsWidth[col]} h-full rounded-lg bg-cover bg-center hover:opacity-60`}></div>
}