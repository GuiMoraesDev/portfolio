import HeroSession from 'sessions/Hero';

import * as Styles from './styles';

const Home = (): JSX.Element => {
	return (
		<Styles.Container>
			<HeroSession />
		</Styles.Container>
	);
};

export default Home;
