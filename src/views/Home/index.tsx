import AboutSession from 'sessions/About';
import HeroSession from 'sessions/Hero';
import PortfolioSession from 'sessions/Portfolio';

import { Props } from 'pages';

import * as Styles from './styles';

const Home = ({ portfolioData }: Props): JSX.Element => {
	return (
		<Styles.Container>
			<HeroSession />
			<AboutSession />
			<PortfolioSession portfolioData={portfolioData} />
		</Styles.Container>
	);
};

export default Home;
