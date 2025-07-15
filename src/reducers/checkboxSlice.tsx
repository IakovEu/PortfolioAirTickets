import { createSlice } from '@reduxjs/toolkit';

export const checkboxSlice = createSlice({
	name: 'checkbox',
	initialState: {
		checkbox1: false,
		checkbox2: false,
		checkbox3: false,
		checkbox4: false,
	},
	reducers: {
		changeFirstCB: (state) => {
			state.checkbox1 = !state.checkbox1;
		},
		changeSecondCB: (state) => {
			state.checkbox2 = !state.checkbox2;
		},
		changeThirdCB: (state) => {
			state.checkbox3 = !state.checkbox3;
		},
		changeFourthCB: (state) => {
			state.checkbox4 = !state.checkbox4;
		},
	},
});

export const { changeFirstCB, changeSecondCB, changeThirdCB, changeFourthCB } =
	checkboxSlice.actions;
