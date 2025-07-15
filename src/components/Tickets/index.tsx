import st from './styles.module.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const Tickets = () => {
	const variants = [
		{ witch: 'Самый дешевый' },
		{ witch: 'Самый быстрый' },
		{ witch: 'Самый оптимальный' },
	];

	return (
		<div className={st.container}>
			<ButtonGroup
				variant="contained"
				aria-label="Basic button group"
				style={{ borderRadius: '10px' }}>
				{variants.map((el, ind) => {
					const buttonClassNames = [
						st.button,
						ind === 0 ? st.first : '',
						ind === 2 ? st.third : '',
					].join(' ');

					return (
						<Button className={buttonClassNames} key={ind}>
							{el.witch}
						</Button>
					);
				})}
			</ButtonGroup>
		</div>
	);
};
