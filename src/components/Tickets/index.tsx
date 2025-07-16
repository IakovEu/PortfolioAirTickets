import st from './styles.module.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, RootDispatch } from '../../reducers/store';
import { changeBtn } from '../../reducers/buttonSlice';
import type { ButtonKeys } from '../../reducers/buttonSlice';
import { useEffect } from 'react';
import { fakeAsync } from '../../reducers/ticketSlice';
import DP from '../../assets/Pobeda.png';
import WZ from '../../assets/RedWings.png';
import S7 from '../../assets/S7.png';

export const Tickets = () => {
	const dispatch = useDispatch<RootDispatch>();
	const btns = useSelector((state: RootState) => state.button);
	const tickets = useSelector((state: RootState) => state.ticket);
	const variants = ['Самый дешевый', 'Самый быстрый', 'Самый оптимальный'];
	const airlines = { DP, WZ, S7 };
	type Companies = 'DP' | 'WZ' | 'S7';

	useEffect(() => {
		dispatch(fakeAsync());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={st.container}>
			<ButtonGroup
				variant="contained"
				aria-label="Basic button group"
				style={{ borderRadius: '10px' }}>
				{variants.map((el, ind) => {
					const btnWithInd = `btn${ind + 1}`;
					const classes = [
						st.button,
						ind === 0 ? st.first : '',
						ind === 2 ? st.third : '',
						btns[btnWithInd as ButtonKeys] ? st.activeBtn : '',
					].join(' ');
					return (
						<Button
							className={classes}
							key={ind}
							onClick={() => {
								dispatch(changeBtn(ind + 1));
							}}>
							{el}
						</Button>
					);
				})}
			</ButtonGroup>
			<div className={st.tickets}>
				{Object.values(tickets.entities).map((el, ind) => {
					return (
						<div className={st.ticket} key={ind}>
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
									src={airlines[el.company as Companies]}
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
			<Button
				variant="contained"
				className={st.singleBtn}
				onClick={() => {
					dispatch(fakeAsync());
				}}>
				Загрузить еще билеты
			</Button>
		</div>
	);
};
