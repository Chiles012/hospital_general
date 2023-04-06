import { Banner, ContentEspecialty, Filtros,  } from '../components/Home';
import '../sass/pages/home.page.scss';

const Home = () => {
    return (
        <>
            <Banner />
            <Filtros />
            <ContentEspecialty />
        </>
    );
};

export default Home;