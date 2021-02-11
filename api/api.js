import { stringify } from 'qs';

export const STATAMIC_ENDPOINT = process.env.STATAMIC_API_ENDPOINT;

/**
 * Fetch from the Statamic API
 * @param {string} endpoint
 * @param {object} params
 */
export async function fetchAPI(endpoint, params) {

    const headers = { 'Content-Type': 'application/json' };
    const query = stringify(params, { encode: false });
    const url = `${STATAMIC_ENDPOINT}/${endpoint}?${query}`;

    const res = await fetch(url, { headers });

    const json = await res.json();

    if(json.errors) {
        console.error(errors);
        throw new Error('Request to CMS failed');
    }

    return {
        data: json.data,
        meta: json.meta,
        links: json.links
    };
}
