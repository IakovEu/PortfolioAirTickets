import { createSlice } from '@reduxjs/toolkit';

export type Checkbox = {
	checkbox1: boolean;
	checkbox2: boolean;
	checkbox3: boolean;
	checkbox4: boolean;
};
type CheckboxKeys = 'checkbox1' | 'checkbox2' | 'checkbox3' | 'checkbox4';

const initialState: Checkbox = {
	checkbox1: false,
	checkbox2: false,
	checkbox3: false,
	checkbox4: false,
};

export const checkboxSlice = createSlice({
	name: 'checkbox',
	initialState,
	reducers: {
		changeCB: (state, action) => {
			const checkboxKey: CheckboxKeys = ('checkbox' +
				action.payload) as CheckboxKeys;
			state[checkboxKey] = !state[checkboxKey];
		},
	},
});

export const { changeCB } = checkboxSlice.actions;
