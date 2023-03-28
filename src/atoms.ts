import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { albumType, grabType, musicSettingType, topsterType } from "./type";

const { persistAtom } = recoilPersist();
export const topsterListState = atom<topsterType[]>({
  key: "topsterList",
  effects_UNSTABLE: [persistAtom],
  default: [
    {
      title: "",
      topsterId: 0,
      content: Array(64).fill(0).map(() => ({
        name: "",
        artist: "",
        image: [
          
        ]
      })),
    }
  ]
})
export const musicSettingState = atom<musicSettingType>({
  key: "musicSetting",
  effects_UNSTABLE: [persistAtom],
  default:{
    size: 5,
    topsterId: 0,
    isSearchMode: false,
    isTopsterMode: true,
    isCoverFlowMode: false,
    isListMode: false,
  }
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