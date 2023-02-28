import { albumType, ISize } from "../type"
import useDnd from "../hooks/useDnd"
import { useRecoilState } from "recoil"
import { clickedAlbumState } from "../atoms"
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
export interface CoverArtProps{
    col : number,
    album: albumType,
    index: number
}
export default function CoverArt({col, album, index} : CoverArtProps){
    const {onDragOver, onDragStart, onDragEnd, onDrop} = useDnd();
    const [clickedAlbum, setClickedAlbum] = useRecoilState(clickedAlbumState);
    const onClick = () => {
        setClickedAlbum(album);
    }
    if(album.image[2] === undefined) return <div 
        onDragOver={onDragOver}
        onDragStart={(e)=>onDragStart(e, album)}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        data-pos={index}
        className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center shadow-sm hover:opacity-60 bg-white bg-opacity-10`}/>
    else return <div draggable
        onDragOver={onDragOver}
        onDragStart={(e)=>onDragStart(e, album)}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onClick={onClick}
        data-pos={index}
        style={{backgroundImage: `url(${album?.image[2]["#text"]}`}} 
        className={`${columnsWidth[col]} ${columnsHeight[col]} rounded-lg bg-cover bg-center hover:opacity-60`}/>
}