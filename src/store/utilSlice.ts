import { StateCreator } from "zustand";

export interface UtilSlice {
  isOpenMobileMenu: boolean;
  setMobileMenu: () => void;
}

const useUtilSlice : StateCreator<UtilSlice> = (set, get) => ({
  isOpenMobileMenu: false,
  setMobileMenu: () => {
    set( state => ({ isOpenMobileMenu: !state.isOpenMobileMenu }));
  },
})

export {
  useUtilSlice 
}