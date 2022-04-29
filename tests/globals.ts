import { readFile } from 'fs/promises';

function getStringsLoader() {
	const memo = {};
	return async (key: string) => {
		if (!memo[key]) {
			const path = `src/lib/g11n/l10n/${key}/en.json`;
			const content = await readFile(path, 'utf-8');
			memo[key] = JSON.parse(content);
		}
		return memo[key];
	};
}

const loadStrings = getStringsLoader();

export function getStrings(pageName: string) {
	const tasks = [loadStrings('common'), loadStrings(pageName)];
	return Promise.all(tasks).then(([a, b]) => ({ ...a, ...b }));
}
