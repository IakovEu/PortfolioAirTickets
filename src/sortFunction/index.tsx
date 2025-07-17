import type { Checkbox, CheckboxKeys } from '../reducers/checkboxSlice';
import type { Radio, RadioKeys } from '../reducers/radioSlice';
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
	const activeCB = Object.keys(checkB)
		.filter((key) => checkB[key as CheckboxKeys])
		.map((el) => {
			if (el === 'checkbox1') {
				return 0;
			} else if (el === 'checkbox2') {
				return 1;
			} else if (el === 'checkbox3') {
				return 2;
			} else if (el === 'checkbox4') {
				return 3;
			}
		});
	if (activeCB.length === 0) {
		return arr;
	}
	return arr.filter((el) => {
		if (el.connectionAmount !== null) {
			return activeCB.includes(el.connectionAmount as 0 | 1 | 2 | 3);
		}
		return false;
	});
};

// Вспомогательная функция - сортировка по радио (оборачиваю результат и добавляю функциональность)
const filterByRad = (arr: Ticket[], rad: Radio) => {
	const activeRad = Object.keys(rad)
		.filter((key) => rad[key as RadioKeys])
		.map((el) => {
			if (el === 'radio1') {
				return 'DP';
			} else if (el === 'radio2') {
				return 'WZ';
			} else if (el === 'radio3') {
				return 'S7';
			}
		});
	if (activeRad.length === 0) {
		return arr;
	}
	return arr.filter((el) => {
		if (el.connectionAmount !== null) {
			return activeRad.includes(el.company as 'DP' | 'WZ' | 'S7');
		}
		return false;
	});
};

// Основная функция возвращает отсортированный массив по всем параметрам, где каждая обертка отвечает за свой параметр
// filterByRad(filterByCB(массив, данные для сортировки), данные для сортировки)
export const sortFunction = (
	entity: Ticket[],
	activeBtn: ActiveBtn,
	cBoxes: Checkbox,
	radio: Radio
) => {
	const keyWithTrueValue = Object.entries(activeBtn).find(
		([key, value]) => value === true && key
	);
	if (keyWithTrueValue && keyWithTrueValue[0] === 'btn1') {
		return filterByRad(
			filterByCB(
				entity.sort((a, b) => a.price - b.price),
				cBoxes
			),
			radio
		);
	} else if (keyWithTrueValue && keyWithTrueValue[0] === 'btn2') {
		return filterByRad(
			filterByCB(
				entity.sort((a, b) => {
					const durationA = durationToMinutes(a.duration);
					const durationB = durationToMinutes(b.duration);
					return durationA - durationB;
				}),
				cBoxes
			),
			radio
		);
	} else if (keyWithTrueValue && keyWithTrueValue[0] === 'btn3') {
		return filterByRad(
			filterByCB(
				entity.sort((a, b) => a.connectionAmount! - b.connectionAmount!),
				cBoxes
			),
			radio
		);
	}
};
