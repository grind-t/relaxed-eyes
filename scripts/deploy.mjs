import 'dotenv/config';
import { env } from 'process';
import { $, argv, echo } from 'zx';

const flags = [argv.prod && '--prod'].filter(Boolean);

$`vercel pull --token ${env.VERCEL_TOKEN}`
	.then(() => $`vercel build --token ${env.VERCEL_TOKEN} ${flags}`)
	.then(() => $`vercel --scope ${env.VERCEL_SCOPE} --token=${env.VERCEL_TOKEN} --prebuilt ${flags}`)
	.then(({ stdout }) => echo(stdout));
