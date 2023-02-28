import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { albumType, grabType } from "./type";


const { persistAtom } = recoilPersist();
export const albumsState = atom<albumType[]>({
  key : "albums",
  effects_UNSTABLE: [persistAtom],
  default: Array(64).fill(0).map(() => ({
    name: "",
    artist: "",
    image: [
      
    ]
  }))
})
export const albumGrabState = atom<grabType>({
  key: "grabAlbum",
  default: {
    pos : -1,
    album : {
      name: "",
      artist: "",
      image: []
    }
  }
})
export const clickedAlbumState = atom<albumType>({
  key: "clickedAlbum",
  default: {
    name: "",
    artist: "",
    image: [],
  }
})