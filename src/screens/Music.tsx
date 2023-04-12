import AlbumInfo from "../components/AlbumInfo";
import Topster from "../components/Topster";
import { HiPlus, HiMinus, HiMagnifyingGlass } from "react-icons/hi2";
import {VscLibrary } from "react-icons/vsc";
import { RxComponent2 } from "react-icons/rx";
import SearchAlbum from "../components/SearchAlbum";
import useDnd from "../hooks/useDnd";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { musicSettingState, topsterListState } from "../atoms";
import TopsterList from "../components/TopsterLIst";
export default function Music(){
    const { onDrop, onDragEnd, onDragOver } = useDnd();
    const [musicSetting, setMusicSetting] = useRecoilState(musicSettingState);
    const [topsterList, setTopsterList] = useRecoilState(topsterListState);
    const setTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTopsterList(prev => {
            const _list = [...prev];
            prev.forEach((item, i) => { 
                _list[i] = {...item}
                _list[i].content = [...item.content]
            })
            _list[musicSetting.topsterId].title = e.currentTarget.value;
            return _list;
        })
    }
    const toggleListMode = () => {
        setMusicSetting(prev => ({
            ...prev,
            isTopsterMode : !prev.isTopsterMode,
            isListMode: !prev.isListMode,
        }))
    }
    const toggleTopsterMode = () => {
        setMusicSetting(prev => ({
            ...prev,
            isTopsterMode : !prev.isTopsterMode,
            isListMode : !prev.isListMode,
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
                {   
                    musicSetting.isTopsterMode? 
                    <Input placeholder="title" onChange={setTitle} value={topsterList[musicSetting.topsterId].title}/>
                    :
                    <div>Your List</div>
                }
                <Buttons>
                    <Button onClick={toggleListMode}><VscLibrary/></Button>
                    <Button><RxComponent2/></Button>
                    {musicSetting.isTopsterMode && <Button onClick={sizeUp}><HiPlus/></Button>}
                    {musicSetting.isTopsterMode && <Button onClick={sizeDown}><HiMinus/></Button>}
                    <Button onClick={toggleSearchMode}><HiMagnifyingGlass/></Button>
                </Buttons>
            </Content>
            <Info>
                {musicSetting.isTopsterMode && <Topster size={musicSetting.size} index={musicSetting.topsterId}/>}
                {musicSetting.isListMode && <TopsterList/>}
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