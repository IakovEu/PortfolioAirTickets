import { createSlice } from '@reduxjs/toolkit';

type CheckboxKeys = 'checkbox1' | 'checkbox2' | 'checkbox3' | 'checkbox4';

export const checkboxSlice = createSlice({
	name: 'checkbox',
	initialState: {
		checkbox1: false,
		checkbox2: false,
		checkbox3: false,
		checkbox4: false,
	},
	reducers: {
		changeCB: (state, action) => {
			const checkboxKey: CheckboxKeys = ('checkbox' +
				action.payload) as CheckboxKeys;
			state[checkboxKey] = !state[checkboxKey];
		},
	},
});

export const { changeCB } = checkboxSlice.actions;
