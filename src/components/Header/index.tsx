import st from './styles.module.scss';
import plane from '../../assets/plane.png'

export const Header = () => {
    return (
        <header className={st.header}>
            <img src={plane} alt="*"/>
            <h1 className={st.title}>Поиск авиабилетов</h1>
        </header>
    )
};
