import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(){
    return <Nav>
            <Title><Link to='/'>I'm in love with this.</Link></Title>
            <Wrapper>
                <Items>
                    <li><Link to='music'>music</Link></li>
                    <li><Link to='movie'>movie</Link></li>
                    <li><Link to='book'>book</Link></li>
                </Items>
            </Wrapper>
         </Nav>
}
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 13rem/* 208px */;
    font-size: 0.75rem/* 12px */;
    line-height: 1rem/* 16px */;
    padding-left: 10rem;
    padding-right: 10rem;
    color: rgb(17, 24, 39);
    background-color: transparent;
`
const Title = styled.div`
    font-weight: 100;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
`
const Items = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem/* 16px */;
    font-weight: 200;
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 3.5rem/* 56px */;
    padding-right: 3.5rem/* 56px */;
    gap: 0.75rem/* 12px */;
`