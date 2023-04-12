import { useRecoilState } from "recoil"
import styled from "styled-components"
import { topsterListState } from "../atoms"
import Topster from "./Topster"
import TopsterInList from "./TopsterInList"

export default function TopsterList(){
    const [topsterList, setTopsterList] = useRecoilState(topsterListState)
    return <Container>
        <List>
            {topsterList.map((topster, key) => <li key={topster.topsterId}>
                <TopsterInList index={key}/>
            </li>)}
        </List>
    </Container>
}
const Container = styled.div`
    display: flex;  
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    width: 650px;
    height: 600px;
`
const List = styled.ul`
    display: flex;
    flex-direction: column;

`