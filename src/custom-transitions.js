import { cubicOut } from 'svelte/easing';

export function expand(node, params) {
	const {
		delay = 0,
		duration = 2,
		easing = cubicOut
	} = params;

	const w = parseFloat(getComputedStyle(node).strokeWidth);

	return {
		delay,
		duration,
		easing,
		css: t => `opacity: ${t}; stroke-width: ${t * w}`
	};
}