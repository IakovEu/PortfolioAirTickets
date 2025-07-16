import st from './styles.module.scss';
import Checkbox from '@mui/material/Checkbox';
import type { RootDispatch } from '../../reducers/store';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { changeCB } from '../../reducers/checkboxSlice';
import { changeRad } from '../../reducers/radioSlice';

export const SearchSettings = () => {
	const dispatch = useDispatch<RootDispatch>();
	const airlines = ['Победа', 'Red Wings', 'S7 Airlines'];
	const transfer = [
		'Без пересадок',
		'1 пересадка',
		'2 пересадки',
		'3 пересадки ',
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
									dispatch(changeCB(ind + 1));
								}}
							/>
							<p className={st.variant}>{el}</p>
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
									value={el}
									control={
										<Radio
											sx={{
												color: '#4e148c',
												'&.Mui-checked': {
													color: '#4e148c',
												},
											}}
											onChange={() => {
												dispatch(changeRad(ind + 1));
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
											{el}
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
