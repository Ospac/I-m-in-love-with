import { useRecoilState } from "recoil";
import styled from "styled-components";
import { albumsState } from "../atoms";
import CoverArt from "./CoverArt";

interface TopsterProps{
    size : number
}
export default function Topster({size} : TopsterProps){
    const [list, setList] = useRecoilState(albumsState);
    return <>
        <Container>
            {
                list.map((album, index) => 
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