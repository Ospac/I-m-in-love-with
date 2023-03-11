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
export interface albumsType {
    albummatches: {
        album : albumType[]
    }
    "opensearch:Query": Object,
    "opensearch:itemsPerPage": string
    "opensearch:startIndex": string
    "opensearch:totalResults": string
   
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
    title: string,
    size: number,
    isSearchMode: boolean,
    isTopsterMode: boolean
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