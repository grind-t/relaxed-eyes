import dialogPolyfill from './dialog-polyfill';

export interface DialogDisplayParams {
	open?: boolean;
	modal?: boolean;
}

// HTMLDialogElement is experimental, so the element is of any type.
export function dialogDisplay(element: any, params: DialogDisplayParams): SvelteActionReturnType {
	dialogPolyfill.registerDialog(element);
	const update = (params: DialogDisplayParams) => {
		if (!params.open) element.close();
		else if (params.modal) element.showModal();
		else element.show();
	};
	update(params);
	return { update };
}
