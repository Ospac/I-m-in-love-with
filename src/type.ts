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
export interface CoverArtProps{
    col : number,
    album: albumType,
    index: number
}
export interface EmptyCoverArtProps{
    col: number
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