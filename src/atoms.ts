import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { albumType } from "./type";


const { persistAtom } = recoilPersist();
export const albumsState = atom<albumType[]>({
  key : "albums",
  effects_UNSTABLE: [persistAtom],
  default: [
  ]
})