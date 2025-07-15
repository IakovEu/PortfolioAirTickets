import { Provider } from 'react-redux';
import st from './styles.module.scss';
import { store } from '../../reducers/store';
import { Header } from '../Header';
import { Main } from '../Main';

function App() {
	return (
		<Provider store={store}>
			<div className={st.layout}>
				<Header />
				<Main />
			</div>
		</Provider>
	);
}

export default App;
