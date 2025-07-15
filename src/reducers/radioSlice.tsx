import { createSlice } from '@reduxjs/toolkit';

export const radioSlice = createSlice({
	name: 'radio',
	initialState: {
		radio1: false,
		radio2: false,
		radio3: false,
	},
	reducers: {
		changeFirstRad: (state) => {
			state.radio1 = true;
			state.radio2 = false;
			state.radio3 = false;
		},
		changeSecondRad: (state) => {
			state.radio1 = false;
			state.radio2 = true;
			state.radio3 = false;
		},
		changeThirdRad: (state) => {
			state.radio1 = false;
			state.radio2 = false;
			state.radio3 = true;
		},
	},
});

export const { changeFirstRad, changeSecondRad, changeThirdRad } =
	radioSlice.actions;
