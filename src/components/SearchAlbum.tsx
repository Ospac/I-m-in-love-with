import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery} from "react-query";
import { getAlbums } from "../api";
import { albumType } from "../type";
import CoverResult from "./SearchResultCover";
import Loading from "./Loading";
import styled from "styled-components";
import { Input } from "../screens/Music";

export default function SearchAlbum(){
    const {ref, inView} = useInView();
    const [searchKeyword, setSearchKeyword] = useState("");
    const {data, status, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
        ['albums', searchKeyword],
        ({pageParam = 1}) => {
            if(searchKeyword !== "") return getAlbums(searchKeyword, pageParam);
        },
        {
            getNextPageParam: (lastPage) => {
                return !lastPage?.isLast ? lastPage?.nextPage : undefined;
            }
        }
    )
    const onSearchInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value);
    }
    useEffect(()=>{
        if(inView) fetchNextPage();
    }, [inView, fetchNextPage])
    return <>
        <Container>
            <Input style={{width: "325px"}} onChange={onSearchInputChange} placeholder="search"/>
            {data?.pages[0] && (status === "success") &&
            <Scroll>
                {
                    data?.pages.map((page, index) => (
                        page?.data.map((album : albumType, index : number) => {
                            if(!album?.image[2]["#text"]) return null
                            return <CoverResult album={album} key={index}/>
                        })))
                }
                {
                isFetchingNextPage? <Loader><Loading/></Loader> : 
                    data? <div ref={ref}></div> : <></>
                }
            </Scroll>
            }
        </Container>
    </>
}  
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    bottom: 3.2rem;
    width: 340px;
`
const Scroll = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 15px;
    gap: 0.25rem/* 4px */;
    background-color: rgb(203 213 225 / var(--bg-opacity));
    --bg-opacity: 0.1;
    min-height: 0;
    max-height: 550px;
    overflow-y: scroll;
`
const Loader = styled.div`
    position: relative;
    bottom: 2.25rem/* 36px */;
    left: 1.25rem/* 20px */;
    z-index: 50;
`