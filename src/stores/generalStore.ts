import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"


export interface GeneralState {
    isDarkMode: boolean
}

export interface GeneralActions {
    setDarkMode: (isDarkMode: boolean) => void
}

export const useGeneralStore = create<GeneralState & GeneralActions>()(
    devtools(
        persist(
            (set) => ({
                isDarkMode: true,
                setDarkMode: (isDarkMode: boolean) => {
                    set({ isDarkMode })
                }
            }),
            {name: "general-storage"}
        )
    )
)