import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AWS: a('aws.svg'),
	C: a('c.svg'),
	Django: a('django.svg'),
	Flask: a('flask.svg'),
	Neo4j: a('neo4j.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetees.svg'),
	TypeScript: a('ts.png'),
	Python: a('python.png'),
	JavaScript: a('js.png'),
	Java: a('java.png'),
	PostgreSQL: a('postgres.png'),
	Unknown: a('no-img.svg'),
	TensorFlow: a('tensorflow.svg'),
	Pytorch: a('pytorch.svg'),
	Bash: a('bash.svg'),
	R: a('r.svg'),
	Seaborn: a('seaborn.svg'),
	Plotly: a('plotly.svg'),
	Azure: a('azure.svg'),
	Spark: a('spark.svg'),
	Hadoop: a('hadoop.svg'),
	Git: a('git.svg'),
	Linux: a('linux.svg'),
	UPS: a('ups.png'),
	Capitole: a('capitole.jpg'),
	IRIT: a('irit.svg'),
	Mutaero: a('mutaero.png'),
	Terminal: a('terminal.svg'),
	Digital: a('digital-max.jpg'),
	IUT: a('iut.png'),
	Oracle: a('oracle.svg')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
