import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { serverData } from '../fakeHttpResponse';

interface Ticket {
	id: number;
	from: string;
	to: string;
	company: string;
	price: number;
	currency: 'RUB';
	time: {
		startTime: string;
		endTime: string;
	};
	duration: string;
	connectionAmount: number | null;
}

const ticketAdapter = createEntityAdapter<Ticket>();

// Это заглушка запроса к серверу
export const fakeAsync = createAsyncThunk('ticket/fakeAsync', async () => {
	await new Promise((resolve) => setTimeout(resolve, 500));
	// Нормальный сервер возвращает по 3 новых билета у меня в заглушке fakeHttpRequest их всего 9
	// поэтому я каждый раз меняю их местами чтобы приходили все также по 3 но разные
	for (let i = 0; i < 3; i++) {
		serverData.push(serverData[0]);
		serverData.shift();
	}
	return serverData.slice(0, 3);
});

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState: ticketAdapter.getInitialState({ loading: false }),
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fakeAsync.pending, (state) => {
				state.loading = true;
			})
			.addCase(fakeAsync.fulfilled, (state, action) => {
				state.loading = false;
				ticketAdapter.upsertMany(state, action.payload);
			});
	},
});
