import st from './styles.module.scss';
import DP from '../../assets/Pobeda.png';
import WZ from '../../assets/RedWings.png';
import S7 from '../../assets/S7.png';
import { useMemo } from 'react';
import { sortFunction } from '../../sortFunction';
import { useSelector } from 'react-redux';
import type { RootState } from '../../reducers/store';

export const List = () => {
	const btns = useSelector((state: RootState) => state.button);
	const tickets = useSelector((state: RootState) => state.ticket.entities);
	const checkboxes = useSelector((state: RootState) => state.checkbox);
	const radios = useSelector((state: RootState) => state.radio);
	const airlines = { DP, WZ, S7 };
	type Airlines = 'DP' | 'WZ' | 'S7';

	const sortedTickets = useMemo(() => {
		if (tickets !== undefined) {
			return sortFunction(Object.values(tickets), btns, checkboxes, radios);
		}
		return [];
	}, [tickets, btns, checkboxes, radios]);

	return (
		<div className={st.tickets}>
			{sortedTickets?.map((el) => {
				return (
					<div className={st.ticket} key={el.id}>
						<div className={st.leftPart}>
							<p className={st.price}>{el.price} Р</p>
							<p className={st.destination}>{el.from + ' - ' + el.to}</p>
							<p className={st.time}>
								{el.time.startTime + ' - ' + el.time.endTime}
							</p>
						</div>
						<div className={st.middlePart}>
							<p className={st.vPuti}>В пути</p>
							<p className={st.duration}>{el.duration}</p>
						</div>
						<div className={st.rightPart}>
							<img
								className={st.logo}
								src={airlines[el.company as Airlines]}
								alt="*"
							/>
							<p className={st.peresadki}>Пересадки</p>
							<p className={st.connectionAmount}>
								{el.connectionAmount === 0
									? 'Без пересадок'
									: el.connectionAmount === 1
									? '1 пересадка'
									: el.connectionAmount + ' пересадки'}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
