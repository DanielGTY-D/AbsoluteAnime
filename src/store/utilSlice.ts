import { StateCreator } from "zustand";

export interface UtilSlice {
  queryString: string;
  setQueryString: (query: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const useUtilSlice : StateCreator<UtilSlice> = (set) => ({
  isMobileMenuOpen: false,
  queryString: "",
  setQueryString: (query: string) => {
    set({ queryString: query });
  },
  setIsMobileMenuOpen: (isOpen: boolean) => {
    set({ isMobileMenuOpen: isOpen });
  },
})

export {
  useUtilSlice 
}