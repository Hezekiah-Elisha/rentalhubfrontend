import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    property: {},
    loading: false,
    error: false
};

const startAction = (state) => {
    state.loading = true;
    state.error = false;
}

const successAction = (state, action) => {
    state.property = action.payload;
    state.loading = false;
    state.error = false;
}

const failureAction = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

export const singlePropertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        getPropertyStart: startAction,
        getPropertySuccess: successAction,
        getPropertyFailure: failureAction,
        updatePropertyStart: startAction,
        updatePropertySuccess: successAction,
        updatePropertyFailure: failureAction,
        deletePropertyStart: startAction,
        deletePropertySuccess: successAction,
        deletePropertyFailure: failureAction,
    }
});

export const { getPropertyStart, getPropertySuccess, getPropertyFailure, updatePropertyStart, updatePropertySuccess, updatePropertyFailure, deletePropertyStart, deletePropertySuccess, deletePropertyFailure } = singlePropertySlice.actions;
export default singlePropertySlice.reducer;