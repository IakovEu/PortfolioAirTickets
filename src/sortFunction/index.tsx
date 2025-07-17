import type { Checkbox } from '../reducers/checkboxSlice';
import type { Ticket } from '../reducers/ticketSlice';

type ActiveBtn = {
	btn1: boolean;
	btn2: boolean;
	btn3: boolean;
};

// Вспомогательная функция - строку в число
const durationToMinutes = (durationStr: string): number => {
	const hoursMatch = durationStr.match(/(\d+)\s*ч/);
	const minutesMatch = durationStr.match(/(\d+)\s*мин/);
	const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
	const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
	return hours * 60 + minutes;
};

// Вспомогательная функция - сортировка по чекбоксам (оборачиваю результат и добавляю функциональность)
const filterByCB = (arr: Ticket[], checkB: Checkbox) => {
	console.log(checkB);
	
};
// Вспомогательная функция - сортировка по радио (оборачиваю результат и добавляю функциональность)

export const sortFunction = (
	entity: Ticket[],
	activeBtn: ActiveBtn,
	cBoxes: Checkbox
) => {
	const keyWithTrueValue = Object.entries(activeBtn).find(
		([key, value]) => value === true && key
	);
	if (keyWithTrueValue && keyWithTrueValue[0] === 'btn1') {
		return filterByCB(
			entity.sort((a, b) => a.price - b.price),
			cBoxes
		);
	} else if (keyWithTrueValue && keyWithTrueValue[0] === 'btn2') {
		return entity.sort((a, b) => {
			const durationA = durationToMinutes(a.duration);
			const durationB = durationToMinutes(b.duration);
			return durationA - durationB;
		});
	} else if (keyWithTrueValue && keyWithTrueValue[0] === 'btn3') {
		return entity.sort((a, b) => a.connectionAmount! - b.connectionAmount!);
	}
};
