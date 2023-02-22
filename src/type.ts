export interface columnSizeType {
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