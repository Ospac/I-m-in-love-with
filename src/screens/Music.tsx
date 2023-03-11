import { useEffect, useState } from "react"
import AlbumInfo from "../components/AlbumInfo";
import Topster from "../components/Topster";
import { BsMusicPlayerFill} from "react-icons/bs";
import { HiPlus, HiMinus, HiMagnifyingGlass } from "react-icons/hi2";
import { RxComponent2 } from "react-icons/rx";
import CoverFlow from "../components/CoverFlow";
import SearchAlbum from "../components/SearchAlbum";
import useDnd from "../hooks/useDnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { musicSettingState } from "../atoms";
export default function Music(){
    const { onDrop, onDragEnd, onDragOver } = useDnd();
    const [musicSetting, setMusicSetting] = useRecoilState(musicSettingState);
    const setTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
        setMusicSetting(prev => ({
            ...prev,
            title : e.target.value
        }))
    }
    const toggleTopsterMode = () => {
        setMusicSetting(prev => ({
            ...prev,
            isTopsterMode : !prev.isTopsterMode
        }))
    }
    const toggleSearchMode = () => {
        setMusicSetting(prev => ({
            ...prev,
            isSearchMode : !prev.isSearchMode,
        }))
    }
    const sizeUp = () => {
        if(musicSetting.size < 8) {
            setMusicSetting(prev => ({
                ...prev,
                size : prev.size + 1
            }))
        }
    }
    const sizeDown = () => {
        if(musicSetting.size > 2) {
            setMusicSetting(prev => ({
                ...prev,
                size : prev.size - 1
            }))
        }
    }
    return <>
        <Container onDrop={onDrop} onDragEnd={onDragEnd} onDragOver={onDragOver}>
            <Content>
                <Input placeholder="title" onChange={setTitle} value={musicSetting.title}/>
                <Buttons>
                    {musicSetting.isTopsterMode? 
                    <Button onClick={toggleTopsterMode}><BsMusicPlayerFill/></Button>
                    :<Button onClick={toggleTopsterMode}><RxComponent2/></Button>}
                    {musicSetting.isTopsterMode && <Button onClick={sizeUp}><HiPlus/></Button>}
                    {musicSetting.isTopsterMode && <Button onClick={sizeDown}><HiMinus/></Button>}
                    <Button onClick={toggleSearchMode}><HiMagnifyingGlass/></Button>
                </Buttons>
            </Content>
            <Info>
                {musicSetting.isTopsterMode? <Topster size={musicSetting.size}/> : <CoverFlow/>}
                {musicSetting.isSearchMode? <SearchAlbum/>:<AlbumInfo/>}
            </Info>
        </Container>
    </>
}
const Container = styled.div`
    min-height: 100vh;
    padding-left: 8.5rem;
    padding-right: 8.5rem;
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem/* 16px */;
    width: 600px;
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    /* margin-bottom: 1rem; */
`;
const Button = styled.button`
    background-color: rgb(255,255,255, 0.1);
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 1.5rem/* 24px */;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    &:hover{
        background-color: rgb(255,255,255, 0.6);
        -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
`;
export const Input = styled.input`
    background-color: rgb(255,255,255, 0.1);
    width: 14rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 1.5rem/* 24px */;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    &::placeholder{
        color: rgb(63,63, 70, 0.6);
    }
    &:hover{
        background-color: rgb(255,255,255, 0.6);
        -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
    &:focus{
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
`;