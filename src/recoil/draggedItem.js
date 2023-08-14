import { atom } from "recoil";

export const draggedState = atom({
  key: "draggeditem",
  default: null,
});
