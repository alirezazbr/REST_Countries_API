import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface darkMode {
  darkMode: string
}
const initialState: darkMode = {
  darkMode: 'light',
}

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    storeDarkMode: (state, action: PayloadAction<string>) => {
      state.darkMode = action.payload
    },
  },
})

export default darkModeSlice.reducer
export const { storeDarkMode } = darkModeSlice.actions
