import { createSlice } from '@reduxjs/toolkit';

export type Radio = {
	radio1: boolean;
	radio2: boolean;
	radio3: boolean;
};
export type RadioKeys = 'radio1' | 'radio2' | 'radio3';

const initialState: Radio = {
	radio1: false,
	radio2: false,
	radio3: false,
};

export const radioSlice = createSlice({
	name: 'radio',
	initialState,
	reducers: {
		changeRad: (state, action) => {
			for (const rad in state) {
				const radioKey: RadioKeys = ('radio' + action.payload) as RadioKeys;
				state[rad as RadioKeys] = rad === radioKey;
			}
		},
	},
});

export const { changeRad } = radioSlice.actions;
