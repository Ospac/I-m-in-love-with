import { SetterOrUpdater, useRecoilState } from "recoil";
import { albumType, grabType } from "../type";
import { albumsState, albumGrabState } from "../atoms"
export default function useDnd(){
    const [list, setList] = useRecoilState(albumsState);
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
            setList(prev => {
                const _list = [...prev];
                _list[targetPos] = {
                    ...(grab.album)
                };
                return _list;
            })
            return;
        }
          //drop target이 topster가 아닌경우, 삭제
        if(Number.isNaN(targetPos) || targetPos === -1){
            setList(prev => {
                const _list = [...prev];
                _list[grab.pos] = {
                    name: "",
                    artist: "",
                    image : []
                } 
                return _list
            })
            return;
        }
        if(list[targetPos]){
            setList(prev => {
                const _list = [...prev];
                const tempList = {..._list[grab.pos]};
                _list[grab.pos] = {..._list[targetPos]};
                _list[targetPos] = { ...tempList };
                return _list;
            })
        }
    }
    return { onDragOver, onDragStart, onDragEnd, onDrop }
}