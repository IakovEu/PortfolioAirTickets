import st from './styles.module.scss';
import { SearchSettings } from '../SearchSettings';
import { Tickets } from '../Tickets';

export const Main = () => {
	return (
		<main className={st.main}>
			<div className={st.showOrHideSettings}>
				<SearchSettings />
			</div>
			<Tickets />
		</main>
	);
};
