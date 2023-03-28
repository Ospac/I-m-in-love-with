import { useRecoilState, useRecoilValue } from "recoil";
import { albumType} from "../type";
import { albumGrabState, musicSettingState, topsterListState } from "../atoms"
export default function useDnd(){
    const musicSetting = useRecoilValue(musicSettingState);
    const [topsterList, setTopsterList] = useRecoilState(topsterListState);
    const [grab, setGrab] = useRecoilState(albumGrabState);
    const onDragOver = (e : React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const onDragStart = (e : React.DragEvent<HTMLDivElement>, album : albumType) => {
        if(!(e.target instanceof HTMLDivElement)) return; 
        if(e.target.dataset?.pos === undefined) return;
        setGrab({pos: Number(e.target.dataset.pos), album : album});
        // e.target.classList.add("grabbing");
        e.dataTransfer.effectAllowed = "move";
    }
    
    const onDragEnd = (e : React.DragEvent<HTMLDivElement>) => {
        // e.target.classList.remove("grabbing");
        e.dataTransfer.dropEffect = "move";
    }
    
    const onDrop = (e : React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        //event.target이 document, element, window이 될수 있기에 early return
        if(!(e.target instanceof HTMLDivElement)) return; 
        const targetPos   = Number(e.target.dataset.pos);
        //grab 요소가 searchResultCover 일때
        if(!Number.isNaN(targetPos) && grab.pos === -1){
            setTopsterList(prev => {
                //3-Level 불변성 유지
                const _list = [...prev];
                prev.forEach((item, i) => { 
                    _list[i] = {...item}
                    _list[i].content = [...item.content]
                })
                _list[musicSetting.topsterId].content[targetPos] = {
                    ...(grab.album)
                };
                
                return _list;
            })
            return;
        }
          //drop target이 topster가 아닌경우, 삭제
        if(Number.isNaN(targetPos) || targetPos === -1){
            setTopsterList(prev => {
                //3-Level 불변성 유지
                const _list = [...prev];
                prev.forEach((item, i) => { 
                    _list[i] = {...item}
                    _list[i].content = [...item.content]
                })
                _list[musicSetting.topsterId].content[grab.pos] = {
                    name: "",
                    artist: "",
                    image: []
                };
                return _list;
            })
            return;
        }
        // target 교환
        if(topsterList[musicSetting.topsterId].content[targetPos]){
            setTopsterList(prev => {
                //3-Level 불변성 유지
                const _list = [...prev];
                prev.forEach((item, i) => { 
                    _list[i] = {...item}
                    _list[i].content = [...item.content]
                })
                const tempList = {..._list[musicSetting.topsterId].content[grab.pos]};
                _list[musicSetting.topsterId].content[grab.pos] = {..._list[musicSetting.topsterId].content[targetPos]};
                _list[musicSetting.topsterId].content[targetPos] = { ...tempList };
                return _list;
            })
        }
    }
    return { onDragOver, onDragStart, onDragEnd, onDrop }
}