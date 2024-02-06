import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'idea',
		color: '#5e95e3',
		description:
			'Establishment of a fictitious enterprise featuring collaborations with corporations \n - Development of dashboards for a movie theater to analyze their data \n - Creation of an OCR system to accurately read license plates',
		shortDescription:
			'Establishment of a fictitious enterprise featuring collaborations with corporations',
		links: [{ to: 'https://github.com/IDeAmiage', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'IDeA',
		period: {
			from: new Date(2021, 8, 1), to: new Date(2023, 8, 1)
		},
		skills: getSkills('js', 'ts', 'java', 'tf', 'python'),
		type: 'Data'
	},
	{
		slug: 'chatterminal',
		color: '#ff3e00',
		description:
			'Development of a replicated ChatGPT system \n- Design and development of a website equipped with ChatGPT-like functionalities \n- Integration of an LLM algorithm with tuning capabilities',
		shortDescription:
			'Development of a replicated ChatGPT system',
		links: [{ to: 'https://github.com/merlin-croain/ChatTerminal', label: 'GitHub' }],
		logo: Assets.Terminal,
		name: 'ChatTerminal',
		period: {
			from: new Date(2023, 1, 1),
			to: new Date(2023, 2, 1)
		},
		skills: getSkills('tf', 'flask', 'python'),
		type: 'Machine Learning',
	}
];

export default MY_PROJECTS;
