// Замена данных с сервера, чтобы не использовать реальный запрос

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

export const serverData: Ticket[] = [
	{
		id: 1,
		from: 'SVO',
		to: 'LED',
		company: 'DP',
		price: 12680,
		currency: 'RUB',
		time: {
			startTime: '12:00',
			endTime: '16:30',
		},
		duration: '4 ч 30 мин',
		connectionAmount: 1,
	},
	{
		id: 2,
		from: 'SVO',
		to: 'IST',
		company: 'WZ',
		price: 10300,
		currency: 'RUB',
		time: {
			startTime: '00:00',
			endTime: '02:00',
		},
		duration: '2 ч 0 мин',
		connectionAmount: 3,
	},
	{
		id: 3,
		from: 'DME',
		to: 'AYT',
		company: 'WZ',
		price: 32100,
		currency: 'RUB',
		time: {
			startTime: '16:40',
			endTime: '20:00',
		},
		duration: '5 ч 20 мин',
		connectionAmount: 0,
	},
	{
		id: 4,
		from: 'VKO',
		to: 'ESB',
		company: 'S7',
		price: 15055,
		currency: 'RUB',
		time: {
			startTime: '07:00',
			endTime: '13:00',
		},
		duration: '6 ч 0 мин',
		connectionAmount: 2,
	},
	{
		id: 5,
		from: 'VKO',
		to: 'AYT',
		company: 'DP',
		price: 10800,
		currency: 'RUB',
		time: {
			startTime: '12:00',
			endTime: '18:00',
		},
		duration: '6 ч 0 мин',
		connectionAmount: 2,
	},
	{
		id: 6,
		from: 'SVO',
		to: 'IST',
		company: 'WZ',
		price: 33080,
		currency: 'RUB',
		time: {
			startTime: '17:30',
			endTime: '22:00',
		},
		duration: '4 ч 30 мин',
		connectionAmount: 0,
	},
	{
		id: 7,
		from: 'SVO',
		to: 'AYT',
		company: 'WZ',
		price: 44900,
		currency: 'RUB',
		time: {
			startTime: '11:00',
			endTime: '15:00',
		},
		duration: '4 ч 0 мин',
		connectionAmount: 0,
	},
	{
		id: 8,
		from: 'DME',
		to: 'IST',
		company: 'DP',
		price: 7605,
		currency: 'RUB',
		time: {
			startTime: '08:00',
			endTime: '11:00',
		},
		duration: '3 ч 0 мин',
		connectionAmount: 1,
	},
	{
		id: 9,
		from: 'VKO',
		to: 'SAW',
		company: 'S7',
		price: 12200,
		currency: 'RUB',
		time: {
			startTime: '10:00',
			endTime: '15:00',
		},
		duration: '5 ч 0 мин',
		connectionAmount: 1,
	},
];
