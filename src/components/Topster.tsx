import { useRecoilState } from "recoil";
import { albumsState } from "../atoms";
import { ISize } from "../type";
import CoverArt from "./CoverArt";
import EmptyCoverArt from "./EmptyCoverArt";

interface TopsterProps{
    size : number
}
export default function Topster({size} : TopsterProps){
    const [list, setList] = useRecoilState(albumsState);
    return <>
        <div className={`w-[550px] h-[530px] flex flex-row flex-wrap gap-1`}>
            {
                list.map((album, index) => 
                    {   if(index >= size * size) return null; //size를 변경했을때, list를 보존하면서 표시하는 album 갯수만 변경
                        return <CoverArt album={album} key={index} col={size} index={index}/>
                    }
                )
            }
        </div>
    </>
}