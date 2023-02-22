import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery} from "react-query";
import { getAlbums } from "../api";
import { albumType } from "../type";
import CoverArt from "./CoverArt";
import Loading from "./Loading";

export default function SearchAlbum(){
    const {ref, inView} = useInView();
    const [searchKeyword, setSearchKeyword] = useState("");
    const {data, status, fetchNextPage, isFetchingNextPage} = useInfiniteQuery(
        ['albums', searchKeyword],
        ({pageParam = 1}) => {
            if(searchKeyword !== ""){
                return getAlbums(searchKeyword, pageParam);
                // 키워드가 없을때도 api호출이 되서 예외 처리를 해두니, data 내부가 undefined되도 status가 success인 경우가 생김
                // 실행상 오류는 이제 없으나, 추후 리팩토링이 필요해보임. 타입문제로 버그 가능성이 생김
            }
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
        <div className="flex flex-col justify-start items-center relative bottom-16 w-[340px] ">
            <input onChange={onSearchInputChange} className="btn-primary w-[325px] focus:outline-none my-2 mb-4 placeholder:text-zinc-700" placeholder="search"/>
            {data?.pages[0] && (status === "success") &&
            <div className="flex flex-row flex-wrap justify-start gap-1 bg-slate-300 bg-opacity-10 min-h-0 max-h-[550px] overflow-y-scroll">
                {
                    data?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {
                                page?.data.map((album : albumType, index : number) => {
                                    if(!album?.image[2]["#text"]) return null
                                    return <CoverArt
                                    path={album?.image[2]["#text"]}
                                    key={index}
                                    col={5}/>
                                })
                            }
                        </React.Fragment>))
                }
                {
                isFetchingNextPage? <div className="relative bottom-9 left-5 z-50"><Loading/></div> : 
                    data? <div ref={ref}></div> : <></>
                }
            </div>}
        </div>
    </>
}   