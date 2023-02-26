import { EmptyCoverArtProps } from "../type"
import { columnsHeight, columnsWidth } from "./CoverArt"

export default function EmptyCoverArt({col} : EmptyCoverArtProps){
    return <div className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center shadow-sm hover:opacity-60 bg-white bg-opacity-10`}/>
}