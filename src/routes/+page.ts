import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const response = await fetch('/data/data.json');
    const data = await response.json();

    return { data };
}) satisfies PageLoad;