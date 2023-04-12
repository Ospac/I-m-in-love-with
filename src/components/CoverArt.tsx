import { albumType, ISize } from "../type"
import useDnd from "../hooks/useDnd"
import { useRecoilState } from "recoil"
import { clickedAlbumState, musicSettingState } from "../atoms"
import styled from "styled-components"
export interface CoverArtProps{
    col : number,
    album: albumType,
    index: number,
}
export default function CoverArt({col, album, index} : CoverArtProps){
    const {onDragOver, onDragStart, onDragEnd, onDrop} = useDnd();
    const [clickedAlbum, setClickedAlbum] = useRecoilState(clickedAlbumState);
    const [musicSetting, setMusicSetting] = useRecoilState(musicSettingState);
    const onClick = () => {
        setClickedAlbum(album);
        setMusicSetting(prev => ({
            ...prev,
            isSearchMode: false
        }))
    }
    if(album.image[2] === undefined) 
    return <EmptyBox
        onDragOver={onDragOver}
        onDragStart={(e)=>onDragStart(e, album)}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onClick={onClick}
        data-pos={index}
        col ={col}
        containerSize={600}
        path={""} 
    />
    else return <Box
        draggable
        onDragOver={onDragOver}
        onDragStart={(e)=>onDragStart(e, album)}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onClick={onClick}
        data-pos={index}
        col ={col}
        containerSize={600}
        path={album?.image[2]["#text"]} 
    />
}
interface BoxProps{
    containerSize : number,
    col : number,
    path : string
}

export const Box = styled.div<BoxProps>`
    border-radius: 0.5rem;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem/* 8px */;
    width: ${(props) => props.containerSize / props.col + "px"};
    height: ${(props) => props.containerSize / props.col + "px"};
    background-image: url(${props => props.path});
    &:hover{
        opacity: 0.6;
    }
`
const EmptyBox = styled(Box)`
    background-color: rgb(255,255, 255, 0.1);
`