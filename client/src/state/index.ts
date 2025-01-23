/*
 * @Author: Mecil Meng
 * @Date: 2025-01-19 16:17:41
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-19 16:22:00
 * @FilePath: /project_manager_system/client/src/state/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateType {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateType = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
