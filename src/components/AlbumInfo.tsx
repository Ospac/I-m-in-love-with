import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { getAlbumInfo } from "../api";
import { clickedAlbumState } from "../atoms";
import { albumInfoType } from "../type";

export default function AlbumInfo(){
    const [clickedAlbum, setClickedAlbum] = useRecoilState(clickedAlbumState);
    const {artist, name, image} = clickedAlbum;
    const {data, status} = useQuery<albumInfoType>(["albumInfo", clickedAlbum.name, clickedAlbum.artist],
        () => getAlbumInfo(name, artist),
        { enabled: !!clickedAlbum.name }
    );
    if(status === "success"){
        console.log(data)
    }
    const cover = [
        image[3]?.['#text'],
        image[2]?.['#text'],
        image[1]?.['#text'],
        image[0]?.['#text']
    ].filter(Boolean).join(',');
    return <>
         <div className="w-[400px] p-12 pt-0">
            <div className="mx-auto flex flex-col justify-center items-center">
                <div style={{backgroundImage:`url(${cover})`}}className="rounded-lg bg-cover bg-center w-[300px] h-[300px] mx-auto"/>
            </div>
            <div className="text-center">
                <div className="text-s font-bold">{name || ""}</div>
                <div className="text-xs">{artist || ""}</div>
            </div>
            {
            status === "success" &&
            <div className="flex flex-col text-xs">
                {
                    data?.tracks?.track.map((item => <div className="flex justify-between">
                        <div>{`${item["@attr"].rank}. ${item.name}`}</div>
                        <div>{item.duration}</div>
                    </div>))
                }
            </div>
            }
        </div>
    </>
}