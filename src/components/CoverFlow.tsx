import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function CoverFlow(){
    // const [list, setList] = useRecoilState(albumsState);
    // const [index, setIndex] = useState(0);
    // const onLeft = () => {
    //     if(0 < index) setIndex(prev => prev - 1);
    //     setTranslate(`translateX( -"+ ( 70 * ( ${index} - i  ) ) +"% ) rotateY( "+ ROTATION +"deg )"`)
    // }
    // const onRight = () => {
    //     if(list.length  - 1 > index) setIndex(prev => prev + 1);
    //     setTranslate(`translateX( -"+ ( 70 * ( ${index} - i  ) ) +"% ) rotateY( "+ ROTATION +"deg )"`)

    // }
    // const [translate, setTranslate] = useState("");

    // return <Container>
    //         {
    //             list.map((album, key) => 
    //                 {  
    //                     if(album.name === "") return null;
    //                     return <Cover key={key} path={album?.image[2]["#text"]} trans={translate}/>
    //                 }
    //             )
    //         }
    //     <button onClick={onLeft}>left</button>
    //     <button onClick={onRight}>right</button>
    // </Container>
    return <></>
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Cover = styled.div<{path: string, trans : string}>`
    border-radius: 0.5rem/* 8px */;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.path});
    &:hover{
        opacity: 0.6;
    }
    ${props => props.translate};
`