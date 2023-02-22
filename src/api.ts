const API_KEY = '87661f0eab22e6448388fa50ffd2551d'
const getAlbums = async (titleParam : string, pageParam : number) => {
    // if (titleParam === "") return {data : null, isLast : true, nextPage : pageParam + 1};
    const {results : data} = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${titleParam}&api_key=${API_KEY}&page=${pageParam}&limit=15&format=json`).then(res => res.json());
    const isLast = data? (data["opensearch:totalResults"] - data["opensearch:startIndex"]) <= 15 : true;
    return {data : data.albummatches.album, isLast, nextPage : pageParam + 1}
}

export {
    getAlbums
}