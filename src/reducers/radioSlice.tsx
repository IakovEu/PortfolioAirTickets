import { createSlice } from '@reduxjs/toolkit';

type RadioKeys = 'radio1' | 'radio2' | 'radio3';

export const radioSlice = createSlice({
	name: 'radio',
	initialState: {
		radio1: false,
		radio2: false,
		radio3: false,
	},
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
