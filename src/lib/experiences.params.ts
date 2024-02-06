import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Digital Max',
		description: 'Data Lake Architect for Digital Max’s new solution: \n- Designing an architecture for a data lake implementation',
		contract: ContractType.FullTime,
		type: 'Data Lake Architect',
		location: 'Home',
		period: { from: new Date(2023, 10, 1), to: new Date(2024, 1, 1) },
		skills: getSkills(),
		name: 'Data Lake Architect',
		color: 'red',
		links: [],
		logo: Assets.Digital,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Data Manager for Mutaero «Performance & Quality» department: \n- Renewing and optimizing data infrastructure \n- Deployment of machine learning algorithms \n- Building and configuration of data pipelines \n- Providing training sessions and awareness about data usage',
		contract: ContractType.FullTime,
		type: 'Data Manager Apprentice',
		location: 'Toulouse',
		period: { from: new Date(2021, 8, 1), to: new Date(2023, 8, 1) },
		skills: getSkills('tf', 'azure', 'python', 'postgre', 'pd', 'np'),
		name: 'Data Manager Apprentice',
		color: 'blue',
		links: [],
		logo: Assets.Mutaero,
		shortDescription: ''
	},
	{
		slug: 'software-freelance-junior',
		company: 'IRIT',
		description: 'Software Developer for one of the biggest research teams in France: \n - Integration of a planning algorithm into a routing optimization machine \n - Development of an application to integrate the results into a map',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Toulouse',
		period: { from: new Date(2020, 4, 1), to: new Date(2020, 6, 1) },
		skills: getSkills('c', 'python', 'bs'),
		name: 'Software Developer Intern',
		color: 'green',
		links: [],
		logo: Assets.IRIT,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
