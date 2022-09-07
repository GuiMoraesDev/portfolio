import { GetStaticProps } from 'next';

import { request, gql } from 'graphql-request';

import HomePage from 'views/Home';

export interface PortfolioProps {
	id: string;
	project_link: string;
	github_link: string;
	title: string;
	description: string;
}

export interface Props {
	portfolioData: PortfolioProps[];
}

const Page = ({ portfolioData }: Props) => {
	return <HomePage portfolioData={portfolioData} />;
};

interface GithubRequestProps {
	user: {
		pinnedItems: {
			nodes: Array<{
				id: string;
				homepageUrl: string;
				url: string;
				name: string;
				description: string;
			}>;
		};
	};
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const query = gql`
		{
			user(login: "GuiMoraesDev") {
				pinnedItems(first: 6, types: REPOSITORY) {
					nodes {
						... on Repository {
							id
							name
							url
							description
							homepageUrl
						}
					}
				}
			}
		}
	`;

	const headers = {
		Authorization: `bearer ${process.env.NEXT_PUBLIC_GH_TOKEN}`,
	};

	const response = await request<GithubRequestProps>(
		'https://api.github.com/graphql',
		query,
		undefined,
		headers
	);

	const data = response.user.pinnedItems.nodes.map((node) => ({
		id: node.id,
		project_link: node.homepageUrl,
		github_link: node.url,
		title: node.name,
		description: node.description,
	}));

	return {
		props: {
			portfolioData: data,
		},
	};
};

export default Page;
