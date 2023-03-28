export interface ISize {
    [key: number] : string;
}
export interface albumType {
    artist: string
    name: string
    image: {
        [index : number] : {
            "#text": string,
            size : string
        }
    }
}
// export interface albumsType {
//     albummatches: {
//         album : albumType[]
//     }
//     "opensearch:Query": Object,
//     "opensearch:itemsPerPage": string
//     "opensearch:startIndex": string
//     "opensearch:totalResults": string
   
// }

export interface topsterType{
    title : string,
    topsterId : number,
    content: albumType[],
}
export interface albumInfoType{
    tracks: {
        track : trackType[]
    }
}
interface trackType {
    duration : number,
    name : string,
    "@attr" : {
        rank : number,
    }
}
export interface musicSettingType{
    size: number,
    topsterId: number,
    isSearchMode: boolean,
    isTopsterMode: boolean,
    isCoverFlowMode: boolean,
    isListMode : boolean,
}
export interface grabType {
    pos : number,
    album: {
        artist: string
        name: string
        image: {
            [index : number] : {
                "#text": string,
                size : string
            }
        }
    }
}