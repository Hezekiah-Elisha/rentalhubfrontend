import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    properties: [],
    loading: false,
    error: false
};

const startAction = (state) => {
    state.loading = true;
    state.error = false;
};

const successAction = (state, action) => {
    state.properties = action.payload;
    state.loading = false;
    state.error = false;
};

const failureAction = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

export const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        getPropertiesStart: startAction,
        getPropertiesSuccess: successAction,
        getPropertiesFailure: failureAction,
        getPropertyByIdStart: startAction,
        getPropertyByIdSuccess: successAction,
        getPropertyByIdFailure: failureAction,
        createPropertyStart: startAction,
        createPropertySuccess: successAction,
        createPropertyFailure: failureAction,
        uploadImageStart: startAction,
        uploadImageSuccess: successAction,
        uploadImageFailure: failureAction,
    }
});

export const { getPropertiesStart, getPropertiesSuccess, getPropertiesFailure, getPropertyByIdStart, getPropertyByIdSuccess, getPropertyByIdFailure, createPropertyStart, createPropertySuccess, createPropertyFailure, uploadImageStart, uploadImageSuccess, uploadImageFailure } = propertySlice.actions;
export default propertySlice.reducer;