import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { topsterListState } from "../atoms";
import { BiAddToQueue } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
interface TopsterProps{
    index : number,
}
export default function TopsterInList({index} : TopsterProps){
    const list = useRecoilValue(topsterListState);
    const [hover, setHover] = useState(false);
    const hoverOn = () => setHover(true);
    const hoverOut = () => setHover(false);
    return <>
        <Container onMouseOver={hoverOn} onMouseOut={hoverOut}>
            {
                <Wrapper hover={hover}>
                    {
                        list[index]?.content?.map((album, index) => 
                        {  
                            if(index > 8) return null;
                            if(album.image[2] === undefined) return <EmptyBox path={""} key={index}/>
                            else return <Box path={album?.image[2]["#text"]} key={index} />
                        })
                    }
                </Wrapper>
            }
            {
                hover && 
                <Buttons>
                    <Button><BiAddToQueue/></Button>
                    <Button><AiFillEdit/></Button>
                    <Button><RiDeleteBin2Line/></Button>
                </Buttons>
            }
        </Container>
    </>
}
const Container = styled.div`
    width: 250px;
    height: 200px;
`
const Wrapper = styled.div<{hover : boolean}>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    opacity: ${props => props.hover? 0.4 : 1};
`
const Box = styled.div<{path: string}>`
    border-radius: 0.5rem;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem/* 8px */;
    background-image: url(${props => props.path});
    width : 80px;
    height: 80px;
`
const EmptyBox = styled(Box)`
    background-color: rgb(255,255, 255, 0.1);
`
const Button = styled.button`
    font-size: 40px;
    background-color: rgba(255, 255, 255, 0);
`
const Buttons = styled.div`
    position: relative;
    bottom: 150px;
    left: 40px;
    gap: 15px;
    display: flex;
    flex-direction: row;
`