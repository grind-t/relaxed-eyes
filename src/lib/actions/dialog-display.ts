import dialogPolyfill from '$lib/compatibility/dialog-polyfill';

export interface DialogDisplayParams {
	open?: boolean;
	modal?: boolean;
}

export default function dialogDisplay(
	// HTMLDialogElement is experimental, so the element is of any type.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	element: any,
	params: DialogDisplayParams
): SvelteActionReturnType {
	dialogPolyfill.registerDialog(element);
	const update = (params: DialogDisplayParams) => {
		if (!params.open) element.close();
		else if (params.modal) element.showModal();
		else element.show();
	};
	update(params);
	return { update };
}
