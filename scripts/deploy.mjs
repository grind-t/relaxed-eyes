import 'dotenv/config';
import { env, argv } from 'process';
import { $, echo } from 'zx';

const args = argv.slice(2);

$`vercel pull --token ${env.VERCEL_TOKEN}`
	.then(() => $`vercel build --token ${env.VERCEL_TOKEN} ${args}`)
	.then(() => $`vercel --scope ${env.VERCEL_SCOPE} --token=${env.VERCEL_TOKEN} --prebuilt ${args}`)
	.then(({ stdout }) => echo(stdout));
