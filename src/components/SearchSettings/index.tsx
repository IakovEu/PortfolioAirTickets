import st from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { changeCB } from '../../reducers/checkboxSlice';
import { changeRad } from '../../reducers/radioSlice';
import type { RootState, RootDispatch } from '../../reducers/store';
import type { CheckboxKeys } from '../../reducers/checkboxSlice';
import type { RadioKeys } from '../../reducers/radioSlice';

export const SearchSettings = () => {
	const checkboxes = useSelector((state: RootState) => state.checkbox);
	const radios = useSelector((state: RootState) => state.radio);
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
				<h2 className={st.title}>
					<span className={st.amount}>Количество пересадок</span>
					<span className={st.newAmount}>Пересадки</span>
				</h2>
				{transfer.map((el, ind) => {
					return (
						<div className={st.position} key={ind}>
							<Checkbox
								id={`checkbox-${ind}`}
								checked={checkboxes[('checkbox' + (ind + 1)) as CheckboxKeys]}
								className={st.checkbox}
								onChange={() => {
									dispatch(changeCB(ind + 1));
								}}
							/>
							<label htmlFor={`checkbox-${ind}`} style={{ cursor: 'pointer' }}>
								<p className={st.variant}>{el}</p>
							</label>
						</div>
					);
				})}
			</div>
			<div className={st.sideBlock}>
				<h2 className={st.title}>Компании</h2>
				<div className={st.position}>
					<RadioGroup className={st.radioGroup}>
						{airlines.map((el, ind) => {
							return (
								<FormControlLabel
									checked={radios[('radio' + (ind + 1)) as RadioKeys]}
									key={ind}
									value={el}
									control={
										<Radio
											className={st.radio}
											onChange={() => {
												dispatch(changeRad(ind + 1));
											}}
										/>
									}
									label={<Typography className={st.variant}>{el}</Typography>}
								/>
							);
						})}
					</RadioGroup>
				</div>
			</div>
		</div>
	);
};
