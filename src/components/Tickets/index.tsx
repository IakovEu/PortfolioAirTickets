import st from './styles.module.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from './list';
import { SearchSettings } from '../SearchSettings';
import { changeBtn } from '../../reducers/buttonSlice';
import { fakeAsync } from '../../reducers/ticketSlice';
import type { RootState, RootDispatch } from '../../reducers/store';
import type { ButtonKeys } from '../../reducers/buttonSlice';
import type { RadioKeys } from '../../reducers/radioSlice';
import type { CheckboxKeys } from '../../reducers/checkboxSlice';

export const Tickets = () => {
	// Для удобства по отдельности вытащил
	const btns = useSelector((state: RootState) => state.button);
	const checkboxes = useSelector((state: RootState) => state.checkbox);
	const radios = useSelector((state: RootState) => state.radio);
	const dispatch = useDispatch<RootDispatch>();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const variants = ['Самый дешевый', 'Самый быстрый', 'Самый оптимальный'];
	const activeRad = Object.keys(radios)
		.filter((key) => radios[key as RadioKeys])
		.map((el) => {
			if (el === 'radio1') {
				return 'Победа,';
			} else if (el === 'radio2') {
				return 'Red Wings,';
			} else if (el === 'radio3') {
				return 'S7 Airlines,';
			}
		})[0];
	const activeCB = Object.keys(checkboxes)
		.filter((key) => checkboxes[key as CheckboxKeys])
		.map((el) => {
			if (el === 'checkbox1') {
				return '0';
			} else if (el === 'checkbox2') {
				return '1';
			} else if (el === 'checkbox3') {
				return '2';
			} else if (el === 'checkbox4') {
				return '3';
			}
		});

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
			<div className={st.settingsUnderBtns}>
				<div className={st.topPanel}>
					<p className={st.options}>
						{activeRad ?? 'Любая авиакомпания,'}
						{activeCB.length === 0
							? ' любое кол-во пересадок'
							: ` пересадок: ${activeCB}`}
					</p>
					<Button
						className={st.showSettings}
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}>
						<span className={st.btnSpan}>Открыть настройки</span>
						<ArrowForwardIosRoundedIcon
							className={
								isMenuOpen ? `${st.arrow} ${st.rotatedArrow}` : st.arrow
							}
						/>
					</Button>
				</div>
				{isMenuOpen && <SearchSettings />}
			</div>
			<List />
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
