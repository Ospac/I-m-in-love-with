import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { topsterListState } from "../atoms";
import CoverArt from "./CoverArt";

interface TopsterProps{
    size : number,
    index : number
}
export default function Topster({size, index} : TopsterProps){
    const list = useRecoilValue(topsterListState);
    return <>
        <Container>
            {
                list[index]?.content?.map((album, index) => 
                    {   if(index >= size * size) return null; //size를 변경했을때, list를 보존하면서 표시하는 album 갯수만 변경
                        return <CoverArt album={album} key={index} col={size} index={index}/>
                    }
                )
            }
        </Container>
    </>
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    width: 650px;
    height: 600px;
`