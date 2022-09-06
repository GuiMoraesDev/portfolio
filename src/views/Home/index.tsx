import AboutSession from 'sessions/About';
import HeroSession from 'sessions/Hero';
import PortfolioSession from 'sessions/Portfolio';

import * as Styles from './styles';

const Home = (): JSX.Element => {
	return (
		<Styles.Container>
			<HeroSession />
			<AboutSession />
			<PortfolioSession />
		</Styles.Container>
	);
};

export default Home;
