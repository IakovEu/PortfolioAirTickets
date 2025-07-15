import {
	changeFirstCB,
	changeSecondCB,
	changeThirdCB,
	changeFourthCB,
} from '../../reducers/checkboxSlice';
import {
	changeFirstRad,
	changeSecondRad,
	changeThirdRad,
} from '../../reducers/radioSlice';
import st from './styles.module.scss';
import Checkbox from '@mui/material/Checkbox';
import type { RootDispatch } from '../../reducers/store';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

export const SearchSettings = () => {
	const dispatch = useDispatch<RootDispatch>();
	const transfer = [
		{ how: 'Без пересадок', ff: changeFirstCB },
		{ how: '1 пересадка', ff: changeSecondCB },
		{ how: '2 пересадки', ff: changeThirdCB },
		{ how: '3 пересадки ', ff: changeFourthCB },
	];
	const airlines = [
		{ how: 'Победа', ff: changeFirstRad },
		{ how: 'Red Wings', ff: changeSecondRad },
		{ how: 'S7 Airlines', ff: changeThirdRad },
	];

	return (
		<div className={st.settings}>
			<div className={st.sideBlock}>
				<h2 className={st.title}>Количество пересадок</h2>
				{transfer.map((el, ind) => {
					return (
						<div className={st.position} key={ind}>
							<Checkbox
								sx={{
									color: '#4e148c',
									'&.Mui-checked': {
										color: '#4e148c',
									},
								}}
								onChange={() => {
									dispatch(el.ff());
								}}
							/>
							<p className={st.variant}>{el.how}</p>
						</div>
					);
				})}
			</div>
			<div className={st.sideBlock}>
				<h2 className={st.title}>Компании</h2>
				<div className={st.position}>
					<RadioGroup
						sx={{
							marginLeft: '10px',
						}}>
						{airlines.map((el, ind) => {
							return (
								<FormControlLabel
									key={ind}
									value={el.how}
									control={
										<Radio
											sx={{
												color: '#4e148c',
												'&.Mui-checked': {
													color: '#4e148c',
												},
											}}
											onChange={() => {
												dispatch(el.ff());
											}}
										/>
									}
									label={
										<Typography
											sx={{
												color: '#858AE3',
												fontFamily: 'Inter',
												marginLeft: '10px',
											}}>
											{el.how}
										</Typography>
									}
								/>
							);
						})}
					</RadioGroup>
				</div>
			</div>
		</div>
	);
};
