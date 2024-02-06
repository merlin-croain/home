import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'France',
		logo: Assets.Unknown,
		name: '',
		organization: 'LIUPPA',
		period: { from: new Date(2023, 11, 1), to: new Date(2024, 2, 1) },
		shortDescription: '',
		slug: 'phd',
		subjects: ['Big Data', 'Data Lakes']
	},
	{
		degree: 'MIAGE IDA - Master’s degree in machine learning and big data',
		description: '',
		location: 'Toulouse',
		logo: Assets.Capitole,
		name: 'MIAGE IDA',
		organization: 'University Capitole',
		period: { from: new Date(2021, 9, 1), to: new Date(2023, 9, 1) },
		shortDescription: '',
		slug: 'master',
		subjects: ['Python', 'Big Data', 'Machine Learning', 'Deep Learning']
	},
	{
		degree: 'Bachelor’s degree in computer science',
		description: '',
		location: 'Toulouse',
		logo: Assets.UPS,
		name: '',
		organization: 'University Paul Sabatier',
		period: { from: new Date(2020, 9, 1), to: new Date(2021, 9, 1) },
		shortDescription: '',
		slug: 'bachelor',
		subjects: ['Python', 'Java', 'Algorithm', 'Data Base']
	},
	{
		degree: 'Bachelor of technology in computer science',
		description: '',
		location: 'Toulouse',
		logo: Assets.IUT,
		name: '',
		organization: 'University Jean Jaures',
		period: { from: new Date(2018, 9, 1), to: new Date(2020, 9, 1) },
		shortDescription: '',
		slug: 'technology',
		subjects: ['Python', 'Java', 'Algorithm', 'Data Base', 'C']
	}
];
