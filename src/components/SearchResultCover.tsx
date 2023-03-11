import { useState } from "react";
import styled from "styled-components";
import useDnd from "../hooks/useDnd";
import { albumType } from "../type";
export interface  SearchResultCoverProps{
    album: albumType,
}
export default function SearchResultCover({album} : SearchResultCoverProps){
    const {onDragOver, onDragStart, onDragEnd, onDrop} = useDnd();  
    const [isHovering, setIsHovering] = useState(false);
    return isHovering? 
    <FlippedBoxContainer>
        <FlippedBox
             draggable
             onDragOver={onDragOver}
             onDragStart={(e)=> onDragStart(e, album)}
             onDragEnd={onDragEnd}
             onDrop={onDrop}
             data-pos="-1"
             onMouseOut={() => setIsHovering(false)}
             onClick={() => setIsHovering(false)}
             path={album?.image[2]["#text"]}
        />
        <Info>
            <span style={{fontWeight: 700}}>{album.name}</span>
            <span>{album.artist}</span>
        </Info>  
    </FlippedBoxContainer> : 
    <Box
        draggable
        onDragOver={onDragOver}
        onDragStart={(e)=> onDragStart(e, album)}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onClick={() => setIsHovering(true)}
        path={album?.image[2]["#text"]}
        data-pos="-1"
    />
}

const Box = styled.div<{path : string}>`
    width: 105px;
    height: 105px;
    border-radius: 0.5rem/* 8px */;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.path});
    &:hover{
        opacity: 0.6;
    }
`
const FlippedBoxContainer = styled.div`
    width: 105px;
    height: 105px;
`
const FlippedBox = styled(Box)`
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(4, 4, 4, 0)), url(${props => props.path});
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    filter: blur(3px);
    -webkit-filter: blur(5px);
`
const Info = styled.div`
    position: relative;
    bottom: 105px;
    padding: 0.5rem/* 8px */;
    display: flex;
    flex-direction: column;
    z-index: 10;
    word-break: break-all;
    font-size: 0.65rem/* 10.4px */;
`