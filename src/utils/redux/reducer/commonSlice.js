// src/reducers/counterSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: {
    visible: false,
    heading: '',
    body: '',
  },
  newsList: [],
  categoriesList: [],
  currentCategoryId: 0,
  settingsPage: [],
};

export const commonReducer = createSlice({
  name: 'commonReducer',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setNewsList(state, action) {
      state.newsList = action.payload;
    },
    setCategoriesList(state, action) {
      state.categoriesList = action.payload;
    },
    setCurrentCategoryId(state, action) {
      state.currentCategoryId = action.payload;
    },
    setSettingsPage(state, action) {
      state.settingsPage = action.payload;
    },
  },
});

export const {
  setLoading,
  setNewsList,
  setCategoriesList,
  setCurrentCategoryId,
  setSettingsPage,
} = commonReducer.actions;

export default commonReducer.reducer;
